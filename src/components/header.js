import React from "react"
import styles from "../styles/header.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faYoutube, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

const Header = () => (
    <header className={styles.hero}>
        <nav className={styles.nav}>
            <ul>
                <li><a>ABOUT</a></li>
                <li><a>WORK</a></li>
                <li><a>TRAVELS</a></li>
                <li><a>RESUME</a></li>
            </ul>
        </nav>
        
        <div className={styles.banner}>
            <h1>Russell Borja</h1>
            <h2>Software Engineer</h2>
            <ul>
                <li><a><FontAwesomeIcon icon={faFacebookF}/></a></li>
                <li><a><FontAwesomeIcon icon={faInstagram}/></a></li>
                <li><a><FontAwesomeIcon icon={faYoutube}/></a></li>
                <li><a><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
                <li><a><FontAwesomeIcon icon={faGithub}/></a></li>
            </ul>   
        </div>
    </header>
)

export default Header
