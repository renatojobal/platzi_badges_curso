import React from "react";

import "./styles/Navbar.css";
import logo from "../images/logo.svg";

class Nabvar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <a className="Navbar__brand" href="/">
                        <img
                            className="Nabvar__brand-logo"
                            src={logo}
                            alt="Logo"
                        ></img>
                        <span className="font-weight-light">Platzi</span>
                        <span className="font-weight-bold">Conf</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Nabvar;
