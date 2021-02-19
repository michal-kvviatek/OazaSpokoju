import React, {Component} from 'react';
import Template from "../Template";
import './Contact.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imię: '',
            numer: '',
            firma: '',
            email: '',
            wiadomość: '',
            error: '',
            thankyou: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    isValidEmail(email) {
        return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
    }

    isValidMobile(mobileno) {
        return /^[1-9]\d{9}$/.test(mobileno)
    }

    validateField(field, value) {
        if (value.length <= 0) {
            return <div className="alert alert-danger">
                <span className="text-capitalize">{field}</span> jest wymaganym polem!
            </div>;

        } else {
            if (field == 'email') {
                if (!this.isValidEmail(value))
                    return <div className="alert alert-danger">Niepoprawny Email.
                    </div>;
            } else if (field == 'mobile') {
                if (!this.isValidMobile(value))
                    return <div className="alert alert-danger">Niepoprawny numer telefonu.</div>;
            } else {
                return '';
            }
        }
    }

    handleBlur(event) {
        this.setState({error: this.validateField(event.target.name, event.target.value)});
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {

        this.setState({
            thankyou: true

        })
        event.preventDefault();
    }

    render() {
        if (!this.state.thankyou) {
            return (

                <div className="card border-0 px-3 rounded-2 mb-3 py-4 mx-auto  mt-5 bg-light">
                    <div className="card-header bg-transparent border-0 text-center"><h3>{this.props.title}</h3></div>
                    <div className="card-body">
                        {this.state.error}

                        <form onSubmit={this.handleSubmit} encType="multipart/form-data" autoComplete="off">
                            <div className="form-group">
                                <input name="imię" type="text" className="form-control" placeholder="Imię"
                                       value={this.state.name} onChange={this.handleChange} onBlur={this.handleBlur}
                                       required="required"/>
                            </div>
                            <div className="form-group">
                                <input name="numer" type="text" className="form-control" placeholder="Numer telefonu"
                                       onBlur={this.handleBlur} value={this.state.mobile} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <input name="firma" type="text" className="form-control" placeholder="Nazwa firmy"
                                       value={this.state.company} onChange={this.handleChange} onBlur={this.handleBlur}
                                       required="required"/>
                            </div>
                            <div className="form-group">
                                <input name="email" type="email" className="form-control" placeholder="E-mail"
                                       value={this.state.email} onChange={this.handleChange} onBlur={this.handleBlur}
                                       required="required"/>
                            </div>
                            <div className="form-group">
                                <input name="wiadomość" type="text" className="form-control" placeholder="Wiadomość"
                                       value={this.state.message} onChange={this.handleChange} onBlur={this.handleBlur}
                                       required="required"/>
                            </div>
                            <p className="text-center mb-0"><input type="submit" className="btn btn-primary w-100"
                                                                   value="Wyślij"/></p>
                        </form>
                    </div>
                </div>
            );
        }

        if (this.state.thankyou) {
            return (
                <div className="thankyou_details">
                    <div class="text-success">Dziękujemy za Twoją wiadomość. Odpiszemy wkrótce! Zespół Oazy Spokoju!
                    </div>
                    <ul className="list-group">
                        <li className="list-group-item">Imię: {this.state.imię}</li>
                        <li className="list-group-item">Numer telefonu: {this.state.numer}</li>
                        <li className="list-group-item">Nazwa firmy: {this.state.firma}</li>
                        <li className="list-group-item">E-mail: {this.state.email}</li>
                        <li className="list-group-item">Wiadomość: {this.state.wiadomość}</li>
                    </ul>
                </div>
            )
        }
    }
}

const Contact = () => {
    return (
        <Template>
            <div className="contact_div">
                <h1>SKONTAKTUJ SIE Z NAMI!</h1>
                <div className="contact_div_left">
                    <div className="contact_div_left_phone&email">
                        <h2>
                            Numer telefonu:
                            609-404-305
                        </h2>
                        <span>
                            <a href="mailto:oazaSpokoju@gmail.com" target="_blank">
                            oazaSpokoju@gmail.com
                        <FontAwesomeIcon icon={faEnvelope}/>
                            </a>
                        </span>
                    </div>
                </div>
                <div className="contact_div_right">
                    <ContactForm/>
                </div>
            </div>

        </Template>
    )
}
export default Contact