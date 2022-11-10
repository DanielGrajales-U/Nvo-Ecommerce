import React from "react";
import "./Register.css";

export default function (Login) {
  return (
          <div className="info">
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
                      type="text"
                      className="input"
                      name="email"
                      id="email"
                      />
                      <span>Email: </span>
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

                    <button className="btn-login">REGISTRO</button>
                  

              </form>
          </div>
  );
}
