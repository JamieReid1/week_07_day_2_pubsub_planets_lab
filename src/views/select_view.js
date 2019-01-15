const PubSub = require('../helpers/pub_sub.js');


const SelectView = function() {


};

SelectView.prototype.bindEvents = function () {
  const planetsMenu = document.querySelector('.planets-menu');
  planetsMenu.addEventListener('click', (event) => {
    console.dir(event.target.id);
    const selectedPlanet = event.target.id;
    PubSub.publish('SelectView:planetSelected', selectedPlanet);
  })
};



module.exports = SelectView;
