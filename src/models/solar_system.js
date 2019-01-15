const PubSub = require('../helpers/pub_sub.js');


const SolarSystem = function(planets) {
  this.planets = planets;
};


SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:planetSelected', (event) => {
    const selectedPlanet = event.detail;
    this.displayPlanetInfo(selectedPlanet);
  });
};

SolarSystem.prototype.displayPlanetInfo = function (planetId) {
  const planetInfo = this.getPlanetByName(planetId);
  PubSub.publish('SolarSystem:planetInfo', planetInfo);
};

SolarSystem.prototype.getPlanetByName = function (planetName) {
  const foundPlanet = this.planets.find(planet => planet.name === planetName);
  return foundPlanet;
};


module.exports = SolarSystem;
