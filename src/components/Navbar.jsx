import React from 'react';
import './assets/Navbar.css';
import { Link } from 'react-router-dom';

export function Navbar({ children }) {
    return (
        <>
            <div className='navbar'>
                <div className='navbar__body'>
                    <div className='navbar__items'>
                        <Link to='/' style={{ textDecoration: 'none' }}><div className='navbar__item'>Encuesta</div></Link>
                        <Link to='/resultados' style={{ textDecoration: 'none' }}><div className='navbar__item'>Resultados</div></Link>
                    </div>
                </div>
            </div>
            {children}
        </>
    )
}
