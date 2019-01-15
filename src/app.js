const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded.');
  const planetsDataModel = new SolarSystem(planetsData);
  // console.log(planetsDataModel.planets);
  planetsDataModel.bindEvents();

  const selectView = new SelectView();
  selectView.bindEvents();

});
