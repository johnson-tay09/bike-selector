'use strict';

var downhill = document.getElementById('downhill');
var enduro = document.getElementById('enduro');
var crossCountry = document.getElementById('crosscountry');
var link = document.getElementById('link');

var yourBike = {}

function getStoredBike() {
  var parsedBike = JSON.parse(localStorage.getItem('bike'));
  yourBike = parsedBike;
}

function downhillClick(event) {
  event.preventDefault();
  yourBike.option = 'dhbike.jpg';
  yourBike.description = "downhill lorem ipsum ";
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem('bike', stringBike);
  var linkElement = document.createElement('a');
  linkElement.setAttribute('href', "../pages/height.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
}
downhill.addEventListener('click', downhillClick);

function enduroClick(event) {
  event.preventDefault();
  yourBike.option = 'enduro.jpg';
  yourBike.description = "enduro lorem ipsum ";
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem('bike', stringBike);
  var linkElement = document.createElement('a');
  linkElement.setAttribute('href', "../pages/height.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
}
enduro.addEventListener('click', enduroClick);

function crossCountryClick(event) {
  event.preventDefault();
  yourBike.option = 'xcmtb.jpg';
  yourBike.description = "cross country lorem ipsum ";
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem('bike', stringBike);
  var linkElement = document.createElement('a');
  linkElement.setAttribute('href', "../pages/height.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
}
crossCountry.addEventListener('click', crossCountryClick);

getStoredBike();



