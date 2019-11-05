import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import styles from "../styles/header.module.css"
import resume from "../resume/FullTimeResumeZynga.pdf"
import Contact from "./contact"
import { Link, animateScroll as scroll } from "react-scroll";

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

    scrollToTop = () => {
        scroll.scrollToTop();
    }

    render() {
        return (
            <header className={styles.hero}>
                <Navbar fixed="top" expand="lg" className={styles.navbar}>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className={`${styles.nav} ${this.state.isTop ? '': styles.navOpaque}`}>
                            <Link className={styles.navlink} onClick={this.scrollToTop}>HOME</Link>
                            <Link className={styles.navlink} to="about" activeClass={styles.navActive} duration={500} spy={true} offset={10} smooth={true}>ABOUT</Link>
                            <Link className={styles.navlink} to="work" activeClass={styles.navActive} duration={500} spy={true} offset={10} smooth={true}>WORK</Link>
                            <Link className={styles.navlink} to="travels" activeClass={styles.navActive} duration={500} spy={true} offset={10} smooth={true}>TRAVELS</Link>
                            <a className={styles.navlink} href={resume}>RESUME</a>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className={styles.banner}>
                    <h1>Russell Borja</h1>
                    <h2>Software Engineer</h2>
                    <Contact/> 
                </div>
            </header>
        )
    }
}
