import React from 'react';
import { Link } from 'react-router-dom';
import '../landing/LandingPage.css'

 function landing() {
    return (
        <div>
            <Link to='/'>
                <img src="https://fondosmil.com/fondo/20100.jpg" alt="img not found" />
            </Link>
            <Link to= '/home'> 
                <button>HOME</button>
            </Link>
           
        </div>
    );
};

export default landing;