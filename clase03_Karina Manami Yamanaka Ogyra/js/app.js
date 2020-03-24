console.log("Punto A: Imprimir por consola la Tabla del multiplicar del 5.");
var tabla = 5;
var cantidad = 10;

for(var i=1; i<=cantidad; i++){
    console.log(tabla+"X"+i+"="+(tabla*i));
}

console.log("Punto B: Imprimir la Tabla del 5 y 6 .");
var num02 =5;
var num03 =6;
if (num02>num03){
  concole.log("Cambie los valores, el primero no puede ser mayor al segundo");
}
else{
  console.log("Tabla del"+num02);
  for (var i = 1; i<= 10; i++){
    console.log(num02 + "X" +i+"="+(num02));
  }
  console.log("tabla del"+num03);
  for(var i=1; i<=10; i++){
    console.log(num03 +"X"+ i+"="+(i*num03));
  }
}
