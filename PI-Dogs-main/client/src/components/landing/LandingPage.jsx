import React from 'react';
import { Link } from 'react-router-dom';
import '../landing/LandingPage.css'
import doggin from '../landing/doggin.jpg'

 function landing() {
    return (
        <div>
            <div className='imgLanding' >
                <img 
                    src={doggin}
                    alt="img not found" 
                    className='imagen'
                />
            <h1 className='text'>WELCOME TO DOGGY WORLD! ♥</h1>

            </div>
                    <div className='contenedorBoton'>
                <Link to= '/home'> 
                        <button className='botonLanding'>HOME</button>
                </Link>
                    </div>
        </div>
    );
};

export default landing;