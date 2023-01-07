import React from 'react';
import './assets/Modal.css';
import { negative, positive } from './assets';
import { Link } from 'react-router-dom';

export default function Modal({ setShowModal, titleModal, statusModal }) {
    return (

        <span className='modal__responsive'>
            <div className='modal'>
                {
                    statusModal === 'sending'
                        ? <div className='modal__sending'><p>{titleModal}</p></div>
                        : <div className='modal__title'><p>{titleModal}</p></div>
                }
                {/* <div className='modal__title'><p>{titleModal}</p></div> */}
                <div className='modal__subtitle'><p>¿Quieres ver los resultados?</p></div>
                <div className='modal__buttons'>
                    <Link to='/resultados' style={{ textDecoration: 'none' }}>
                        <div className='button__positive'>
                            <img src={positive} className='button__svg' alt="positive"></img>
                            <div className='button__text'>Si</div>
                        </div>
                    </Link>

                    <div className='button__negative' onClick={() => setShowModal(false)}>
                        <img src={negative} className='button__svg' alt="negative"></img>
                        <div className='button__text'>No</div>
                    </div>
                </div>
            </div>
        </span>
    )
}
