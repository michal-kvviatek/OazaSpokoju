import React, {Component} from 'react';
import 'bootstrap/scss/bootstrap.scss';
import '../css/App.scss';
import './Header__top.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import ShareLink from 'react-facebook-share-link'


const NavigationTop = () => {
    return (
        <>
            <div className="top_navigation_wrapper">
                <div className="top_navigation_container container">
                    <div className="top_navigation_left">
                        <div className="top_navigation_left_text" style={{
                            fontFamily: "Gloria Hallelujah",
                            color: "#ef7f1b",
                        }}>
                            <p>{
                                `Oaza Spokoju
                                ul.Gdańska 44c
                                82-103 Jantar`
                            }</p>
                        </div>
                    </div>
                    <div className="top_navigation_right">
                        <div className="top_social_wrapper">
                            <div className="social_icon">
                                <span>
                                    <a href="mailto:oazaSpokoju@gmail.com" target="_blank">
                                    <FontAwesomeIcon icon={faEnvelope}/>
                                </a>
                                </span>
                                <span style={{
                                    margin: "15px"
                                }}>
                                    <ShareLink link='https://pl-pl.facebook.com/oaza.spokoju.jantar/'>
   {link => (
       <a href={link} target='_blank'><FontAwesomeIcon icon={faFacebookF}/></a>
   )}
</ShareLink>
                                </span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default NavigationTop;