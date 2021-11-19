


let crearTablero = document.getElementById('crearTablero');




document.getElementById('crearTablero').addEventListener( 'click', (e) => {

  let altura = document.getElementById('altura').value;
  let anchura = document.getElementById('anchura').value;
  let tablero = document.getElementById('tablero');
  console.log(tablero)

  console.log(tablero)

  const numCasillas = altura * anchura;

  console.log(numCasillas);


  tablero.appendChild(table);

  for (let i = 1; i <= numCasillas; i++) {

    
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = i;


    tablero.appendChild(button);


  }

});
