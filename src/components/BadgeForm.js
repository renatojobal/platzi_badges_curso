import React from "react";

class BadgeForm extends React.Component {
  handleChange = event => {
    console.log({
      name: event.target.name,
      value: event.target.value
    });
  };

  handleClick = event => {
    console.log('Button pressed');
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSu>
          <div className="form-group">
            <label></label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstName"
            ></input>
          </div>
          <button
            type="button"
            onClick={this.handleClick}
            className="btn btn-primary"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
