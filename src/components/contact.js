import React from "react"
import styles from "../styles/contact.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faYoutube, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

const Contact = () => (
    <ul>
        <li><a href="https://www.facebook.com/russellcborja" className={styles.contact}><FontAwesomeIcon icon={faFacebookF}/></a></li>
        <li><a href="https://instagram.com/russellborja" className={styles.contact}><FontAwesomeIcon icon={faInstagram}/></a></li>
        <li><a href="https://www.youtube.com/user/russellcborja" className={styles.contact}><FontAwesomeIcon icon={faYoutube}/></a></li>
        <li><a href="https://www.linkedin.com/in/russellborja" className={styles.contact}><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
        <li><a href="https://github.com/russellborja" className={styles.contact}><FontAwesomeIcon icon={faGithub}/></a></li>
    </ul>
)

export default Contact
