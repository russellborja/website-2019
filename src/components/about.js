import React from "react"
import styles from "../styles/about.module.css"
import profilePic from "../images/profile.jpg"
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Media from 'react-bootstrap/Media'

const About = () => (
    <div className={styles.about} id="about">
        <Container>
            <Row>
                <Col lg="3">
                    <div className={styles.profile}>
                        <img
                            src={profilePic}
                            alt="Russell Borja"
                        />
                    </div>
                    
                </Col>
                <Col>
                    <Row>
                        <h2>About Me</h2>
                        <p>I am currently a Software Engineer at Zynga, building solutions that optimize the way $250M of advertising
                            are spent across the company's portfolio of mobile games. As a University of Waterloo graduate, I have honed
                            my technical skills from six internships spanning a variety of domains, including banking, e-commerce, and travel.
                            When I'm not in front of a monitor, I enjoy travelling the world and making new connections.</p>
                    </Row>
                    <Row className={styles.row}>
                        <h2>Fast Facts</h2>
                        <p>Email: russellborja@gmail.com</p>
                        <p>Countries Visited: 39</p>
                        <p>Current City: Toronto, Canada</p>
                    </Row> 
                </Col>
            </Row>
        </Container>
    </div>
)

export default About
