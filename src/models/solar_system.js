const planets = require('../data/planets.js');


const SolarSystem = function(planets) {
  this.planets = planets;
};

console.log(this.planets);

module.exports = SolarSystem;
