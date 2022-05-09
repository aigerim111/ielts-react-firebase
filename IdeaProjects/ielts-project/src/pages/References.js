import React, {useState} from "react"
import {Button, Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useParams } from "react-router-dom";


function References(){
    const params = useParams()
    const[sectionName, setSectionName] = useState(params.section)
    const readingLinkList = ["tAlhuWdpeti2DcFNUw5k", "uHJdJEEwdeBSUB7RdtuX"]
    const listeningLinkList = ["93XDaqIUkCUMp8yvIk6X", "YTPIa5bXz3BhksarLhD1"]
    const writingLinkList = ["QPxPL6WicLzbfli3OIRc", "bKm5zoFjMn0VSiZKZr9Q"]
    const speakingLinkList = ["2HmrqCTfLySgrCY0zqxX", "IchI7A9VyPIIem3pbEMO"]



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
                        {sectionName === "Reading" && readingLinkList.map((el, index) => (
                            <Link to = {el}>
                                <div className="flex-container center references-link">
                                    <FontAwesomeIcon icon="fa-solid fa-headphones-simple" size='4x'
                                                     className='style-icon' border/>
                                    <bold><p className="section-text">{sectionName} Test {index}</p></bold>
                                </div>
                            </Link>
                            ))
                        }
                        {sectionName === "Listening" && listeningLinkList.map((el, index) => (
                            <Link to = {el}>
                                <div className="flex-container center references-link">
                                    <FontAwesomeIcon icon="fa-solid fa-headphones-simple" size='4x'
                                                     className='style-icon' border/>
                                    <bold><p className="section-text">{sectionName} Test {index}</p></bold>
                                </div>
                            </Link>
                        ))
                        }
                        {sectionName === "Writing" && writingLinkList.map((el, index) => (
                            <Link to = {el}>
                                <div className="flex-container center references-link">
                                    <FontAwesomeIcon icon="fa-solid fa-headphones-simple" size='4x'
                                                     className='style-icon' border/>
                                    <bold><p className="section-text">{sectionName} Test {index}</p></bold>
                                </div>
                            </Link>
                        ))
                        }
                        {sectionName === "Speaking" && speakingLinkList.map((el, index) => (
                            <Link to = {el}>
                                <div className="flex-container center references-link">
                                    <FontAwesomeIcon icon="fa-solid fa-headphones-simple" size='4x'
                                                     className='style-icon' border/>
                                    <bold><p className="section-text">{sectionName} Test {index}</p></bold>
                                </div>
                            </Link>
                        ))
                        }
                    </div>
                </Container>
            </Container>
        </>
    )
}

export default References