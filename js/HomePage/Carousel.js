import React from 'react';
import 'bootstrap/scss/bootstrap.scss';
import '../../css/App.scss';
import Carousel from 'react-bootstrap/Carousel'
import './Carousel.scss'

const NavCarousel = () => {
    return (
        <>
            <div className="carousel_div">
            <Carousel className="container">
                <Carousel.Item interval={2000}>
                    <img
                        className="sliders_pictures"
                        src="../../accets/pictures/20200622_221039.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Oaza Spokoju!</h1>
                        <h3>Zapraszamy wszystkich chętnych na wymażone wakacje!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="sliders_pictures"
                        src="../../accets/pictures/20200622_221003.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="sliders_pictures"
                        src="../../accets/pictures/DJI_0057.JPG"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="sliders_pictures"
                        src="../../accets/pictures/DJI_0062.JPG"
                        alt="Fourth slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
        </>
    )
}

export default NavCarousel
