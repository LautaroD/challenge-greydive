import React, { useState } from 'react';
import form from '../db.json';
import { useFormik } from 'formik';
import { db } from '../utils';
import { setDoc, doc } from 'firebase/firestore';
import './assets/Encuesta.css';
import Modal from './Modal';

export function Encuesta() {
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState('');
    const [statusModal, setStatusModal] = useState('');

    let initialValues = {}
    form.items.map(e => Object.defineProperty(initialValues, e.name, { value: '' }))

    const formik = useFormik({
        initialValues: initialValues,
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                setShowModal(true);
                setTitleModal('Enviando...');
                setStatusModal('sending');
                const docRef = doc(db, "encuestas", formValue.email)
                await setDoc(docRef, formValue);
                formik.resetForm();
                const inputs = Array.from(document.getElementsByClassName('form__field'));
                inputs.forEach(e => e.value = '');
                setTitleModal('Enviado');
                setStatusModal('send');
                // setTimeout(() => {
                //     setShowModal(false)
                // }, 5000);
            } catch (error) {
                console.error(error.message)
            }
        }
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit} className='form__body'>
                {
                    form.items.map((e, i) => (
                        (e.type === 'select')
                            ? <div className='form__select' key={i}>
                                <label>{e.label}</label>
                                <select className='form__field' required={e.required} name={e.name} value={formik.values.name} onChange={formik.handleChange}>
                                    <option value=''>---</option>
                                    {
                                        e.options.map((option, i) => (
                                            <option key={i} value={option.value}>{option.label}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            : <div className={(e.type === 'submit') ? 'form__button' : (e.type === 'checkbox') ? 'form__checkbox' : 'form__input'} key={i}>
                                <label>{(e.type === 'submit') ? null : e.label}</label>
                                <input
                                    className='form__field'
                                    type={e.type}
                                    required={e.required}
                                    name={e.name}
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                />
                            </div>
                    ))
                }
            </form>
            {
                showModal
                    ? <Modal setShowModal={setShowModal} titleModal={titleModal} statusModal={statusModal} />
                    : <></>
            }
        </>
    )
}
