import React, { useEffect, useReducer } from 'react'
import { JuegoReducer } from '../reducers/JuegoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('juegos')) || [];
};

export const MisJuegos = () => {

    const [juegos, dispatch] = useReducer(JuegoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('juegos', JSON.stringify(juegos));
    }, [juegos]);

    const conseguirDatosForm = (e) => {
        e.preventDefault();

        let juego = {
            id: new Date().getTime(),
            titulo: e.target.titulo.value,
            descripción: e.target.descripción.value,
        };

        const action = {
            type: 'crear',
            payload: juego,
        };

        dispatch(action);
    };

    const borrarJuego = (id) => {
        const action = {
            type: 'borrar',
            payload: id,
        };

        dispatch(action);
    };

    const editar = (e, id) => {
        let juego = {
            id,
            titulo: e.target.value,
            descripción: e.target.value,
        };

        const action = {
            type: 'editar',
            payload: juego,
        };

        dispatch(action);
    };

  return (
    <div>
        <h1>Estos son mis Videojuegos</h1>

        <p>Numero de Videojuegos: {juegos.length}</p>
        <ul>
            {
                juegos.map(juego => (
                    <li key={juego.id}>
                        {juego.titulo}

                        &nbsp;  <button type='button' onClick={() => borrarJuego(juego.id)}>
                                    X
                                </button>
                        <input type='text' onBlur={e => editar(e, juego.id)} />
                    </li>
                ))
            }
        </ul>

        <h3>Agregar Juegos</h3>

        <form onSubmit={conseguirDatosForm}>
            <input type='text' name='titulo' placeholder='Titulo' />
            <textarea name='descripción' placeholder='Descripción' />
            <input type='submit' value='Guardar' />
        </form>
    </div>
  )
}
