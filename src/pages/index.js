import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import Header from "../components/header"
import About from "../components/about"
import Work from "../components/work"
import Travels from "../components/travels"
import Footer from "../components/footer"



const IndexPage = () => (
    <Layout>
        <Header/>
        <About/>
        <Work/>
        <Travels/>
        <Footer/>
    </Layout>
)
export default IndexPage
