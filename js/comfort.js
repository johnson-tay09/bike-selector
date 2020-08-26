'use strict'

var cruiser = document.getElementById('cruiser');
var commuter = document.getElementById('commuter');
var hybrid = document.getElementById('hybrid');
var link = document.getElementById('link');

var yourBike = {}

function getStoredBike() {
  var parsedBike = JSON.parse(localStorage.getItem('bike'));
  yourBike = parsedBike;
}

function cruiserClick(event) {
  event.preventDefault();
  yourBike.option = 'cruiser.jpg';
  yourBike.description = "cruiser lorem ipsum "
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem('bike', stringBike);
  var linkElement = document.createElement('a');
  linkElement.setAttribute('href', "../pages/height.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
}

function commuterClick(event) {
  event.preventDefault();
  yourBike.option = 'commuter.jpg';
  yourBike.description = "commuter lorem ipsum "
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem('bike', stringBike);
  var linkElement = document.createElement('a');
  linkElement.setAttribute('href', "../pages/height.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
}

function hybridClick(event) {
  event.preventDefault();
  yourBike.option = 'hybrid.jpg';
  yourBike.description = "hybrid lorem ipsum "
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem('bike', stringBike);
  var linkElement = document.createElement('a');
  linkElement.setAttribute('href', "../pages/height.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
}

getStoredBike();
cruiser.addEventListener('click', cruiserClick);
commuter.addEventListener('click', commuterClick);
hybrid.addEventListener('click', hybridClick);