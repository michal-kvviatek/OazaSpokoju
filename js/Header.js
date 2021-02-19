import React from 'react';
import 'bootstrap/scss/bootstrap.scss';
import '../css/App.scss';
import './Header.scss'
import {Link} from "react-router-dom";

const NavHeader = () => {
    return (
        <>
            <header className="header">
                <div className="logo_container container col-4">
                    <ul>
                        <li>
                            <Link to="/">
                                <img srcSet="../accets/oaza_spokoju_logo_1.png" className="logo_img"/>
                            </Link>
                        </li>
                    </ul>
                </div>
                <input className="menu-btn" type="checkbox" id="menu-btn"/>
                <label className="menu-icon" htmlFor="menu-btn"><span className="navIcon"></span></label>
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

