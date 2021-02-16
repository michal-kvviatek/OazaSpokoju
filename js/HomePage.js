import React from 'react';
import NavigationTop from "./Header__top";
import NavigationBeetween from "./Header_logo_beetween";
import NavHeader from "./Header";
import NavCarousel from "./Carousel";
import BodyDiv from "./Body";
import Body_round_photos from "./Body_round_photos";
import Footer from "./Footer";
import Template from "./Template";

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