function sumar_cadenas(cadena) {
  let suma = 0;
  if(cadena.length > 1){
    let num1 = + cadena[0];
    let num2 = +cadena[2];
    suma = num1 + num2;
  }
  else{
    suma += +cadena;
}
return suma;
}

export default sumar_cadenas;
