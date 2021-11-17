import React from "react";
import Searchbar from "../searchBar/SearchBar";
import '../navBar/NavBar.css'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDogs } from "../../actions/actions";


export default function NavBar({setCurrentPage}){
    const dispatch = useDispatch();
    
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getDogs())
        setCurrentPage(1)
    }
    return (    
        <div >
            <div className='barra'>
                <Link className='navLink' to ='/'>
                    <span className='titleNav'>DOGGY WORLD ♥</span>
                </Link>
                
                <div className='botonPadre'>
                    <button className='botones' onClick={e => {handleClick(e)}}>
                        RELOAD DOGGOS
                    </button>
                    <Link to='/createDog'>
                        <button className='botones'>
                            CREATE YOUR DOG
                        </button>
                    </Link>
                </div>
                <div className='searchi'>
                    <Searchbar/>
                </div>
            </div>
        </div>
    )
}



            