import React from 'react';
import NavigationTop from "./Header__top";
import NavHeader from "./Header";
import Footer from "./Footer";

const Template = ({children}) => {
    return (
        <>
            <NavigationTop />
            <NavHeader/>
            {children}
            <Footer/>
        </>
    );
};

export default Template;