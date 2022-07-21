import FormTable from "./table";
import Form from "./form";
import { useState } from "react";


const Teachers = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className="text-right" style={{marginTop: 10}}>
                <button type="button" className="btn btn-primary mb-2" data-toggle="modal" data-target="#basicModal" onClick={() => setShowModal(true)}>Add New</button>
            </div>        
            <FormTable />
            {
                !!showModal && (
                    <Form  onClose={setShowModal} />
                )
            }
        </>
    )
}
 export default Teachers;