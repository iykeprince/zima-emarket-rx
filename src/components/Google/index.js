import React from "react";
import GoogleLogin from "react-google-login";

const Google = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId="888294821828-333jij50ldtmkj2cf4po663gj414obqp.apps.googleusercontent.com"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
      icon='fa fa-google'
      className='btn btn-danger btn-sm btn-google'
    />
  );
};

export default Google;
