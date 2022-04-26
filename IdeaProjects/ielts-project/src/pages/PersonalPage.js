import React, { useState, useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig"
import { Button, Container, Image } from "react-bootstrap";
import EditUserModal from "../components/EditUserModal";
import { useNavigate } from "react-router-dom";


function PersonalPage() {

    const [user, loading, error] = useAuthState(auth)
    const [userImgUrl, setUserImgUrl] = useState("https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg");
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [dataError, setDataError] = useState("")
    const navigate = useNavigate();

    const [editUser, isEditUser] = useState(false);
    const [userChange, setUserChange] = useState(false)

    const handleEditUser = () => {
        isEditUser(prev => !prev)
    }

    useEffect(() => {

        auth.onAuthStateChanged(user => {
            if (user) {
                setName(user.displayName);
                setEmail(user.email);
                if (user.photoURL != null) {
                    setUserImgUrl(user.photoURL);
                }
            }
        })
    }, [user, userChange]);

    return (
        <div>
            <EditUserModal
                editUser={editUser}
                handleEditUser={handleEditUser}
                setUserChange={setUserChange}
            />
            <Container>
                <div className="flex-container profile-header">
                    {loading ? <h6>User data is loading...</h6> : (
                        <div className="flex-container center">
                            <Image className="userimg" src={userImgUrl} roundedCircle />
                            <div>
                                <h6><b>Name:</b> {name}</h6>
                                <h6><b>Email:</b> {email}</h6>
                            </div>
                        </div>
                    )}
                    {dataError && <h4>{dataError}</h4>}

                    <Button variant="primary" className="edit-btn" onClick={handleEditUser}>Edit</Button>
                </div>
                <div className="flex-container profile-progress">
                    <h2>Progress:</h2>
                    <div className="flex-container center progress-container">
                        <h3>Reading</h3>
                        <h5>9/10</h5>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default PersonalPage;