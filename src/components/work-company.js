import React from "react"
import styles from "../styles/work-company.module.css"
import zyngaLogo from "../images/zynga.jpg"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Company = (props) => (
    <Row className={styles.company}>
        <Col lg="3">
            <div className={styles.logo}>
                <img src={props.logo}></img>
            </div>
        </Col>
        <Col>
            <h2>{props.name}</h2>
            <Row className={styles.subtitle}>
                <h5>{props.title}</h5><span>•</span>
                <h5>{props.location}</h5><span>•</span>
                <h5>{props.duration}</h5>
            </Row>
            <p>{props.description}</p>
        </Col>
    </Row>
)

export default Company
