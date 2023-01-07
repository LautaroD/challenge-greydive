import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../utils';
import './assets/Resultados.css';

export function Resultados() {
    const [state, setState] = useState([]);

    const fetchData = async () => {
        try {
            const collectionRef = collection(db, 'encuestas');
            const data = await getDocs(collectionRef);
            let dataFormatted = data.docs.map(e => (e._document.data.value.mapValue.fields))
            dataFormatted = dataFormatted.map(e => (Object.values(e)))
            return dataFormatted;
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {

        fetchData().then(data => setState(data));

    }, [])


    return (
        <div className='resultados'>
            {
                (state.length < 1)
                    ? <h4>Cargando...</h4>
                    : <>
                        <div className='resultados__title'>Total encuestados: {state.length}</div>
                        <div className='resultados__body'>
                            {
                                state.map((e, i) =>
                                    <div key={i} className='resultados__article'>
                                        {
                                            (e.map((x, i) =>
                                                <p key={i}>{(Object.values(x)[0])}</p>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </>
            }
        </div>
    )
}
