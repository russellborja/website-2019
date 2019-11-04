import React from "react"
import styles from "../styles/travels.module.css"
import Container from "react-bootstrap/Container"
import Col from 'react-bootstrap/Col'

const Travels = () => (
    <div className={styles.travels}>
        <Container>
            <Col lg="12" className={styles.video}>
                <h1>Travels</h1>
                <h4>39 countries and counting. Check out my YouTube channel for my latest travel vlogs!</h4>
                <iframe title="video" width="560" height="315" src="https://www.youtube.com/embed/TM4hiDw-7Z8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Col>
            
        </Container>
    </div>
)

export default Travels
