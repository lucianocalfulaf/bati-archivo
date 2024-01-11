function convertirTemperatura() {
    let continuar = true;
  
    while (continuar) {
      let temperaturaCelsius;
  
      do {
        let entradaUsuario = prompt("Ingrese la temperatura en grados Celsius (o escriba 'fin' para salir):");
  
        if (entradaUsuario.toLowerCase() === 'fin') {
          continuar = false;
          break;
        }
  
        temperaturaCelsius = parseFloat(entradaUsuario);
  
        if (isNaN(temperaturaCelsius)) {
          console.error("Error: Ingrese un valor numérico válido.");
        }
      } while (isNaN(temperaturaCelsius));
  
      if (continuar) {
        const temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
        const temperaturaKelvin = temperaturaCelsius + 273.15;
  
        console.log(`La temperatura en grados Fahrenheit es: ${temperaturaFahrenheit.toFixed(2)}`);
        console.log(`La temperatura en Kelvin es: ${temperaturaKelvin.toFixed(2)}`);
      }
    }
  
    console.log("Programa finalizado.");
  }
  
  convertirTemperatura();
  