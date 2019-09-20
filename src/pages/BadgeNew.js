import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    }
  };

  handleChange = (event) => {
    // const nextForm = this.state.form;
    // nextForm[event.target.name] = event.target.value;
    this.setState({
      form: {
        ...this.state.form, // Esta sintaxis sirve para dedjar caer todos loso valores anterios que habia en this.state.form y agregarle lo de abajo
        [event.target.name]: event.target.value,
      },
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo"></img>
        </div>
        <div className="container">
          <div class="row">
            <div class="col-6">
              <Badge
                firstName="Richard"
                lastName="Kaufman"
                twitter="sparragus"
                jobTitle="Frontend Engineer"
                avatarUrl="https://www.gravatar.com/avatar/17275de279db36035b12d4fb0155b82e?d=identicon"
              />
            </div>
            <div class="col-6">
              <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
