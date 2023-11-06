function temperatureCalc(celsius) {
  return (celsius * 9/5) + 32;
}

const c = 5;

const Fahrenheit = temperatureCalc(c);
console.log(Fahrenheit);