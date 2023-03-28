function sumar_cadenas(cadena) {
  let suma = 0;
  let caracter = "";
  if (cadena[2] == "[") {
    caracter = cadena[3];
  }
  for (let i = 0; i < cadena.length; i++) {
    if (caracter == "") {
      if (cadena[i] == "," || cadena[i] == "-") {
        suma += 0;
      } else {
        suma += +cadena[i];
      }
    }
    else{
        if (cadena[i+7] == "," || cadena[i+7] == "-" || cadena[i+7] == caracter) {
            suma += 0;
          } else{
            suma += +cadena[i+7];
          }
    }
  }
  return suma;
}

export default sumar_cadenas;
