function nonMutatingSplice(cities) {

  return cities.slice(0, 3)
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
const i = nonMutatingSplice(inputCities);
console.log(i)