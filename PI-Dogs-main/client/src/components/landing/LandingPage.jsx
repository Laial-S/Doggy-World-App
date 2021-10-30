import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../home/Home'

 function landing() {

    function prueba() {
        alert('NO HAGO NADA')
    }
    return (
        <div>
            <Link to='/'>
                <img src="https://fondosmil.com/fondo/20100.jpg" alt="img not found" />
                <button onClick={prueba}>HOME</button>
            </Link>
           
        </div>
    );
};

export default landing;