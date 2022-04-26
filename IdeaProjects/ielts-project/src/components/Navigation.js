import React, {useEffect, useState} from "react";
import {Navbar, Container, Nav, NavDropdown, Button} from "react-bootstrap";
import './Nav.css'
import {auth, logout} from "../firebaseConfig"
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";



function Navigation(){

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();


    function handleLogout(){
        logout()
        navigate("/")
    }

    useEffect(() => {
        if(loading){
            console.log("waiting user")
        }
    }, [user])


    return(
        <Navbar variant='light' collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="/">IELTS HELPER</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/listening">Listening</Nav.Link>
                    <Nav.Link href="/reading">Reading</Nav.Link>
                    <Nav.Link href="/writing">Writing</Nav.Link>
                    <Nav.Link href="/speaking">Speaking</Nav.Link>

                    {!user ? (
                        <>
                        <Button variant="primary" href="/signin">Login</Button>
                        <Button variant="primary" href="/register">Register</Button>
                        </>
                        )
                        : (
                            <>
                                <Nav.Link href="/userpage">Profile</Nav.Link>
                                <Button variant="primary" onClick={handleLogout}>Logout</Button>
                            </>
                        )
                    }

                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default Navigation