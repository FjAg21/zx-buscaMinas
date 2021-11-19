



class Tablero{

  //const letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','v','w','x','y','z'];

  constructor() {

  }


  crearTablero(tablero, altura, anchura){

    const letras = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','v','w','x','y','z'];

    for (let i = 1; i <= anchura; i++) {

      const div = document.createElement('div');
      tablero.appendChild(div);

      for (let j = 1; j <= altura; j++) {

        const button = document.createElement('button');
        button.className = 'celdas';
        button.type = 'button';
        button.value = letras[i]+"" +j;
        button.innerText = letras[i]+"" +j;
        div.appendChild(button);

      }
    }

  }// ----------- Fin crearTablero(.....)

} // ----------- Fin Tablero{



let crearTablero = document.getElementById('crearTablero');




document.getElementById('crearTablero').addEventListener( 'click', (e) => {

  let altura = document.getElementById('altura').value;
  let anchura = document.getElementById('anchura').value;
  let tablero = document.getElementById('tablero');
  let datosTablero = document.getElementById('datosTablero');

  datosTablero.style.display = 'none';// --- oculto el div pedir datos.

  let table = new Tablero();
  table.crearTablero(tablero, altura, anchura);



});// ----------- Fin document.getElementById('crearTablero').addEventListener
