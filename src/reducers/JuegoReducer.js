export const JuegoReducer = (state = [], action) => {
  
    switch (action.type) {
        //Crear: Sacar copia del estado y Anidar el nuevo juego
        case "crear":
            return [...state, action.payload];

        //Borrar: Filtrar el arreglo dejando todos los juegos que tengan el id diferente al que 
        //se quiere borrar
        case "borrar":
            return state.filter(juego => juego.id !== action.payload);

        //Editar: Buscamos el indice del juego con el id que haga match, sobrescribimos ese juego con
        //el nuevo juego y retornamos una copia del estado que acabamos de actualizar
        case "editar":
            let indice = state.findIndex(juego => juego.id === action.payload.id);
            state[indice] = action.payload;
            return [...state];
    
        default:
            return state;
    }

}
