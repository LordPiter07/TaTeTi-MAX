const btn = document.querySelectorAll('button');
const btnReset = document.getElementById('reset');

//imprimir fichas
btn.forEach((item, index) => item.addEventListener('click', (e) => btnOnClick(e, index)));
//reset tablero
btnReset.addEventListener('click', () =>{
    btn.forEach(element => element.innerHTML = "");
})

// defino la variable que va a indicar el orden de los turnos y el array que contendra los elementos que conforman el tablero.
let turno = 0;
const tablero = [];

// establezco los turnos y el orden en que se juegan las fichas. Anuncio si existe un ganador
btnOnClick = (e, pos) => {
    turno++;
    const btn = e.target;
    const ficha = turno % 2 ? "X" : "O";
    btn.innerHTML = ficha;
    tablero[pos] = ficha;
    if(ganar()){
        Swal.fire(`VICTORIA!\nFelicitaciones Jugador ${ficha}`)
    }
}

// controlo si existen 3 fichas iguales alineadas en mi array(tablero)
const ganar = () => {

    let gano = false;

    //controlo las filas - orden horizontal
    if(tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]){
        gano = true;
    } else if(tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]){
        gano = true;
    } else if(tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]){
        gano = true;
    //controlo las columnas - orden vertical     
    } else if(tablero[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0]){
        gano = true;
    } else if(tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1]){
        gano = true;
    } else if(tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2]){
        gano = true;
    //controlo las diagonales
    } else if(tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0]){
        gano = true;
    } else if(tablero[2] == tablero[4] && tablero[2] == tablero[6] && tablero[2]){
        gano = true;
    }
    return gano;
}

