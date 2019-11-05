import React from "react"
import styles from "../styles/footer.module.css"
import Container from "react-bootstrap/Container"
import Contact from "./contact"

const Footer = () => (
    <div className={styles.footer}>
        <Container>
            <Contact/>
            <p>© Copyright 2019 Russell Borja. Built from scratch using Gatsby and React-Bootstrap.</p>
        </Container>
    </div>
)

export default Footer
