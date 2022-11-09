import React from "react";
import Robot from "../Robot/robot";
import "./Register.css";

export default function (Login) {
  return (
          <div className="info">
              <div className="contenedor">
                  <p>NVO</p>
                  <ul>
                      <li><b>Conectividad</b></li>
                      <li><b>Software</b></li>
                      <li><b>Electronica</b></li>
                  </ul>
              </div>
              <form >
                  <div className="inputBox">
                      <input
                      type="text"
                      className="input"
                      name="user"
                      id="username"
                      />
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

                  <button className="btn">
                      <span><b>Registro</b></span>
                  </button>

              </form>
          </div>
  );
}
