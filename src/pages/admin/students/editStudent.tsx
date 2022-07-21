import React, { useState } from "react";

const initialValues = {
    firstName: "",
    lastName: "",
    semester: "",
    dateOfBirth: "",
    address: "",
    phoneNumber: "",
    getData: ""
};

const EditStudent = (props: any) => {
    const [editForm, seteditForm] = useState(initialValues);
    const {
        firstName,
        lastName,
        semester,
        dateOfBirth,
        address,
        phoneNumber,
        getData
    }= editForm;
     const onValueChange = (event: any) => {
         seteditForm({ ...editForm, [event.target.firstName]: event.target.value });
  };
    const handleEditButtonClick = (val: any) => props.history.push(`/upcompanymaster/${val.CmpnyCode}`)
    
//   props.history.push('/yourLink', {
//   prop1: '',
//   prop2: ''
// });  
    return (
        <>
             <p>gggggggggg</p>
          <form action="" className="from-sty">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <input type="text" 
                        name="FirstName"
                        value={firstName}
                        onChange={(onValueChange) }
                        id="FirstName" className="form-control" 
                        placeholder="FirstName" />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" 
                        name="LastName"
                        value={lastName}
                        onChange={onValueChange}
                        className="form-control" placeholder="LastName" />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" 
                        name="semester" 
                        value={semester}
                        onChange={onValueChange}
                        className="form-control" placeholder="Class" />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text"   
                        name="dateOfBirth"
                        value={dateOfBirth}
                        onChange={onValueChange}
                        className="form-control" placeholder="DateOfBirth" />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text"   
                        name="address"
                        value={address}
                        onChange={onValueChange}
                        className="form-control" placeholder="Address" />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text"   
                        name="PhoneNumber"
                        value={phoneNumber}
                        onChange={onValueChange}
                        className="form-control" placeholder="PhoneNumber" />
                    </div>
                </div>
                    <button className="btn btn-primary btn-block" onClick={() => handleEditButtonClick}>Edit</button>

            </form>          
        </>
    )
}
export default EditStudent;