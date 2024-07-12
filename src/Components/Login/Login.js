import React from "react";
import logo from "../../logo.svg";
import FormLogin from "../FormLogin/FormLogin";

function Logo(props) {
  return <img src={props.url} className="App-logo" alt="Logo" />;
}

function Login(props) {
  return (
    <div className="App-header">
      <Logo url={logo} />
      <div className="container mb-5">
        <a href="/" className="mb-5">
          Home
        </a>
      </div>
      <h1 className="mt-4">React Login</h1>
      <FormLogin />
    </div>
  );
}

export default Login;
