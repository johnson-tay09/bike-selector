"use strict";

var race = document.getElementById("race");
var touring = document.getElementById("touring");
var gravel = document.getElementById("gravel");
var link = document.getElementById("link");

var yourBike = {};

function getStoredBike() {
  var parsedBike = JSON.parse(localStorage.getItem("bike"));
  yourBike = parsedBike;
}

function raceClick(event) {
  event.preventDefault();
  yourBike.option = "roadRaceSIL.jpg";
  yourBike.title = "Road Race Bike";
  yourBike.description =
    "A performance race bike is designed for competitive road cycling, a sport governed by and according to the rules of the Union Cyclists Internationale (UCI). The front and back wheels are close together so the bicycle has quick handling. The Frame, forks and other assorted parts are typically made ot be aerodynamic adding to the overall speed of travel. ";
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem("bike", stringBike);
  var linkElement = document.createElement("a");
  linkElement.setAttribute("class", "nextLink");
  linkElement.setAttribute("href", "../pages/height.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
  var imageElement = document.getElementById("roadRace");
  //delete child image
  race.removeChild(imageElement);
  //create replacement image
  var newImage = document.createElement("img");
  newImage.setAttribute("src", "../img/bike-option/race-option.jpg");
  newImage.setAttribute("alt", "race bike");
  newImage.setAttribute("width", "400px");
  newImage.setAttribute("height", "300px");
  race.appendChild(newImage);
}
race.addEventListener("click", raceClick);

function touringClick(event) {
  event.preventDefault();
  yourBike.option = "roadTouringSIL.jpg";
  yourBike.title = "Touring Bike";
  yourBike.description =
    "Designed for comfort on long rides, these bikes are sufficiently robust, ergonomic and capable of carrying heavy loads. Special features may include a long wheelbase (for ride comfort and to avoid pedal-to-luggage conflicts),frame materials that favor flexibility over rigidity (for ride comfort),heavy duty wheels (for load capacity), and multiple mounting points (for luggage rack,fenders, and bottle holders). ";
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem("bike", stringBike);
  var linkElement = document.createElement("a");
  linkElement.setAttribute("class", "nextLink");
  linkElement.setAttribute("href", "../pages/height.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
  var imageElement = document.getElementById("roadTouring");
  //delete child image
  touring.removeChild(imageElement);
  //create replacement image
  var newImage = document.createElement("img");
  newImage.setAttribute("src", "../img/bike-option/touring-option.jpg");
  newImage.setAttribute("alt", "touring bike");
  newImage.setAttribute("width", "400px");
  newImage.setAttribute("height", "300px");
  touring.appendChild(newImage);
}
touring.addEventListener("click", touringClick);

function gravelClick(event) {
  event.preventDefault();
  yourBike.option = "gravelbikeSIL.jpg";
  yourBike.title = "Gravel Bike";
  yourBike.description =
    "Drop-bar bikes with clearance for multiple tire sizes for a range of on/off road riding. Styles include gravel, bike-packing, and cyclocross. These are the most rugged road bikes on the market. ";
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem("bike", stringBike);
  var linkElement = document.createElement("a");
  linkElement.setAttribute("class", "nextLink");
  linkElement.setAttribute("href", "../pages/height.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
  var imageElement = document.getElementById("roadGravel");
  //delete child image
  gravel.removeChild(imageElement);
  //create replacement image
  var newImage = document.createElement("img");
  newImage.setAttribute("src", "../img/bike-option/gravel-option.jpg");
  newImage.setAttribute("alt", "gravel bike");
  newImage.setAttribute("width", "400px");
  newImage.setAttribute("height", "300px");
  gravel.appendChild(newImage);
}
gravel.addEventListener("click", gravelClick);

getStoredBike();
