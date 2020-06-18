import React, { Component } from "react";
import { connect } from "react-redux";
import { requestFacebook } from "../../redux/actions/authActions";
import FacebookLogin from "react-facebook-login";

class Facebook extends Component {
  constructor(props) {
    super(props);

    this.componentClicked = this.componentClicked.bind(this);
  }

  componentClicked = () => console.log("clicked");

  responseFacebook = (response) => {
    console.log(response);
    requestFacebook(response);
  };

  render() {
    return (
      <FacebookLogin
        appId="697674900966498"
        autoLoad={true}
        fields="name,email,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook}
        cssClass="btn btn-danger btn-sm btn-fb"
        icon="fa fa-facebook"
        style={{ marginTop: "30px" }}
      />
    );
  }
}

export default connect(null, {
  requestFacebook,
})(Facebook);
