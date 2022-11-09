import React from 'react';

import Login from '../Login/Login'
import Register from '../Register/Register';
import './carrousel.css'

export default function Carrousel(){
    return(
        <div className="carrousel">
            <div className="itemCarrousel" id='loginItem'>
                <div className="tarjetaCarrousel">
                    <Login />
                </div>
                <div className="flechasCarrousel">
                    <a href='#registerItem1'>
                        <i>Registrarse</i>
                    </a>
                </div>
            </div>
            <div className="itemCarrousel" id='registerItem1'>
                <div className="tarjetaCarrousel">
                    <Register />
                </div>
                <div className="flechasCarrousel">
                    <a href='#loginItem'>
                        <i>Ingresar</i>
                    </a>
                </div>
            </div>
        </div>
    )
}