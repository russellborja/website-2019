import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import styles from "../styles/header.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faYoutube, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isTop: true,
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        });
    }

    render() {
        return (
            <header className={styles.hero}>
                <Navbar fixed="top" expand="lg" className={styles.navbar}>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className={`${styles.nav} ${this.state.isTop ? '': styles.navOpaque}`}>
                            <Nav.Link className={styles.navlink}>ABOUT</Nav.Link>
                            <Nav.Link className={styles.navlink}>WORK</Nav.Link>
                            <Nav.Link className={styles.navlink}>TRAVELS</Nav.Link>
                            <Nav.Link className={styles.navlink}>RESUME</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
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
    }
}
