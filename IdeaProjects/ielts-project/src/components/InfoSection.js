import React from 'react';
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

function InfoSection(){
    return(
        <Container fluid className='container-info-section'>
            <Container className='info-section'>
                <h2 className='section-title'>About IELTS</h2>
                <p className='section-info-text'>
                    IELTS is the International English Language Testing System, the world's most popular English language test.
                    <br />
                    <br />

                    It is designed to determine the level of English skills of people whose first language is not English. IELTS is the most demanded test of English for study and immigration, being taken by more than 2 million people each year.
                    <br />
                    <br />

                    IELTS is jointly owned by British Council, IDP: IELTS Australia and Cambridge English Language Assessment through more than 1,000 test centres and locations in over 140 countries.
                    <br />
                    <br />

                    See <Link to="why-take-ielts">Why take IELTS.</Link>
                </p>
            </Container>
            <Container className='info-section'>
                <h2 className='section-title'>Academic vs. General</h2>
                <p className='section-info-text'>
                    There are two versions of IELTS: Academic and General.
                    <br />
                    <br />

                    1. Certificate of Academic IELTS is used for admission to schools, colleges and universities in English-speaking countries.
                    2. The certificate General Training IELTS (and sometimes Academic IELTS) is mandatory for all who wish to immigrate to or work in UK, Canada, Australia, USA, New Zealand, etc.                    <br />
                    <br />

                    It is advised not to consider a report older than two years to be valid, unless the user proves that he/she has worked to maintain his/her level of English.                    <br />
                    <br />

                    Usually IELTS Academic is conducted once in two weeks and IELTS General once in four weeks.
                </p>
            </Container>
            <Container className='info-section'>
                <h2 className='section-title'>IELTS consists of 4 parts:</h2>
                <p className='section-info-text'>
                    <ul>
                        <li><Link to='/listening'>Listening</Link></li>
                        <li><Link to='reading'>Reading</Link></li>
                        <li><Link to='/writing'>Writing</Link></li>
                        <li><Link to='/speaking'>Speaking</Link></li>
                    </ul>
                    The total time of IELTS is 2 hours 45 minutes. The listening, reading and writing parts are completed in one sitting in a common exam auditorium, while the speaking part is taken individually with an examiner on the same day or up to week before or after the other tests.                    <br />
                    <br />

                    Listening and Speaking modules are the same for Academic and General IELTS, while Reading and Writing modules are different.
                    <br />
                    <br />
                    All the parts are evaluated on a scale from 0 to 9 points. The total score is counted as arithmetic mean of the four section scores.

                </p>
            </Container>
            <Container className='info-section'>
                <h2 className='section-title'>IELTS results</h2>
                <p className='section-info-text'>
                    The results are issued 13 days after the test.
                    There is no minimum score required to pass IELTS.
                    IELTS score is evaluated on a scale from 0 to 9 points.
                    The IELTS certificate is a Test Report Form. It is issued to all test takers with a score from "band 1" (non-user) to "band 9" (expert user) and each institution sets a different threshold.
                    <br />
                    <br />
                    Overall IELTS scores are reported to the nearest half band (you can receive 7.5, 8.0, 8.5 for example).
                    If the overall score ends in .25, it is rounded up to the next half band (overall 6.25=6.5), and if it ends in .75, it is rounded up to the next whole band (overall 7.75=8.0).
                    Most top universities require 6.0-7.0 overall IELTS score for admission.
                    <br />
                    <br />
                    Each IELTS score corresponds to some level of English proficiency. Bands are described as follows:
                    <br />
                    <br />
                    <img src='images/ieltsscoring.png' alt='scoring levels' />
                </p>
            </Container>
        </Container>
    )
}

export default InfoSection

