import React, {useEffect, useState} from "react";
import {Button, Col, Container, Row, Table} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import data from "./data"


function Section(props){

    const [sectionName, setSectionName] = useState(props.sectionName)
    const [imgLink, setImgLink] = useState(props.imgLink)
    const [dataInfo, setDataInfo] = useState({})

    const section = () => {
        switch (sectionName){
            case "Listening":
                setDataInfo(data.listening)
                break;
            case "Reading":
                setDataInfo(data.reading)
                break;
            case "Writing":
                setDataInfo(data.writing)
                break;
            case "Speaking":
                setDataInfo(data.speaking)
                break;
        }
    }

    useEffect(() => {
        console.log(data)
        section()
    }, [sectionName])

    return(
        <>
            <Container fluid className='container-section skills'>
                <Container className="container-section-small">
                    <Row className="justify-content-md-center">
                        <Col className="align-self-center">
                            <Container className="flex-container section-text-block skills">
                                <h2 className='section-title'>IELTS {sectionName}</h2>
                                <p className='section-text'>
                                    Let's prepare right now!
                                </p>
                                <Link to = {`/references/${sectionName}`}><Button variant="primary" className="section-btn">Tests</Button></Link>
                            </Container>
                        </Col>
                        <Col>
                            <img src={imgLink} alt="listening image" className='float-md-end section-img'/>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="container-section">
                <Container className="container-section-small">
                <div className='flex-container section-text-block info'>
                    <h2 className='section-subtitle'>Information about IELTS {sectionName} test</h2>
                    <h6 className="section-text">
                        {dataInfo.information}
                        <br />
                        <br />
                        {dataInfo.list_info &&
                            <ul className="list-group-horizontal-sm">
                                {dataInfo.list_info.map(item => <li className="mb-2">{item}</li>)}
                            </ul>
                        }
                    </h6>

                    <br/>
                    <h6 className="section-text">
                        {dataInfo.format &&
                            <>
                                {dataInfo.format}
                                <br />
                                <br />
                            </>
                        }
                        {dataInfo.format_list &&
                            <ul className="list-group-horizontal-sm">
                                { dataInfo.format_list.map(item => <li className="mb-2">{item}</li>)}
                            </ul>
                        }
                    </h6>
                    <br />
                    <Table striped hover>
                        <tbody>
                        {dataInfo.timing &&
                            <tr>
                                <td>Time</td>
                                <td>{dataInfo.timing}</td>
                            </tr>
                        }
                        {dataInfo.questions &&
                            <tr>
                                <td>Number of Questions</td>
                                <td>{dataInfo.questions}</td>
                            </tr>
                        }
                        {dataInfo.task_types &&
                            <tr>
                                <td>Task types</td>
                                <td>{ dataInfo.task_types}</td>
                            </tr>
                        }
                        <tr>
                            <td>Marks</td>
                            <td>{dataInfo.marks && dataInfo.marks}</td>
                        </tr>
                        </tbody>
                    </Table>

                    {/*<br />*/}
                    {/*<span className="section-text">*/}
                    {/*    The Listening module takes 40 minutes: 30 min for testing and 10 min for transferring your answers to the answer sheet.*/}
                    {/*    There are 40 questions in Listening module, with 10 questions in each section. Sections get increasingly difficult.*/}
                    {/*</span>*/}
                </div>
                </Container>
            </Container>
            </>
    )
}

export default Section