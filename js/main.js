



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

    this.casillasAleatorias = this.getCasillasAleatorias(this.totalCeldas, this.bombas);

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
    let contNumAleatorio = 0; // --- controla el nº de aleatorios.

    for (let i = 1; i <= anchura; i++) {

      const div = document.createElement('div');// --- para cada valor de 'i' creo un div.
      tablero.appendChild(div);

      for (let j = 1; j <= altura; j++) {

        const button = document.createElement('button');
        button.className = 'celdas';
        button.type = 'button';


        if (this.casillasAleatorias[contNumAleatorio] == cont ){
          button.value = "BB";
          contNumAleatorio++;
        }else{
          button.value = this.letras[i]+"" +j;
        }


        //button.value = this.letras[i]+"" +j;

        button.innerText = this.letras[i]+"" +j;
        div.appendChild(button);

        this.casillas[cont] = this.letras[i]+"" +j;// --- cargo el array con los valores asignado a cada botón.
        cont++;
        contNumAleatorio++;
      }
    }
  }// ----------- Fin crearTablero(.....)



  getValorCasillas(){// --------------------------- retorna un array con el valor que tiene cada uno de los valores.

    return this.casillas;

  }// -----------Fin getValorCasillas()


  // --- retorna un array con tantos nº aleatorios como 'numBombas', comprendidos entre: 0 y numCasillas.
  getCasillasAleatorias(numCasillas, numBombas){

    for (let i = 0; i <numBombas; i++) {
      let aleatorio = Math.round(Math.random()*numCasillas);
      this.casillasAleatorias[i] = aleatorio;

    }// ----------- Fin getCasillasAleatorias(numCasillas,

    return this.casillasAleatorias;
  }

} // ----------- Fin class Tablero{



let crearTablero = document.getElementById('crearTablero');




document.getElementById('crearTablero').addEventListener( 'click', (e) => {

  let altura = document.getElementById('altura').value;
  let anchura = document.getElementById('anchura').value;
  let numBombas = document.getElementById('numMinas').value;



  let tablero = document.getElementById('tablero');
  let datosTablero = document.getElementById('datosTablero');

  datosTablero.style.display = 'none';// --- oculto el div pedir datos.

  let table = new Tablero(altura, anchura, numBombas);

  table.crearTablero(tablero, altura, anchura);
  let bombasAleatoria = table.getCasillasAleatorias(table.getTotalCeldas(), table.getBombas());


  console.log(table.getValorCasillas());
  console.log(bombasAleatoria);



});// ----------- Fin document.getElementById('crearTablero').addEventListener
