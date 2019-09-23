import React from "react";

import { Link } from 'react-router-dom';
import "./styles/Navbar.css";
import logo from "../images/logo.svg";

class Nabvar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar__brand" to="/">
                        <img
                            className="Nabvar__brand-logo"
                            src={logo}
                            alt="Logo"
                        ></img>
                        <span className="font-weight-light">Platzi</span>
                        <span className="font-weight-bold">Conf</span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Nabvar;
