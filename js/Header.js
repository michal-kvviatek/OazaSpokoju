import React from 'react';
import 'bootstrap/scss/bootstrap.scss';
import '../css/App.scss';
import './Header.scss'
import {Link} from "react-router-dom";
import {Nav} from "react-bootstrap";




const NavHeader = () => {
    return (
        <>
                <header className="header" style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <div className="logo_container container col-4">
                        <img srcSet="../accets/oaza_spokoju_logo_1.png" style={{
                            width: 200,
                            height: "auto",
                        }}/>
                    </div>
                    <input className="menu-btn" type="checkbox" id="menu-btn"/>
                    <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                    <ul className="menu col-7">
                        <li className="nav__element"><Link to="/about" className="nav__link">O NAS</Link></li>
                        <li className="nav__element"><Link to="pricing" className="nav__link">CENNIK</Link></li>
                        <li className="nav__element"><Link to="gallery" className="nav__link">GALERIA</Link></li>
                        <li className="nav__element"><Link to="contact" className="nav__link">KONTAKT</Link></li>
                    </ul>
                </header>
            </>
        )
    }
export default NavHeader;

