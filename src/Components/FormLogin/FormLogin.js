import React from "react";

function FormLogin(props) {
  return (
    <div className="container mt-5">
      <div className="row ">
        <input className="form-control mb-2" type="mail" placeholder="Mail" />
        <input
          className="form-control mb-2"
          type="password"
          placeholder="password"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Connexion
      </button>
    </div>
  );
}

export default FormLogin;
