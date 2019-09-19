import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo"></img>
        </div>
        <div className="container">
          <div class="row">
            <div class="col">
              <Badge
                firstName="Richard"
                lastName="Kaufman"
                twitter="sparragus"
                jobTitle="Frontend Engineer"
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
