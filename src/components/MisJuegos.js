import React from 'react'

export const MisJuegos = () => {
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

        <form>
            <input type='text' name='titulo' placeholder='Titulo' />
            <textarea name='descripción' placeholder='Descripción' />
            <input type='submit' value='Guardar' />
        </form>
    </div>
  )
}
