import React from "react"
import styles from "../styles/footer.module.css"
import Container from "react-bootstrap/Container"
import Contact from "./contact"
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    }

    render() {
        return (
            <div className={styles.footer}>
                <Container>
                
                    <Link onClick={this.scrollToTop} className={styles.scrolldown} duration={500} spy={true} offset={10} smooth={true}><FontAwesomeIcon icon={faAngleUp}/></Link>
                
                
                <Contact/>
                <p>© Copyright 2019 Russell Borja. Built from scratch using Gatsby and React-Bootstrap.</p>
                </Container>
            </div>
        )
    }
}
