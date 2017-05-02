function cuentaNumeros(numero, arrayDeNumeros){
  var numeroRepetido = 0;
  for (var i = 0; i < arrayDeNumeros.length; i++) {
    if (numero === arrayDeNumeros[i]) {
      numeroRepetido = numeroRepetido + 1;
    }
  }
  return numeroRepetido;
}

cuentaNumeros(numero, arrayDeNumeros)
