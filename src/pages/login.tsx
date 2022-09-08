// import React from "react";
import React, { useState } from 'react';
import axios from "axios";

const API_URL = "http://localhost:3001";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [errorEmail, seterrorEmail] = useState(false);
    const [errorPassword, seterrorPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    // const [errorEmail, setErrorEmail] = useState(false);
    // const [errorPassword, setErrorPassword] = useState(false);

    const onFormSubmit = async () => {
        let validation = true;

        if (email == "") {
            seterrorEmail(true);
            validation = false;
        } else {

            seterrorEmail(false);
        } 

        if (password == "") {
            seterrorPassword(true);
            validation = false;
        } else {
            seterrorPassword(false);
        }
       if (validation) {
           try{
               const response = await axios.post(API_URL + "/authorization/login",{
                   email,
                   password

               });

               const user = response.data;
               console.log({user});
               if(!user){
                   // if username or password is correct, we will get user as null
                   // if user value is null, that means the password or username is wrong
                   // let's show the error.
                    setError("Invalid username or password");
               } else {
                    // if user is not null, that means username or password was correct
                    // let's display the success message and store the information in localStorage
                    if(!!error){
                        setError(null);
                    }
                    setSuccess(true);
                    // store user information in LocalStorage so that on next 
                    // page while user is loggedin, we can get that information to display
                    localStorage.setItem('USER', JSON.stringify(user));
                    // Remove the error if there is any
                    window.location.href = '/dashboard';
               }
           } catch(e){
                console.log(e);
           }  
       }         
    };
    return(        
    <div className="authincation h-100">
        <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
                <div className="col-md-6">
                    <div className="authincation-content">
                        <div className="row no-gutters">
                            <div className="col-xl-12">
                                <div className="auth-form">
                                    <div className="logo-wrapper">
                                        <img src="/vu.png"></img>
                                    </div>
                                    <p className="text-center mb-4">Sign in your account</p>
                                    <form>
                                        <div className="form-group">
                                            <label className="mb-1">
                                                <strong>Email</strong>
                                            </label>
                                            <input type="email" className="form-control" value={email} onChange={(e)=> setEmail(e.target.value)
                                            }/>

                                            {
                                                errorEmail && (
                                                    <p className='text-danger error-msg'>Email is a required field</p>
                                                )
                                            }
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1">
                                                <strong>Password</strong>
                                            </label>
                                            <input type="password" className="form-control" value={password}  onChange={(e)=> setpassword(e.target.value)} />
                                            {
                                                errorPassword && (
                                                    <p className='text-danger error-msg'>Password is a required field</p>
                                                )
                                            }
                                        </div>
                                        <div className="form-row d-flex justify-content-between mt-4 mb-2">
                                            <div className="form-group">
                                                <a href="page-forgot-password.html">Forgot Password?</a>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button type="button" className="btn btn-primary btn-block" onClick={onFormSubmit} > Login</button>
                                        </div>
                                            {
                                                !!error && (
                                                    <p className='text-danger error-msg'>{error}</p>
                                                )
                                            }
                                            {
                                                !!success && (
                                                    <p className='text-success error-msg'>Loggedin Succesfully.</p>
                                                )
                                            }
                                    </form>

                                    <div className="new-account mt-3">
                                        <p>Don't have an account? <a className="text-primary" href="/register">Sign up</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
    </div>
    </div> 
    )
}
export default Login;
