'use strict';

var race = document.getElementById('race');
var touring = document.getElementById('touring');
var gravel = document.getElementById('gravel');
var link = document.getElementById('link');

var yourBike = {}

function getStoredBike() {
  var parsedBike = JSON.parse(localStorage.getItem('bike'));
  yourBike = parsedBike;
}

function raceClick(event) {
  event.preventDefault();
  yourBike.option = 'roadRace.jpg';
  yourBike.description = "race option lorem ipsum ";
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem('bike', stringBike);
  var linkElement = document.createElement('a');
  linkElement.setAttribute('href', "../pages/height.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
}
race.addEventListener('click', raceClick);

function touringClick(event) {
  event.preventDefault();
  yourBike.option = 'roadTouring.jpg';
  yourBike.description = "touring option lorem ipsum ";
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem('bike', stringBike);
  var linkElement = document.createElement('a');
  linkElement.setAttribute('href', "../pages/height.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
}
touring.addEventListener('click', touringClick);

function gravelClick(event) {
  event.preventDefault();
  yourBike.option = 'roadGravel.jpg';
  yourBike.description = "gravel option lorem ipsum ";
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem('bike', stringBike);
  var linkElement = document.createElement('a');
  linkElement.setAttribute('href', "../pages/height.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
}
gravel.addEventListener('click', gravelClick);

getStoredBike();
