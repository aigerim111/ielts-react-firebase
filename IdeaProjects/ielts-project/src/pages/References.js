import React, {useState} from "react"
import {Button, Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useParams } from "react-router-dom";


function References(){
    const params = useParams()
    const[sectionName, setSectionName] = useState(params.section)


    return(
        <>
            <Container fluid className='container-section skills'>
                <Container className="container-section-small">
                    <Container className="flex-container center section-text-block">
                        <h2 className='section-title'>{sectionName}</h2>
                        <p className='section-text'>
                            Start practicing {sectionName}
                        </p>
                    </Container>
                    <h2 className="section-subtitle black">References:</h2>
                    <div className="references-list">
                        <Link to = "1">
                            <div className="flex-container center references-link">
                                <FontAwesomeIcon icon="fa-solid fa-headphones-simple"  size='4x' className='style-icon' border/>
                                <bold><p className="section-text">{sectionName} Test 1</p></bold>
                            </div>
                        </Link>
                        <div className="flex-container center references-link">
                            <FontAwesomeIcon icon="fa-solid fa-headphones-simple"  size='4x' className='style-icon' border/>
                            <bold><p className="section-text">{sectionName} Test 1</p></bold>
                        </div>
                        <div className="flex-container center references-link">
                            <FontAwesomeIcon icon="fa-solid fa-headphones-simple"  size='4x' className='style-icon' border/>
                            <bold><p className="section-text">{sectionName} Test 1</p></bold>
                        </div>
                        <div className="flex-container center references-link">
                            <FontAwesomeIcon icon="fa-solid fa-headphones-simple"  size='4x' className='style-icon' border/>
                            <bold><p className="section-text">{sectionName} Test 1</p></bold>
                        </div>
                    </div>
                </Container>
            </Container>
        </>
    )
}

export default References