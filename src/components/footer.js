import React from "react"
import styles from "../styles/footer.module.css"
import Container from "react-bootstrap/Container"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faYoutube, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
    <div className={styles.footer}>
        <Container>
            <ul>
                <li><a><FontAwesomeIcon icon={faFacebookF}/></a></li>
                <li><a><FontAwesomeIcon icon={faInstagram}/></a></li>
                <li><a><FontAwesomeIcon icon={faYoutube}/></a></li>
                <li><a><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
                <li><a><FontAwesomeIcon icon={faGithub}/></a></li>
            </ul>
            <p>© Copyright 2019 Russell Borja. Powered by Gatsby and React-Bootstrap.</p>
        </Container>
    </div>
)

export default Footer
