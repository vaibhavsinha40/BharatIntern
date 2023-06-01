function convertToFahrenheit() {
    const celsiusInput = document.getElementById('celsiusInput');
    const fahrenheitInput = document.getElementById('fahrenheitInput');
    const result = document.getElementById('result');
    
    if (celsiusInput.value !== '') {
      const celsius = parseFloat(celsiusInput.value);
      const fahrenheit = (celsius * 9/5) + 32;
      fahrenheitInput.value = fahrenheit.toFixed(2);
      result.textContent = celsius + "°C is equal to " + fahrenheit.toFixed(2) + "°F";
    } else {
      result.textContent = "Please enter a valid Celsius value.";
    }
  }
  
  function convertToCelsius() {
    const celsiusInput = document.getElementById('celsiusInput');
    const fahrenheitInput = document.getElementById('fahrenheitInput');
    const result = document.getElementById('result');
    
    if (fahrenheitInput.value !== '') {
      const fahrenheit = parseFloat(fahrenheitInput.value);
      const celsius = (fahrenheit - 32) * 5/9;
      celsiusInput.value = celsius.toFixed(2);
      result.textContent = fahrenheit + "°F is equal to " + celsius.toFixed(2) + "°C";
    } else {
      result.textContent = "Please enter a valid Fahrenheit value.";
    }
  }
  