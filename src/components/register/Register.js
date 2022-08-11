import axios from "axios";
import React from "react";

export default function Register() {
  const model = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const register = () => {
    axios
      .post(process.env.REACT_APP_MONGO + "/register", model)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const loginHome = () => {
    window.location.href = "/";
  }

  return (
    <div>
      <div className="context">
        <div>
          <div class="coin silver"></div>
          <br />
          <div>
            <input
              autoComplete="false"
              placeholder="Email"
              className="email"
              type="email"
              onChange={(e) => (model.email = e.target.value)}
            />
            <br></br>
            <input
              placeholder="Password"
              type="password"
              className="password"
              onChange={(e) => (model.password = e.target.value)}
            />
            <br></br>
            <input
              placeholder="Confirm password"
              type="password"
              className="password"
              onChange={(e) => (model.confirmPassword = e.target.value)}
            />
            <br></br>
            {/* <button onClick={() => {setArray((current) => ({...current, like: !likepost}))}}>Ingresar</button> */}
          </div>
          <br />
          <div className="multi-button">
          <button className="outer-left" onClick={(e) => loginHome()}>
              Login
            </button>
            <button className="outer-right" onClick={(e) => register()}>
              Registrar
            </button>
          </div>
        </div>
      </div>

      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
