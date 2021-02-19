import React from 'react';
import NavCarousel from "./Carousel";
import BodyDiv from "./Body";
import Body_round_photos from "./Body_round_photos";
import Template from "../Template";

const HomePage = () => {
    return (
        <Template>
            <NavCarousel/>
            <BodyDiv/>
            <Body_round_photos/>
        </Template>
    )
};

export default HomePage;