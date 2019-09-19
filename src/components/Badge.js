import React from "react";

import "./styles/Badge.css"; // PRimera forma de traer estilos
import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://gravatar.com/avatar?d=identicon"
            alt="Avatar"
          />
          <h1>
            Richard <br /> Kaufman
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Frontend Engineer</h3>
          <div>@sparragus</div>
        </div>

        <div className="Badge__footer">#Platziconf</div>
      </div>
    );
  }
}

export default Badge;
