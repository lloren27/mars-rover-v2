var rover = {
  direccion: "E",
  posicion: [6,3],
  travelLog: [],
};

var grip = [
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
];

for (var i = 0 ; i<grip.length ; i++){
  var columna = getRandom ();
  var fila = getRandom ();
  
  var cuadranteAleatorio = grip [fila] [columna];
  
  if (cuadranteAleatorio === null){
    grip [fila] [columna] = "T";
    console.log ( "se ha creado un obstaculo en : " + " fila " + [fila]+","+" columna "+[columna]);
  }
 
}

function getRandom (){
 return Math.floor (Math.random() * 9);
}

function comandos (){

  var instrucciones = "bbrflf";

    for (i = 0 ;i < instrucciones.length;i++){
  if (instrucciones [i] == "b" ||instrucciones [i] == "f"||instrucciones [i] == "r"||instrucciones [i] == "l"){
      switch (instrucciones [i]){
        case "r":
          girarDerecha ();
          break;
        case "l":
          girarIzquierda ();
          break;
        case "f":
          moverDelante ();
          break;
        case "b":
          moverDetras();
          break;
      }

  }else{

    console.log (" El comando insertado no es correcto. ")
  }


  }

}

function posicionA (){
  console.log ("La posicion actual es :" + rover.posicion)
}

function direccionA (){
  console.log ("La direccion actual es: " + rover.direccion)
}

function moverDetras(){

  if (rover.posicion [0]>0 && rover.posicion [1]>0 && rover.posicion [0]<=9 && rover.posicion [1]<=9){

      switch (rover.direccion){

        case "N":
          rover.posicion [1]++;

          break;
        case "S":
          rover.posicion [1]--;

          break;
        case "E":
          rover.posicion [0]--;

          break;
        case "W":
          rover.posicion [0]++;

          break;
        }

      console.log ("La posicion del rover es : " + rover.posicion);
      rover.travelLog.push ("[" + rover.posicion + "]");


  }else{

    console.log (" El rover se ha salido del cuadrante marcado ");


  }

  }
function moverDelante(){

  if (rover.posicion [0]>0 && rover.posicion [1]>0 && rover.posicion [0]<=9 && rover.posicion [1]<=9){

      switch (rover.direccion){

        case "N":
          rover.posicion [1]--;

          break;
        case "S":
          rover.posicion [1]++;

          break;
        case "E":
          rover.posicion [0]++;

          break;
        case "W":
          rover.posicion [0]--;

          break;
        }

      console.log ("La posicion del rover es : " + rover.posicion);
      rover.travelLog.push ("[" + rover.posicion + "]");


    }else{

      console.log (" El rover se ha salido del cuadrante marcado ");


    }

  }
function girarDerecha(){

      switch (rover.direccion){

        case "N":
          rover.direccion = "E";
          break;
        case "S":
          rover.direccion = "W";
          break;
        case "E":
          rover.direccion = "S";
          break;
        case "W":
         rover.direccion = "N";
          break;
        }

      console.log ("La dirección del rover es : " + rover.direccion);

  }

function girarIzquierda(){

      switch (rover.direccion){

        case "N":
          rover.direccion = "W";
          break;
        case "S":
          rover.direccion = "E";
          break;
        case "E":
          rover.direccion = "N";
          break;
        case "W":
         rover.direccion = "S";
          break;
        }

      console.log ("La dirección del rover es : " + rover.direccion);

  }

function recorridoRover(posicion){
  console.log ("El rover ha pasado por :" + rover.travelLog);



}

posicionA ();
comandos ();
recorridoRover ();
