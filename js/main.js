



class Tablero{

  // --- para nombrar a las casillas.
  letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','v','w','x','y','z'];

  // --- para almacenar tantos nº aleatorios como bombas elige el usuario.
  casillasAleatorias = [];

  // almacena el nº de las celdas y las celdas con bomba, para compararlo con el array
  // que tiene las celdas de alrrededor.
  celdasNumeradas = [];

  casillas = []; // --- almacena el nombre de las casillas creadas.

  posicionBombas = []; // --- almacena posición de las bombas al crear el tablero.

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

  getPosicionBombas(){

    return this.posicionBombas;
  }

  getTotalCeldas(){

    return this.totalCeldas;
  }

  getNobreCasillas(){

    return this.casillas;
  }

  getCeldasNumeradas(){

    return this.celdasNumeradas;
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
  

  // --- retorna un array con el valor de las celdas que están alrededor de la selecciona.
  getCeldasAlRededor(valorCelda, anchuraFila ){

    let celdasAlRededor = [];
    let valorC = parseInt(valorCelda);
    let anchuraF = parseInt(anchuraFila);

    let doce = (valorC) - anchuraF;
    let una = (valorC) - anchuraF + parseInt(1);
    let tres = (valorC) + parseInt(1);
    let cinco = (valorC) + anchuraF + parseInt(1);

    let seis = (valorC) + anchuraF;
    let siete = (valorC) + anchuraF - parseInt(1);
    let nueve = (valorC) - parseInt(1);
    let once = (valorC) - anchuraF - parseInt(1);

    celdasAlRededor = [doce, una, tres, cinco, seis, siete, nueve, once ];
    return celdasAlRededor;

  }


  // ---- crea un tablero en función de los parámetros que pase el usuario.
  crearTableroSinMapa(tablero, altura, anchura){

    let cont = 0; // --- cuenta el nº de casillas que se van creando.
    let cuentaCeldasDesdeUno = 0;

    let contNumAleatorio = 0; // --- cuenta el total de nº de aleatorios.
    this.posicionBombas = this.getCasillasAleatorias(this.totalCeldas, this.bombas);

    console.log("Situación de las bommbas: ----------- " +this.posicionBombas);//---------------------------------**********

    for (let i = 0; i < anchura; i++) {

      const div = document.createElement('div');// --- para cada valor de 'i' creo un div.
      tablero.appendChild(div);

      for (let j = 0; j < altura; j++) {

        const button = document.createElement('button');
        button.className = 'celdas';
        button.type = 'button';

        // --- 'posicionBombas[cont]' = celdas aleatoras. 'contNumAleatorio' = cada una de las celdas numeradas.
        if (this.posicionBombas[cont] === contNumAleatorio){

          button.innerHTML=  '&#9973' ;
          button.value  = "BB";
          button.className = 'celdas'

          div.appendChild(button);
          this.casillas[contNumAleatorio] = "BB";// --- cargo el array con los valores asignado a cada botón.
          cont++;
          this.celdasNumeradas[contNumAleatorio] = contNumAleatorio; // todas las celdas con nº.
        }
        else {
          button.innerHTML=  '&#9973' ;

          button.value  = cuentaCeldasDesdeUno;
          div.appendChild(button);
          button.className = 'celdas';

          this.casillas[contNumAleatorio] = this.letras[i]+"" +j;// --- cargo el array con los valores asignado a cada botón.
          this.celdasNumeradas[contNumAleatorio] = contNumAleatorio;  // todas las celdas con nº.
        }

        contNumAleatorio++;
        cuentaCeldasDesdeUno++;
      }
    }

  }// ----------- Fin crearTableroSinMapa(.....)


  // ---- crea un tablero en función de los parámetros que pase el usuario.
  crearTablero(tablero, altura, anchura){

    let cont = 0; // --- cuenta el nº de casillas que se van creando.
    let cuentaCeldasDesdeUno = 0;

    let contNumAleatorio = 0; // --- cuenta el total de nº de aleatorios.
    this.posicionBombas = this.getCasillasAleatorias(this.totalCeldas, this.bombas);

    console.log("Situación de las bommbas: ----------- " +this.posicionBombas);//---------------------------------**********

    for (let i = 0; i < anchura; i++) {

      const div = document.createElement('div');// --- para cada valor de 'i' creo un div.
      tablero.appendChild(div);

      for (let j = 0; j < altura; j++) {

        const button = document.createElement('button');
        button.className = 'celdas';
        button.type = 'button';

        // --- 'posicionBombas[cont]' = celdas aleatoras. 'contNumAleatorio' = cada una de las celdas numeradas.
        if (this.posicionBombas[cont] === contNumAleatorio){

          button.innerHTML = "BB";
          button.value  = "BB";
          button.className = 'celdas'

          div.appendChild(button);
          this.casillas[contNumAleatorio] = "BB";// --- cargo el array con los valores asignado a cada botón.
          cont++;
          this.celdasNumeradas[contNumAleatorio] = contNumAleatorio; // todas las celdas con nº.
        }
        else {
          button.innerText = this.letras[i]+"" +j;

          button.value  = cuentaCeldasDesdeUno;
          div.appendChild(button);
          button.className = 'celdas';

          this.casillas[contNumAleatorio] = this.letras[i]+"" +j;// --- cargo el array con los valores asignado a cada botón.
          this.celdasNumeradas[contNumAleatorio] = contNumAleatorio;  // todas las celdas con nº.
        }

        contNumAleatorio++;
        cuentaCeldasDesdeUno++;
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
  table.crearTablero(tablero, altura, anchura);

  const celdas = document.querySelectorAll('.celdas');


  let nombreDeCadaCelda = table.getNobreCasillas();
  let numeroDeCadaCelda = table.getCeldasNumeradas();


  //let totalCeldas = table.getTotalCeldas();
  //let totalBombas = table.getBombas();

  //let bombasAleatoria = table.getCasillasAleatorias(totalCeldas, totalBombas);
  //let casillas = table.getNobreCasillas();


  //console.log('table.getValorCasillas: ' +table.getValorCasillas());//*******************--------------------------------------**********************----------

  console.log('Nombre de cada celda: ' +nombreDeCadaCelda);//----------------------------------------------
  console.log("Número de cada celda: " +numeroDeCadaCelda)//--------------------------**********

  celdas.forEach(  celda => {

    // ===================================================================== CREO  EL EVENTO  PARA  EL  RATÓN-
    celda.addEventListener( 'mouseup', (e) => {

      let valorDeLaCeldaSelecciona = celda.value;
      let celdasAlRededorDeLaSeleccionada =
                    table.getCeldasAlRededor(parseInt(valorDeLaCeldaSelecciona), parseInt(anchura) );

      //console.log("Valor de la celda seleccionada: ++++++++++++" +valorDeLaCeldaSelecciona);//*******************--------------------------------------**********************
      console.log("Situación de las bommbas: ----------- " +table.posicionBombas);//---------------------------------******
      console.log('celda.value  celda.value  ' +celda.value);//-------

      if (valorDeLaCeldaSelecciona !== 'BB') {
        console.log("Valor de la celda seleccionada: ++++++++++++ " +valorDeLaCeldaSelecciona);//*******
        console.log('Celdas A lRededor De La Celda Seleccionada ' +celdasAlRededorDeLaSeleccionada);//-------------------
        let contadorBombasCercanas = 0;

        for (let i = 0; i < table.posicionBombas.length; i++) {

          for (let j = 0; j < celdasAlRededorDeLaSeleccionada.length; j++) {

            if (table.posicionBombas[i] === celdasAlRededorDeLaSeleccionada[j]) {

              contadorBombasCercanas++;
            }

            console.log('parseInt(table.getTotalCeldas()+1) ' +parseInt(table.getTotalCeldas()));
            if (celdasAlRededorDeLaSeleccionada[j] >= 0 &&
                        celdasAlRededorDeLaSeleccionada[j] < parseInt(table.getTotalCeldas())){

              celdas[celdasAlRededorDeLaSeleccionada[j]].style.backgroundColor = '#E7EB4E';
            }
          }
        }

        celdas[valorDeLaCeldaSelecciona].innerHTML =
                            '<span style=\'font-size:12px;\'>' + contadorBombasCercanas + '</span>';

        celdas[valorDeLaCeldaSelecciona].style.backgroundColor = '#4eebd9';
      }
      else {
        celda.style.backgroundColor = '#f83f15';
      }

    });
  });
});// ----------- Fin document.getElementById('crearTablero').addEventListener



//********************************************************************************************************************


// =========================================================== CREO  EL OBJETO  TABLERO SIN MAPA  CON UN EVENTO-


document.getElementById('crearTableroSinMapa').addEventListener( 'click', (e) => {

  let altura = document.getElementById('altura').value;
  let anchura = document.getElementById('anchura').value;
  let numBombas = document.getElementById('numMinas').value;

  let tablero = document.getElementById('tablero');
  let datosTablero = document.getElementById('datosTablero');
  datosTablero.style.display = 'none';// --- oculto el div pedir datos.

  let table = new Tablero(altura, anchura, numBombas);
  table.crearTableroSinMapa(tablero, altura, anchura);

  const celdas = document.querySelectorAll('.celdas');


  // =================================================== CREO  EL EVENTO  PARA  EL  RATÓN-
  celdas.forEach(  celda => {

    celda.addEventListener( 'mouseup', (e) => {

      let valorDeLaCeldaSelecciona = celda.value;
      let celdasAlRededorDeLaSeleccionada =
        table.getCeldasAlRededor(parseInt(valorDeLaCeldaSelecciona), parseInt(anchura) );

      if (valorDeLaCeldaSelecciona !== 'BB') {

        let contadorBombasCercanas = 0;

        for (let i = 0; i < table.posicionBombas.length; i++) {

          for (let j = 0; j < celdasAlRededorDeLaSeleccionada.length; j++) {

            if (table.posicionBombas[i] === celdasAlRededorDeLaSeleccionada[j]) {

              contadorBombasCercanas++;
            }

            console.log('parseInt(table.getTotalCeldas()+1) ' +parseInt(table.getTotalCeldas()));
            if (celdasAlRededorDeLaSeleccionada[j] >= 0 &&
              celdasAlRededorDeLaSeleccionada[j] < parseInt(table.getTotalCeldas())){

              celdas[celdasAlRededorDeLaSeleccionada[j]].style.backgroundColor = '#E7EB4E';
              //celdas[celdasAlRededorDeLaSeleccionada[j]].innerHTML = '&#127937;';
            }
          }
        }

        celdas[valorDeLaCeldaSelecciona].innerHTML =
          '<span style=\'font-size:12px;\'>' + contadorBombasCercanas + '</span>';

        celdas[valorDeLaCeldaSelecciona].style.backgroundColor = '#4eebd9';

      }
      else {

        celdas.forEach( cel => {
            cel.innerHTML = '&#128163;';
            cel.style.backgroundColor = '#f83f15';

        });
      }
    });

  });

});// ----------- Fin document.getElementById('crearTablero').addEventListener


//https://www.youtube.com/watch?v=xwapo6FFhnQ


