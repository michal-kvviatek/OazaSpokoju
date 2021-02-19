import React from "react";

import {MDBCol, MDBContainer, MDBRow, MDBFooter} from "mdbreact";
import './Footer.scss';
import {faEnvelope,} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const FooterPage = () => {
    return (
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="footer-title">TELEFON I ADRES</h5>
                        <p>
                            Oaza Spokoju Ul.Gdańska 44c<br/>
                            82-103 Jantar<br/>
                            W celu rezerwacji prosze dzwonic<br/>
                            w godzinach 09-22<br/><br/>
                            609-404-305
                        </p>
                    </MDBCol>
                    <MDBCol md="6" className="footer-right">
                        <ul>
                            <li className="link-list-footer">
                                <a href="mailto:oazaSpokoju@gmail.com" target="_blank"/>
                                <FontAwesomeIcon icon={faEnvelope}/>
                            </li>
                                 <li className="link-list-footer">
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <p>O-S</p>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPage;