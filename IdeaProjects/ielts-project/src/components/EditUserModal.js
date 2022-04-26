import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Dropzone from "../components/Dropzone";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth, updateProfile } from "firebase/auth";


function EditUserModal(props) {

    const auth = getAuth();
    const storage = getStorage();

    const [show, setShow] = useState(props.editUser);
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [userImgFile, setUserImgFile] = useState();
    const [userImgUrl, setUserImgUrl] = useState();


    const updateUserImgUrl = () => {
        getAuth().onAuthStateChanged(user => {
            if (user) {
                const starsRef = ref(storage, auth.currentUser.uid);
                getDownloadURL(starsRef).then((url) => {
                    setUserImgUrl(url);
                })
            }
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const update = new Object();

        if (name) {
            update.displayName = name;
        }


        if (userImgFile != undefined) {
            const storageRef = ref(storage, auth.currentUser.uid);
            uploadBytes(storageRef, userImgFile).then((snapshot) => {
                console.log('Uploaded a blob or file!');
                console.log(userImgFile);
                console.log()
                updateUserImgUrl();
            });
            update.photoURL = userImgUrl;
        }


        // const idToken = await auth.currentUser.getIdToken();
        // console.log(idToken);

        getAuth().onAuthStateChanged(user => {
            if (user) {
                updateProfile(user, update).then(() => {
                    props.setUserChange(prev => !prev);
                })
            }
        })

        props.handleEditUser()
    }

    useEffect(() => {
        updateUserImgUrl();
    }, [userImgUrl])

    function onChangeName(event) {
        setName(event.target.value)
    }

    return (
        <>
            <Modal show={props.editUser} onHide={props.handleEditUser}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Dropzone onImageUpload={setUserImgFile} />
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="Name">
                            <Form.Label>First name:</Form.Label>
                            <Form.Control type="text" placeholder="Enter first name" onChange={onChangeName} />
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