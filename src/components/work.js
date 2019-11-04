import React from "react"
import styles from "../styles/work.module.css"
import Company from "./work-company"
import Container from "react-bootstrap/Container"
import zyngaLogo from "../images/zynga.jpg"
import skyscannerLogo from "../images/skyscanner.png"
import matchLogo from "../images/match.png"

class WorkExperience {
    constructor(name, logo, title, location, duration, description) {
        this.name = name;
        this.logo = logo;
        this.title = title;
        this.location = location;
        this.duration = duration;
        this.description = description;
    }
} 

const zynga = new WorkExperience("Zynga", zyngaLogo, "Software Engineer II", "Toronto, ON", "Dec 2017 - Present", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
const skyscanner = new WorkExperience("Skyscanner", skyscannerLogo, "Software Engineer I", "Edinburgh, UK", "Sept 2016 - Dec 2017", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
const match = new WorkExperience("Match Group", matchLogo, "Software Engineer Intern", "Dallas, TX", "Sept 2015 - Dec 2015", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
const companies = [zynga, skyscanner, match];

const Work = () => (
    <Container className={styles.work}>
        <h1>Work Experience</h1>
        {companies.map((company, index) =>
            <Company name={company.name} logo={company.logo} title={company.title} location={company.location} duration={company.duration} description={company.description}/>
        )}
    </Container>
)

export default Work
