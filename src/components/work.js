import React from "react"
import styles from "../styles/work.module.css"
import Company from "./work-company"
import Container from "react-bootstrap/Container"
import zyngaLogo from "../images/zynga.jpg"
import skyscannerLogo from "../images/skyscanner.png"
import matchLogo from "../images/match.png"
import zyngaData from "../data/zynga.json"
import skyscannerData from "../data/skyscanner.json"
import matchData from "../data/match.json"

class WorkExperience {
    constructor(data, logo) {
        this.name = data.name;
        this.logo = logo;
        this.title = data.title;
        this.link = data.link;
        this.location = data.location;
        this.duration = data.duration;
        this.description = data.description;
    }
} 

const zynga = new WorkExperience(zyngaData, zyngaLogo);
const skyscanner = new WorkExperience(skyscannerData, skyscannerLogo);
const match = new WorkExperience(matchData, matchLogo);
const companies = [zynga, skyscanner, match];

const Work = () => (
    <Container className={styles.work} id="work">
        <h1>Work Experience</h1>
        {companies.map((company, index) =>
            <Company name={company.name} logo={company.logo} title={company.title} link={company.link} location={company.location} duration={company.duration} description={company.description}/>
        )}
    </Container>
)

export default Work
