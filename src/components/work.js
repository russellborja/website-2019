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

const zynga = new WorkExperience("Zynga", zyngaLogo, "Software Engineer II", "Toronto, ON", "Dec 2017 - Present", "I am a member and key contributor to the User Acquisition Engineering team. I build and maintain data pipelines using Apache Airflow and Spark that optimize Zynga's $250 million advertising budget and empower global marketing decisions. I work with a wide variety of technologies, from helping game studios integrate client SDK's to gather user data, to creating data workflows that gather and transform this data, to building the dashboards that present this information to the stakeholders.");
const skyscanner = new WorkExperience("Skyscanner", skyscannerLogo, "Software Engineer I", "Edinburgh, UK", "Sept 2016 - Dec 2017", "At Skyscanner, I was a member of the Web Infrastructure squad that was responsible for re-architecting the web platform from the ground up. Using OpenTable's Open Components technology, I created re-usable and maintainable Javascript libraries such as Google Analytics tracking that were consumed by all other front-end teams within the organization. I also contributed to the re-design of the website's visuals in 2017 during the company-wide \"spring clean\".");
const match = new WorkExperience("Match Group", matchLogo, "Software Engineer Intern", "Dallas, TX", "Sept 2015 - Dec 2015", "During my last internship at Match Group, I was a member of the Emerging Brands team developing prototypical dating apps to quickly release to the market. I ideated, wire-framed, and designed the back-end of Chance, an iOS app that matched users that physically crossed paths and initiated conversations when certain compatibility criteria were met. This functionality was later implemented as a feature in the core match.com product.");
const companies = [zynga, skyscanner, match];

const Work = () => (
    <Container className={styles.work} id="work">
        <h1>Work Experience</h1>
        {companies.map((company, index) =>
            <Company name={company.name} logo={company.logo} title={company.title} location={company.location} duration={company.duration} description={company.description}/>
        )}
    </Container>
)

export default Work
