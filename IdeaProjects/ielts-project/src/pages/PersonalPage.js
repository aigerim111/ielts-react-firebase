import React, {useState, useEffect} from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import {auth, getUserFromDatabase} from "../firebaseConfig"
import {Button, Container} from "react-bootstrap";
import EditUserModal from "../components/EditUserModal";
import { useNavigate } from "react-router-dom";


function PersonalPage(){

    const [user, loading, error] = useAuthState(auth)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [dataError, setDataError] = useState("")
    const navigate = useNavigate();

    const [editUser, isEditUser] = useState(false);
    const [userChange, setUserChange] = useState(false)

    const handleEditUser = () => {
        isEditUser(prev => !prev)
    }

    const fetchUserFromDataBase = async () => {
        console.log(user)
        const data = await getUserFromDatabase()
        if(data === null){
            setDataError("Error, Something wrong happened!")
        } else{
            setName(data.name);
            setEmail(data.email);
        }
    }

    useEffect(() => {
        console.log(userChange)
        if(!loading){
            fetchUserFromDataBase()
            console.log("changed")
        }
    },[user, userChange]);

    return(
        <div>
            <EditUserModal
                editUser = {editUser}
                handleEditUser = {handleEditUser}
                setUserChange = {setUserChange}
            />
            <Container>
                <div className="profile-header">
                    {loading ? <h6>User data is loading...</h6> : (
                        <div className="profile-info">
                        <h6><b>Name:</b> {name}</h6>
                        <h6><b>Email:</b> {email}</h6>
                    </div>
                    )}
                    {dataError && <h4>{dataError}</h4>}

                    <Button variant="primary" className="edit-btn" onClick={handleEditUser}>Edit</Button>
                </div>
                <div className="profile-progress">
                    <h2>Progress:</h2>
                    <div className="progress-container">
                        <h3>Reading</h3>
                        <h5>9/10</h5>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default PersonalPage