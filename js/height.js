"use strict";

var sizeSmall = document.getElementById("small");
var sizeMedium = document.getElementById("medium");
var sizeLarge = document.getElementById("large");
var link = document.getElementById("link");

var yourBike = {};

function getStoredBike() {
  var parsedBike = JSON.parse(localStorage.getItem("bike"));
  yourBike = parsedBike;
}
function smallClick(event) {
  event.preventDefault();
  yourBike.size = "Small";
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem("bike", stringBike);
  var linkElement = document.createElement("a");
  linkElement.setAttribute("class", "nextLink");
  linkElement.setAttribute("href", "../pages/budget.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
  //remove img and replace with selected version of image
  var imageElement = document.getElementById("smallOption");
  //delete child image
  sizeSmall.removeChild(imageElement);
  //create replacement image
  var newImage = document.createElement("img");
  newImage.setAttribute("src", "../img/height-budget/small-size.jpg");
  newImage.setAttribute("alt", "small size");
  sizeSmall.appendChild(newImage);
}

function mediumClick(event) {
  event.preventDefault();
  yourBike.size = "Medium";
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem("bike", stringBike);
  var linkElement = document.createElement("a");
  linkElement.setAttribute("class", "nextLink");
  linkElement.setAttribute("href", "../pages/budget.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
  //remove img and replace with selected version of image
  var imageElement = document.getElementById("mediumOption");
  //delete child image
  sizeMedium.removeChild(imageElement);
  //create replacement image
  var newImage = document.createElement("img");
  newImage.setAttribute("src", "../img/height-budget/medium-size.jpg");
  newImage.setAttribute("alt", "medium size");
  sizeMedium.appendChild(newImage);
}

function largeClick(event) {
  event.preventDefault();
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem("bike", stringBike);
  var linkElement = document.createElement("a");
  linkElement.setAttribute("class", "nextLink");
  linkElement.setAttribute("href", "../pages/budget.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
  //remove img and replace with selected version of image
  var imageElement = document.getElementById("largeOption");
  //delete child image
  sizeLarge.removeChild(imageElement);
  //create replacement image
  var newImage = document.createElement("img");
  newImage.setAttribute("src", "../img/height-budget/large-size.jpg");
  newImage.setAttribute("alt", "large size");
  sizeLarge.appendChild(newImage);
}

getStoredBike();
sizeSmall.addEventListener("click", smallClick);
sizeMedium.addEventListener("click", mediumClick);
sizeLarge.addEventListener("click", largeClick);
