import React, { useState } from "react";
import axios from "axios";
// import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const EditStudent = (prop : any) => {
      const [student, setStudent] = useState({
        firstName: "",
        lastName: "",
        semester: "",
        dateOfBirth: "",
        address: "",
        phoneNumber: "",
        getstudent : ""
      });
    // const location = useLocation();
    // const state = location.state;

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
    const id = prop.location.state.id;

    const getStudent = async () => {
        const response = await axios.get("http://localhost:3002/students/" + id);
        setStudent((student) => ({
            ...student,
            firstName: response.data.student.firstName,
            lastName: response.data.student.lastName,
            semester: response.data.student.semester,
            dateOfBirth: response.data.student.dateOfBirth,
            address: response.data.student.address,
            phoneNumber: response.data.student.phoneNumber
        }));
    }
    console.log("id", id)
    const navigate = useNavigate();
    const submitBtnOnclick = async (event: any) => {
        event.preventDefault();
        const response = await axios.post("http://localhost:3002/students/" + id, student);
        // navigate('/students/edit'); 
        console.log("res", response)
    }
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
                <button className="btn btn-primary btn-block" onClick={() => submitBtnOnclick}>Submittt</button>
            </form>  
        </>
    )
}
export default EditStudent;