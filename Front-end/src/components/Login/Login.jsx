import React from "react";
import "./Login.css";

export default function (Login) {
  return (
    <div className="login">
      <div className="content-Form">
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
                    <span><b>Login</b></span>
                </button>

                <p className="register"><b>¿No tienes una cuenta?...</b></p>
            </form>
        </div>
        <span className="copyright">&copy; 2015 Todos los derechos reservados NVO</span>
      </div>
    </div>
  );
}
