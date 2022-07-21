import StudentTable from "./Table";
import FormTable from "./form";
import { useState } from "react";


const Students = () => {
    const [showModal, setShowModal] = useState(false);
    // state = {message: ""}
    // CallBackFunction = (childData) => {
    //     this.state.({message: childData}})
    // }
    return (
        <>
            <div className="text-right" style={{marginTop: 10}}>
                <button type="button" className="btn btn-primary mb-2" data-toggle="modal" data-target="#basicModal" onClick={() => setShowModal(true)}>Add New</button>
            </div>        
            <StudentTable />
            {
                !!showModal && (
                    <FormTable onClose={setShowModal}/>
                )
            }
        </>
    )
}
 export default Students;