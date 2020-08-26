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
  yourBike.option = "roadRace.jpg";
  yourBike.description =
    "A performance race bike is designed for competitive road cycling, a sport governed by and according to the rules of the Union Cyclists Internationale (UCI). The front and back wheels are close together so the bicycle has quick handling. The Frame, forks and other assorted parts are typically made ot be aerodynamic adding to the overall speed of travel";
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem("bike", stringBike);
  var linkElement = document.createElement("a");
  linkElement.setAttribute("href", "../pages/height.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
}
race.addEventListener("click", raceClick);

function touringClick(event) {
  event.preventDefault();
  yourBike.option = "roadTouring.jpg";
  yourBike.description =
    "Designed for comfort on long rides, these bikes are sufficiently robust, ergonomic and capable of carrying heavy loads. Special features may include a long wheelbase (for ride comfort and to avoid pedal-to-luggage conflicts),frame materials that favor flexibility over rigidity (for ride comfort),heavy duty wheels (for load capacity), and multiple mounting points (for luggage rack,fenders, and bottle holders). ";
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem("bike", stringBike);
  var linkElement = document.createElement("a");
  linkElement.setAttribute("href", "../pages/height.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
}
touring.addEventListener("click", touringClick);

function gravelClick(event) {
  event.preventDefault();
  yourBike.option = "roadGravel.jpg";
  yourBike.description =
    "Drop-bar bikes with clearance for multiple tire sizes for a range of on/off road riding. Styles include gravel, bike-packing, and cyclocross. These are the most rugged road bikes on the market.";
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem("bike", stringBike);
  var linkElement = document.createElement("a");
  linkElement.setAttribute("href", "../pages/height.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
}
gravel.addEventListener("click", gravelClick);

getStoredBike();
