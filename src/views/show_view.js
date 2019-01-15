const PubSub = require('../helpers/pub_sub.js');

const ShowView = function () {


};


ShowView.prototype.bindEvents = function () {
  PubSub.subscribe('SolarSystem:planetInfo', (event) => {
    this.clearPlanet();
    this.displayPlanet(event.detail);
  });
};

ShowView.prototype.displayPlanet = function (planet) {
  const planetDetails = document.querySelector('.planet-details');
  const planetPropertyList = document.createElement('ul');
  const keys = Object.keys(planet);
  const keysWithoutImg = keys.splice(0, 7);
  keysWithoutImg.forEach(key => {
    const planetProperty = document.createElement('li');
    planetProperty.textContent = planet[key];
    planetPropertyList.appendChild(planetProperty);
  });
  const planetImage = document.createElement('img');
  planetImage.setAttribute('src', planet.image);
  planetImage.setAttribute('height', '200px');
  planetImage.setAttribute('width', '200px');
  planetPropertyList.appendChild(planetImage);
  planetDetails.appendChild(planetPropertyList);
};

// ShowView.prototype.displayPlanet = function (planet) {
//   this.clearPlanet();
//   const planetDetails = document.querySelector('.planet-details');
//   const planetPropertyList = document.createElement('ul');
//   const planetName = document.createElement('li');
//   planetName.textContent = planet.name;
//   planetPropertyList.appendChild(planetName);
//   const planetOrbit = document.createElement('li');
//   planetOrbit.textContent = planet.orbit;
//   planetPropertyList.appendChild(planetOrbit);
//   const planetDay = document.createElement('li');
//   planetDay.textContent = planet.day;
//   planetPropertyList.appendChild(planetDay);
//   const planetSurfaceArea = document.createElement('li');
//   planetSurfaceArea.textContent = planet.surfaceArea;
//   planetPropertyList.appendChild(planetSurfaceArea);
//   const planetVolume = document.createElement('li');
//   planetVolume.textContent = planet.volume;
//   planetPropertyList.appendChild(planetVolume);
//   const planetGravity = document.createElement('li');
//   planetGravity.textContent = planet.gravity;
//   planetPropertyList.appendChild(planetGravity);
//   const planetMoons = document.createElement('li');
//   planetMoons.textContent = planet.moons;
//   planetPropertyList.appendChild(planetMoons);
//   const planetImage = document.createElement('img');
//   planetImage.setAttribute('src', planet.image);
//   planetImage.setAttribute('height', '200px');
//   planetImage.setAttribute('width', '200px');
//   planetPropertyList.appendChild(planetImage);
//   planetDetails.appendChild(planetPropertyList);
// };

ShowView.prototype.clearPlanet = function () {
  const planetDetails = document.querySelector('.planet-details');
  planetDetails.innerHtml = '';
};


module.exports = ShowView;
