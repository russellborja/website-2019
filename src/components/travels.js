import React from "react"
import styles from "../styles/travels.module.css"
import "flag-icon-css/css/flag-icon.min.css"
import countries from "../data/countries.json"
import Container from "react-bootstrap/Container"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export default class Travels extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    countryImage = (country, index) => {
        return (
            <Col key={index} lg={2} md={3} sm={4} xs={6}>
                <span key={index} onClick={() => this.setState({photoIndex: index, isOpen: true})} title={country.name} class={`flag-icon flag-icon-${country.code}`}></span>
            </Col>
        )
    }

    render() {
        const {photoIndex, isOpen} = this.state;
        const customStyle = {
            overlay: {
                zIndex: 10000,
            }
        }

        return (
            <div className={styles.travels} id="travels">
                <Container>
                    <Col lg={12} className={styles.video}>
                        <h1>Travels</h1>
                        <h4>39 countries and counting. Check out my YouTube channel for my latest travel vlogs!</h4>
                        <Row>
                            {countries.map((country, index) => this.countryImage(country, index))}
                        </Row>
                        {isOpen && (
                        <Lightbox
                            imageCaption={`${countries[photoIndex].name}: ${countries[photoIndex].caption}`}
                            reactModalStyle={customStyle}
                            mainSrc={countries[photoIndex].image}
                            nextSrc={countries[(photoIndex + 1) % countries.length].image}
                            prevSrc={countries[(photoIndex + countries.length - 1) % countries.length].image}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + countries.length - 1) % countries.length,
                            })
                            }
                            onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % countries.length,
                            })
                            }
                        />
                        )}
                        <div className={styles.videoWrapper}>
                            <iframe className={styles.videoPlayer} title="video" width="560" height="315" src="https://www.youtube.com/embed/TM4hiDw-7Z8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        
                    </Col>
                    
                </Container>
            </div>
        )
    }
}
