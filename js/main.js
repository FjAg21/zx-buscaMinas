



class Tablero{

  // --- para nombrar a las casillas.
  letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','v','w','x','y','z'];

  // --- para almacenar tantos nº aleatorios como bombas elige el usuario.
  casillasAleatorias = [];

  casillas = []; // --- almacena el nombre de las casillas creadas.


  constructor(altura, anchura, bombas) {

    this.altura = altura;
    this.anchura = anchura;
    this.bombas = bombas;
    this.totalCeldas = this.altura * this.bombas;

  }

  getAltura(){

    return this.altura;
  }

  getAnchura(){

    return this.anchura;
  }

  getBombas(){

    return this.bombas;
  }

  getTotalCeldas(){

    return this.totalCeldas;
  }

  getNobreCasillas(){

    return this.casillas;
  }



  getValorCasillas(){// --------------------------- retorna un array con el valor que tiene cada uno de los valores.

    return this.casillas;

  }// -----------Fin getValorCasillas()


  // --- retorna un array ordenado con tantos nº aleatorios como 'numBombas', comprendidos entre: 0 y numCasillas.
  getCasillasAleatorias(numCasillas, numBombas){

    let bombasAleatorias = [];
    for (let i = 0; i < numCasillas; i++) {
      bombasAleatorias[i] = i ;
    }

    // -- desordeno el orden creado de las casillas del tablero.
    bombasAleatorias.sort(() => Math.random() - 0.5);

    // -- cargo el atributo 'casillasAleatorias' con tantas posiciones de 'bombasAleatorias' como 'numBombas' haya.
    for (let i = 0; i < numBombas; i++) {
      this.casillasAleatorias[i] = bombasAleatorias[i];
    }

    // -- desordeno el atributo 'casillasAleatorias'
    return this.casillasAleatorias.sort( (a,b) => a - b);

  }// ----------- Fin getCasillasAleatorias(numCasillas,


  // ---- crea un tablero en función de los parámetros que pase el usuario.
  crearTablero(tablero, altura, anchura){

    let cont = 0; // --- cuenta el nº de casillas que se van creando.
    let contNumAleatorio = 0; // --- cuenta el total de nº de aleatorios.
    let posicionBombas = this.getCasillasAleatorias(this.totalCeldas, this.bombas);

    console.log("--------------------------------------- " +posicionBombas);

    for (let i = 0; i < anchura; i++) {

      const div = document.createElement('div');// --- para cada valor de 'i' creo un div.
      tablero.appendChild(div);

      for (let j = 0; j < altura; j++) {

        const button = document.createElement('button');
        button.className = 'celdas';
        button.type = 'button';

        if (posicionBombas[cont] === contNumAleatorio){

          button.innerHTML = "BB";
          button.value  = "BB";
          button.className = 'celdas';

          div.appendChild(button);
          this.casillas[contNumAleatorio] = "BB";// --- cargo el array con los valores asignado a cada botón.
          cont++;

        }
        else {
          button.innerText = this.letras[i]+"" +j;
          button.value  = this.letras[i]+"" +j;
          div.appendChild(button);
          button.className = 'celdas';

          this.casillas[contNumAleatorio] = this.letras[i]+"" +j;// --- cargo el array con los valores asignado a cada botón.
        }

        contNumAleatorio++;
      }
    }

  }// ----------- Fin crearTablero(.....)


} // ----------- Fin class Tablero{




//********************************************************************************************************************


// ===================================================================== CREO  EL OBJETO  TABLERO  CON UN EVENTO-

document.getElementById('crearTablero').addEventListener( 'click', (e) => {

  let altura = document.getElementById('altura').value;
  let anchura = document.getElementById('anchura').value;
  let numBombas = document.getElementById('numMinas').value;

  let tablero = document.getElementById('tablero');
  let datosTablero = document.getElementById('datosTablero');
  datosTablero.style.display = 'none';// --- oculto el div pedir datos.

  let table = new Tablero(altura, anchura, numBombas);
  let totalCeldas = table.getTotalCeldas();
  let totalBombas = table.getBombas();


  table.crearTablero(tablero, altura, anchura);
  let bombasAleatoria = table.getCasillasAleatorias(totalCeldas, totalBombas);
  let casillas = table.getNobreCasillas();


  console.log('table.getValorCasillas: ' +table.getValorCasillas());//---------------------------------------------------------------

  console.log('Posición de la bombas: '+bombasAleatoria);//----------------------------------------------

  console.log('getNobreCasillas(): ' +table.getNobreCasillas());//----------------------------------------------

  const celdas = document.querySelectorAll('.celdas');



  celdas.forEach(  celda => {

    // ===================================================================== CREO  EL EVENTO  PARA  EL  RATÓN-
    celda.addEventListener( 'mouseup', (e) => {


      console.log(celda.value);
      if (celda.value === 'BB'){
        celda.style.backgroundColor = 'red';
        celdas[5].style.backgroundColor = 'yellow';

      }
      else{
        celda.style.backgroundColor = 'green';
      }
      //celda.style.backgroundColor= 'yellow';
    });

  });


});// ----------- Fin document.getElementById('crearTablero').addEventListener





