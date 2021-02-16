import React, {Component} from 'react';
import Template from "./Template";
import './AboutUs.scss'


const AboutUs = () => {
    return (
        <Template>
            <div>
                <div className="about_us_div">
                    <div className="test">
                    </div>
                    <div className="about_us_description">
                        <h2>Ośrodek wczasowy Oaza Spokoju</h2><br/>
                        <h3>położony jest w Jantarze, w województwie pomorskim,<br/>
                            w powiecie nowodworskim, w gminie Stegna na pograniczu<br/>
                            Mierzei Wiślanej i Żuław Wiślanych. Wieś na szlaku <br/>
                            Kolei Dojazdowej. Leży pomiędzy Mikoszewem a Stegną.</h3>
                    </div>
                    <div className="about_us_description">
                        <div>
                            <h4>
                                Na terenie Oazy Spokoju działa bezpłatne WiFi!!
                            </h4>


                        </div>
                    </div>
                </div>
            </div>

        </Template>
    )
}
export default AboutUs