import React, {useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import {updateUserName} from "../firebaseConfig";


function EditUserModal(props){

    const [show, setShow] = useState(props.editUser)
    const [name, setName] = useState("")
    const [nameError, setNameError] = useState("")


    const handleSubmit = (event) => {
        event.preventDefault()
        if(!name){
            setNameError("Name can not be empty!")
        } else {
            updateUserName(name)
            props.setUserChange(prev => !prev)
        }
    }

    function onChangeName(event) {
        setName(event.target.value)
    }

    return(
        <>
            <Modal show={props.editUser} onHide={props.handleEditUser}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="Name">
                            <Form.Label>First name:</Form.Label>
                            <Form.Control type="text" placeholder="Enter first name" onChange={onChangeName}/>
                        </Form.Group>

                        {nameError && <p>{nameError}</p>}

                        <Button variant="dark" type="submit">
                            Save
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default EditUserModal