import React, { useState } from "react";
import axios from "axios";
import { Route, useParams, Link } from 'react-router-dom';
import { useEffect } from "react";


const EditStudent = () => {
      const [student, setStudent] = useState({
        firstName: "",
        lastName: "",
        semester: "",
        dateOfBirth: "",
        address: "",
        phoneNumber: "",
        getstudent : ""
      });
    
    const test = "";
    const onChangeFirstName = (event: any) => {
        setStudent((student) => ({
            ...student,
            firstName: event.target.value,
        }));
    }
    const onChangeLastName = (event: any) => {
        setStudent((student) => ({
            ...student,
            lastName: event.target.value,
        }));
    }
    const onChangeSemester = (event: any) => {
        setStudent((student) => ({
            ...student,
            semester: event.target.value,
        }));
    }
    const onChangeDateOfBirth = (event: any) => {
        setStudent((student) => ({
            ...student,
            dateOfBirth: event.target.value,
        }));
    }
    const onChangeAddress = (event: any) => {
        setStudent((student) => ({
            ...student,
            address: event.target.value,
        }));
    }
    const onChangePhoneNumber = (event: any) => {

        setStudent((student) => ({
            ...student,
            phoneNumber: event.target.value,
        }));
    }
     let { id }: any = useParams();
    const handleEditButtonClick = async () => { 
        
    } 
    const getStudent = async() => {
        const response = await axios.get("http://localhost:3001/students/" + id);
        setStudent(previousState => response.data.student) 
        console.log("check",response )
    }
    useEffect (() => {
        getStudent();
    }, [])
    return (
        <>
          <form action="" className="from-sty">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <input type="text" 
                        name="FirstName"
                        value={student.firstName}
                        onChange={onChangeFirstName}
                        id="FirstName" className="form-control" 
                        placeholder="FirstName" />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" 
                        name="LastName"
                        value={student.lastName}
                        onChange={onChangeLastName}
                        className="form-control" placeholder="LastName" />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" 
                        name="semester" 
                        value={student.semester}
                        onChange={onChangeSemester}
                        className="form-control" placeholder="Class" />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text"   
                        name="dateOfBirth"
                        value={student.dateOfBirth}
                        onChange={onChangeDateOfBirth}
                        className="form-control" placeholder="DateOfBirth" />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text"   
                        name="address"
                        value={student.address}
                        onChange={onChangeAddress}
                        className="form-control" placeholder="Address" />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text"   
                        name="PhoneNumber"
                        value={student.phoneNumber}
                        onChange={onChangePhoneNumber}
                        className="form-control" placeholder="PhoneNumber" />
                    </div>
                </div>
                    <button className="btn btn-primary btn-block" onClick={handleEditButtonClick}>Edit</button>

            </form>  
        </>
    )
}
export default EditStudent;