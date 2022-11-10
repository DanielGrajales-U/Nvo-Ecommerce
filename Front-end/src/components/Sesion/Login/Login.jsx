import React from "react";
import "./Login.css";

export default function (Login) {
  return (
    <div className="info">
      <form>
        <div className="inputBox">
          <input type="text" className="input" name="user" id="username" />
          <span>UserName: </span>
        </div>

        <div className="inputBox">
          <input
            type="password"
            className="input"
            name="password"
            id="password"
          />
          <span>Password: </span>
        </div>
        <div className="contain-btn">
            <span></span>
            <button className="btn btn-login">INGRESAR</button>
        </div>
      </form>
    </div>
  );
}
