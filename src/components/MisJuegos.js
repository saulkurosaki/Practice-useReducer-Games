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
    };

  return (
    <div>
        <h1>Estos son mis Videojuegos</h1>

        <p>Numero de Videojuegos: 15</p>
        <ul>
            <li>GTA</li>
            <li>Mortal Kombat</li>
            <li>Crash Bandicoot</li>
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
