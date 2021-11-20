



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


  // ---- crea un tablero en función de los parámetros que pase el usuario.
  crearTablero(tablero, altura, anchura){

    let cont = 0; // --- cuenta el nº de casillas que se van creando.
    let contNumAleatorio = 0; // --- cuenta el total de nº de aleatorios.


    let posicionBombas = this.getCasillasAleatorias(this.totalCeldas, this.bombas);


    console.log('this.totalCeldas-- 00  ' +this.totalCeldas);//--------------------------------------------
    console.log('this.bombas-- 00 ' +this.bombas);//--------------------------------------------
    console.log('posicionBombas -Array -- 00 ' +posicionBombas) ;//--------------------------------------------
    console.log('--------------------------------------------<br><br> <br>  '  ) ;


    //let posicionBombas = this.getCasillasAleatorias(this.totalCeldas, this.bombas);

    for (let i = 0; i <= anchura; i++) {

      const div = document.createElement('div');// --- para cada valor de 'i' creo un div.
      tablero.appendChild(div);

      for (let j = 1; j <= altura; j++) {

        const button = document.createElement('button');
        button.className = 'celdas';
        button.type = 'button';

        console.log('posicionBombas[cont]-- 11  ' +posicionBombas[cont]);//--------------------------------------------
        console.log('contNumAleatorio-------------------------------- 11 ' +contNumAleatorio);//--------------------------------------------


        if (posicionBombas[cont] === contNumAleatorio){

          console.log('posicionBombas[cont]-- 22  ' +posicionBombas[cont]);//--------------------------------------------
          console.log('contNumAleatorio------------------------------- 22 ' +contNumAleatorio);//--------------------------------------------


          button.innerHTML = "BB";
          button.value  = "BB";

          div.appendChild(button);
          this.casillas[cont] = this.letras[i]+"" +j;// --- cargo el array con los valores asignado a cada botón.
          cont++;

        }
        else {
          button.innerText = this.letras[i]+"" +j;
          button.value  = "BB";
          div.appendChild(button);

          this.casillas[cont] = this.letras[i]+"" +j;// --- cargo el array con los valores asignado a cada botón.

        }

        contNumAleatorio++;
        console.log('contNumAleatorio contNumAleatorio ;  ' +contNumAleatorio );
      }
    }

    console.log('num ale contNumAleatorio;  ' +contNumAleatorio );

  }// ----------- Fin crearTablero(.....)



  getValorCasillas(){// --------------------------- retorna un array con el valor que tiene cada uno de los valores.

    return this.casillas;

  }// -----------Fin getValorCasillas()


  // --- retorna un array con tantos nº aleatorios como 'numBombas', comprendidos entre: 0 y numCasillas.
  getCasillasAleatorias(numCasillas, numBombas){

    for (let i = 0; i <numBombas; i++) {
      let aleator = Math.round(Math.random()*numCasillas);
      this.casillasAleatorias[i] = aleator;

    }// ----------- Fin getCasillasAleatorias(numCasillas,


    return this.casillasAleatorias.sort( (a,b) => a - b);
  }

} // ----------- Fin class Tablero{




//********************************************************************************************************************


document.getElementById('crearTablero').addEventListener( 'click', (e) => {

  let altura = document.getElementById('altura').value;
  let anchura = document.getElementById('anchura').value;
  let numBombas = document.getElementById('numMinas').value;

  let tablero = document.getElementById('tablero');
  let datosTablero = document.getElementById('datosTablero');
  datosTablero.style.display = 'none';// --- oculto el div pedir datos.


  // =================================================== CREO  EL OBJETO  TABLERO-
  let table = new Tablero(altura, anchura, numBombas);
  let totalCeldas = table.getTotalCeldas();
  let totalBombas = table.getBombas();


  table.crearTablero(tablero, altura, anchura);
  let bombasAleatoria = table.getCasillasAleatorias(totalCeldas, totalBombas);


  console.log(table.getValorCasillas());//---------------------------------------------------------------

  console.log('Posición de la bombas: '+bombasAleatoria);//----------------------------------------------



});// ----------- Fin document.getElementById('crearTablero').addEventListener
