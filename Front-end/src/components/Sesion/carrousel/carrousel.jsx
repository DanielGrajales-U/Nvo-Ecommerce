import React from 'react';

import Login from '../Login/Login'
import Register from '../Register/Register';
import './carrousel.css'

export default function Carrousel(){
    const carrousel = document.querySelector('carrousel')
    return(
        <div className="carrousel">
            <div className="grande">
                <div className="itemCarrousel" id='loginItem'>
                    <div className="tarjetaCarrousel">
                        <Login />
                    </div>
                    <div className="flechaCarrousel ">
                            <p>Registrarse</p>
                    </div>
                </div>
                <div className="itemCarrousel" id='registerItem1'>
                    <div className="tarjetaCarrousel">
                        <Register />
                    </div>
                    <div className="flechaCarrousel">
                            <p>Ingresar</p>
                    </div>
                </div>
            </div>
        </div>
    )
}