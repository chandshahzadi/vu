import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { NavLink, Link } from "react-router-dom";
const StudentTable = () => {
    const [students, setStudents] = useState<any[]>([])
    const [DeleteData, setDeleteData] = useState<any[]>([])
    const getData = async () => {
        const response = await axios.get('http://localhost:3001/students');
        setStudents(previousState => response.data.docs)  
        console.log("chand", response.data.docs)
    }
    useEffect(() => {
        getData();
    }, [])
    const handleDeleteStudent = async (_id: string) => {
         console.log("check the id", _id)
        const recieveData = await axios.delete("http://localhost:3001/students/" + _id)
        console.log("checkkkkkkkk", recieveData)
    };
    const handleEditStudent = async (_id: string) => {
        console.log("editt")
    }
    return (
        <>
            <table className="table table-responsive-md">
                <thead>
                    <tr>
                        <th style={{ width: "20px" }}></th>
                        <th><strong>FirstName</strong></th>
                        <th><strong>LastName</strong></th>
                        <th><strong>Semester</strong></th>
                        <th><strong>DateOFBirth</strong></th>
                        <th><strong>Address</strong></th>
                        <th><strong>Phone No.</strong></th>
                        <th><strong>Action</strong></th>
                    </tr>
                </thead>    
                <tbody>
                    {students.map((student, index) =>(
                        <tr key={index}>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.semester}</td>
                            <td>{student.dateOfBirth}</td>
                            <td>{student.address}</td>
                            <td>{student.phoneNumber}</td>
                            <td>
                                <Link to={"/dashboard/admin/students/edit/" + student._id}><button type="button" className="btn btn-primary mb-2" data-toggle="modal" data-target="#basicModal" onClick={()=> handleEditStudent(student._id)}>Edit</button></Link>
                                <button type="button" className="btn btn-primary mb-2" data-toggle="modal" data-target="#basicModal" onClick={() => handleDeleteStudent(student._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default StudentTable;
