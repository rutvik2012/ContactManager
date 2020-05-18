import React, { Component } from "react";

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
    };
    console.log(contact);
  };

  static defaultProps = {
    name: "johnwick",
    email: "jwick@gmail.com",
    phone: "2123232323",
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contacts</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor=" name ">name</label>
              <input
                style={{ color: "grey" }}
                type="text"
                name="name"
                className="form-control form control-lg"
                placeholder="Enter name..."
                defaultValue={name}
                ref={this.nameInput}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor=" email ">email</label>
              <input
                style={{ color: "grey" }}
                type="email"
                name="email"
                className="form-control form control-lg"
                placeholder="Enter email..."
                defaultValue={email}
                ref={this.emailInput}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor=" phone ">phone</label>
              <input
                style={{ color: "grey" }}
                type="text"
                name="phone"
                className="form-control form control-lg"
                placeholder="Enter Phone no..."
                defaultValue={phone}
                ref={this.phoneInput}
              ></input>
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-light btn-block"
            ></input>
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
