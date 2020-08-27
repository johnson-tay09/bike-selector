"use strict";

// parent element for images
var imageContainer = document.getElementById("bike-container");
//parent element for data
var dataContainer = document.getElementById("data-container");
var mountain = document.getElementById("mountain");
var road = document.getElementById("road");
var comfort = document.getElementById("comfort");
var link = document.getElementById("link");
// array to store bike objects
var bikeArray = [];
//bike object
var yourBike = {};
//  callback function for our event listener s
function mountainClick(event) {
  event.preventDefault();
  yourBike.terrain = "mountain";
  var stringBike = JSON.stringify(yourBike);
  //store products in products label
  localStorage.clear();
  localStorage.setItem("bike", stringBike);
  var linkElement = document.createElement("a");
  linkElement.setAttribute("class", "nextLink");
  linkElement.setAttribute("href", "pages/mountain.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
  //remove img and replace with selected version of image
  var imageElement = document.getElementById("homeMountain");
  //delete child image
  mountain.removeChild(imageElement);
  //create replacement image
  var newImage = document.createElement("img");
  newImage.setAttribute("src", "img/Mountain Bike.jpg");
  newImage.setAttribute("alt", "Mountain Biking");
  mountain.appendChild(newImage);
}
// wait for a click then run the callback function
mountain.addEventListener("click", mountainClick);

function roadClick(event) {
  event.preventDefault();
  yourBike.terrain = "road";
  var stringBike = JSON.stringify(yourBike);
  //store products in products label
  localStorage.clear();
  localStorage.setItem("bike", stringBike);
  var linkElement = document.createElement("a");
  linkElement.setAttribute("class", "nextLink");
  linkElement.setAttribute("href", "pages/road.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
  //remove img and replace with selected version of image
  var imageElement = document.getElementById("homeRoad");
  //delete child image
  road.removeChild(imageElement);
  //create replacement image
  var newImage = document.createElement("img");
  newImage.setAttribute("src", "img/Road Bike.jpg");
  newImage.setAttribute("alt", "Road Biking");
  road.appendChild(newImage);
}
// wait for a click then run the callback function
road.addEventListener("click", roadClick);
function comfortClick(event) {
  event.preventDefault();
  yourBike.terrain = "comfort";
  var stringBike = JSON.stringify(yourBike);
  //store products in products label
  localStorage.clear();
  localStorage.setItem("bike", stringBike);
  var linkElement = document.createElement("a");
  linkElement.setAttribute("class", "nextLink");
  linkElement.setAttribute("href", "pages/comfort.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
  //remove img and replace with selected version of image
  var imageElement = document.getElementById("homeComfort");
  //delete child image
  comfort.removeChild(imageElement);
  //create replacement image
  var newImage = document.createElement("img");
  newImage.setAttribute("src", "img/Commuter-Bike.jpg");
  newImage.setAttribute("alt", "Comfort Biking");
  comfort.appendChild(newImage);
}
// wait for a click then run the callback function
comfort.addEventListener("click", comfortClick);
