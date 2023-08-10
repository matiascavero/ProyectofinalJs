function fechaHora() {
    // Solicitar al usuario que ingrese un año
    const año = prompt("Ingrese un año");
    
    // Solicitar al usuario que ingrese un mes
    const mes = prompt("Ingrese un mes");
    
    // Solicitar al usuario que ingrese un día del mes
    const dia = prompt("Ingrese un día del mes");
    
    // Validar si alguno de los datos ingresados no es un número
    if (isNaN(año) || isNaN(mes) || isNaN(dia)) {
      alert("Un dato que proporcionó no es una fecha válida. Por favor, ingrese un número.");
      return;
    }
    
    // Validar si el mes ingresado no está en el rango válido
    else if (mes > 12 || mes < 1) {
      alert("El mes que ingresó no es válido. Por favor, ingrese un mes del 1 al 12.");
      return;
    }
    
    // Validar si el día ingresado no está en el rango válido
    else if (dia > 31 || dia < 1) {
      alert("El día que ingresó no es válido. Por favor, ingrese un día del 1 al 31.");
      return;
    }
    
    // Solicitar al usuario que ingrese la hora
    const hora = prompt("Ingrese la hora");
    
    // Solicitar al usuario que ingrese los minutos
    const minutos = prompt("Ingrese los minutos");
    
    // Solicitar al usuario que ingrese los segundos
    const segundos = prompt("Ingrese los segundos");
    
    // Validar si la hora, los minutos o los segundos no son números
    if (isNaN(hora) || isNaN(minutos) || isNaN(segundos)) {
      alert("La hora, los minutos o los segundos que ingresó no son válidos. Por favor, ingrese solo números.");
      return;
    }
    
    // Validar si la hora ingresada no está en el rango válido
    else if (hora > 23 || hora < 0) {
      alert("La hora que ingresó no es válida. Por favor, ingrese una hora entre 0 y 23.");
      return;
    }
    
    // Validar si los minutos ingresados no están en el rango válido
    else if (minutos > 59 || minutos < 0) {
      alert("Los minutos que ingresó no son válidos. Por favor, ingrese minutos entre 0 y 59.");
      return;
    }
    
    // Validar si los segundos ingresados no están en el rango válido
    else if (segundos > 59 || segundos < 0) {
      alert("Los segundos que ingresó no son válidos. Por favor, ingrese segundos entre 0 y 59.");
      return;
    }
    
    // Si todas las validaciones pasan, mostrar la fecha y hora ingresada
    else {
      alert(dia + '/' + mes + '/' + año + '\n' + hora + ':' + minutos + ':' + segundos);
    }
  }
  
  // Llamar a la función
  fechaHora();
  

