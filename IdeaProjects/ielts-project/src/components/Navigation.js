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


    return(
        <Navbar variant='light' collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="/">IELTS HELPER</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="Listening" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/listening">Listening</NavDropdown.Item>
                        <NavDropdown.Item href="/listening-practice">Practice</NavDropdown.Item>
                        <NavDropdown.Item href="/listening-tips">Tips</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Reading" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/reading">Reading</NavDropdown.Item>
                        <NavDropdown.Item href="/reading-academic-practice">Academic Practice</NavDropdown.Item>
                        <NavDropdown.Item href="/reading-general-practice">General Practice</NavDropdown.Item>
                        <NavDropdown.Item href="/reading-tips">Tips</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Writing" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/writing">Writing</NavDropdown.Item>
                        <NavDropdown.Item href="/writing-academic-task-1">Task 1 Academic</NavDropdown.Item>
                        <NavDropdown.Item href="/writing-general-task-1">Task 1 General</NavDropdown.Item>
                        <NavDropdown.Item href="/writing-essay">Task 2 (essay)</NavDropdown.Item>
                        <NavDropdown.Item href="/writing-vocabulary">Vocabulary</NavDropdown.Item>
                        <NavDropdown.Item href="/writing-tips">Tips</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Speaking" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/speaking">Speaking</NavDropdown.Item>
                        <NavDropdown.Item href="/speaking-practice">Practice</NavDropdown.Item>
                        <NavDropdown.Item href="/speaking-vocabulary">Vocabulary</NavDropdown.Item>
                        <NavDropdown.Item href="/speaking-tips">Tips</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Exercises" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/listening-exercises">Speaking</NavDropdown.Item>
                        <NavDropdown.Item href="/reading-exercises">Reading</NavDropdown.Item>
                        <NavDropdown.Item href="/writing-exercises">Writing</NavDropdown.Item>
                        <NavDropdown.Item href="/speaking-exercises">Speaking</NavDropdown.Item>
                    </NavDropdown>

                    {!user ? (
                        <>
                        <Button variant="primary" href="/signin">Login</Button>
                        <Button variant="primary" href="/register">Register</Button>
                        </>
                        )
                        : (
                            <>
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