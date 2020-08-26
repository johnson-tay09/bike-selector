'use strict'

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
  linkElement.setAttribute("href", "pages/mountain.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
  //remove img and replace with selected version of image
  var imageElement = document.getElementById("homeMountain");
  //delete child image
  mountain.removeChild(imageElement);
  //create replacement image
  var newImage = document.createElement("img");
  newImage.setAttribute("src", "img/bikes/roadRace.jpg");
  newImage.setAttribute("alt", "img/bikes/roadRace.jpg");
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
  linkElement.setAttribute("href", "pages/road.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
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
  linkElement.setAttribute("href", "pages/comfort.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
}
// wait for a click then run the callback function
comfort.addEventListener("click", comfortClick);
//listen for click on image & change image to show selected
//callback function render link to next page and send selection to object
//create a function that listens for the user to select a terrain/option/size/budget
//create callback function that adds selection to the bike object
//store bike object in local storage
//pull bike object from local storage and render outputs
//show image of correct bike based on option
//show text with bike uses based on option
//show text with bike size based on height
//show text of features based on budget

