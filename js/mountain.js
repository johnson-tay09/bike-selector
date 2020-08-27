"use strict";

var downhill = document.getElementById("downhill");
var enduro = document.getElementById("enduro");
var crossCountry = document.getElementById("crosscountry");
var link = document.getElementById("link");

var yourBike = {};

function getStoredBike() {
  var parsedBike = JSON.parse(localStorage.getItem("bike"));
  yourBike = parsedBike;
}

function downhillClick(event) {
  event.preventDefault();
  yourBike.option = "dhbikeSIL.jpg";
  yourBike.title = "Downhill Bike";
  yourBike.description =
    "A downhill bike is a full suspension bicycle designed for downhill cycling on particularly steep, technical trails. Unlike a typical mountain bike, durability and stability are the most important design features, compared to lighter, more versatile cross-country bikes. ";
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem("bike", stringBike);
  var linkElement = document.createElement("a");
  linkElement.setAttribute("class", "nextLink");
  linkElement.setAttribute("href", "../pages/height.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
  //remove img and replace with selected version of image
  var imageElement = document.getElementById("downhillOption");
  //delete child image
  downhill.removeChild(imageElement);
  //create replacement image
  var newImage = document.createElement("img");
  newImage.setAttribute("src", "../img/bike-option/downhill-option.jpg");
  newImage.setAttribute("alt", "../img/bike-option/downhill-option.jpg");
  downhill.appendChild(newImage);
}
downhill.addEventListener("click", downhillClick);

function enduroClick(event) {
  event.preventDefault();
  yourBike.option = "enduroSIL.jpg";
  yourBike.title = "All-Mountain Bike";
  yourBike.description =
    "All-mountain bikes also known as trail bikes, are the workhorse category of mountain bikes. An all-mountain bike is designed to handle almost everything a mountain biker will run into on a full day of riding, including steep ascents, rough descents and all the unexpected discoveries that make mountain biking so great.";
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem("bike", stringBike);
  var linkElement = document.createElement("a");
  linkElement.setAttribute("class", "nextLink");
  linkElement.setAttribute("href", "../pages/height.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
  //remove img and replace with selected version of image
  var imageElement = document.getElementById("enduroOption");
  //delete child image
  enduro.removeChild(imageElement);
  //create replacement image
  var newImage = document.createElement("img");
  newImage.setAttribute("src", "../img/bike-option/enduro-option.jpg");
  newImage.setAttribute("alt", "../img/bike-option/enduro-option.jpg");
  enduro.appendChild(newImage);
}
enduro.addEventListener("click", enduroClick);

function crossCountryClick(event) {
  event.preventDefault();
  yourBike.option = "xcmtbSIL.jpg";
  yourBike.title = "Cross Country Bike";
  yourBike.description =
    "Cross-country bikes are designed for riders who want to ride all day and cover vast distances. XC courses and trails consist of a mix of rough forest paths, single track, smooth fire roads, and even paved paths connecting other trails. ";
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem("bike", stringBike);
  var linkElement = document.createElement("a");
  linkElement.setAttribute("class", "nextLink");
  linkElement.setAttribute("href", "../pages/height.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
  //remove img and replace with selected version of image
  var imageElement = document.getElementById("xcOption");
  //delete child image
  crossCountry.removeChild(imageElement);
  //create replacement image
  var newImage = document.createElement("img");
  newImage.setAttribute("src", "../img/bike-option/crosscountry-option.jpg");
  newImage.setAttribute("alt", "../img/bike-option/crosscountry-option.jpg");
  crossCountry.appendChild(newImage);
}
crossCountry.addEventListener("click", crossCountryClick);

getStoredBike();
