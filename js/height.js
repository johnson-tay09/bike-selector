<<<<<<< HEAD
'use strict'
=======
'use strict';

>>>>>>> 35eef91ffc9a6361f8f9050d3a53d27550aedcdc
var sizeSmall = document.getElementById('small');
var sizeMedium = document.getElementById('medium');
var sizeLarge = document.getElementById('large');
var link = document.getElementById('link');

<<<<<<< HEAD
var yourBike = {}
=======
var yourBike = {};
>>>>>>> 35eef91ffc9a6361f8f9050d3a53d27550aedcdc

function getStoredBike() {
  var parsedBike = JSON.parse(localStorage.getItem('bike'));
  yourBike = parsedBike;
}

function smallClick(event) {
  event.preventDefault();
  yourBike.size = 'Small';
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem('bike', stringBike);
  var linkElement = document.createElement('a');
  linkElement.setAttribute('href', "../pages/budget.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
}

function mediumClick(event) {
  event.preventDefault();
  yourBike.size = 'Medium';
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem('bike', stringBike);
  var linkElement = document.createElement('a');
  linkElement.setAttribute('href', "../pages/budget.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
}

function largeClick(event) {
<<<<<<< HEAD
=======
  event.preventDefault();
>>>>>>> 35eef91ffc9a6361f8f9050d3a53d27550aedcdc
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem('bike', stringBike);
  var linkElement = document.createElement('a');
  linkElement.setAttribute('href', "../pages/budget.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
}

getStoredBike();
sizeSmall.addEventListener('click', smallClick);
sizeMedium.addEventListener('click', mediumClick);
sizeLarge.addEventListener('click', largeClick);
