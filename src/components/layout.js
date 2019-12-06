import React from "react"
import styles from "../styles/layout.module.css"

const Layout = ({children}) => (
    <div className={styles.layout}>
        <title>Russell Borja</title>
        {children}
    </div>
)

export default Layout
