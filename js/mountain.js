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
  yourBike.option = "dhbike.jpg";
  yourBike.description =
    "A downhill bike is a full suspension bicycle designed for downhill cycling on particularly steep, technical trails. Unlike a typical mountain bike, durability and stability are the most important design features, compared to lighter, more versatile cross-country bikes. ";
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem("bike", stringBike);
  var linkElement = document.createElement("a");
  linkElement.setAttribute("href", "../pages/height.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
}

function enduroClick(event) {
  event.preventDefault();
  yourBike.option = "enduro.jpg";
  yourBike.description =
    "All-mountain bikes also known as trail bikes, are the workhorse category of mountain bikes. An all-mountain bike is designed to handle almost everything a mountain biker will run into on a full day of riding, including steep ascents, rough descents and all the unexpected discoveries that make mountain biking so great.";
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem("bike", stringBike);
  var linkElement = document.createElement("a");
  linkElement.setAttribute("href", "../pages/height.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
}

function crossCountryClick(event) {
  event.preventDefault();
  yourBike.option = "xcmtb.jpg";
  yourBike.description =
    "Cross-country bikes are designed for riders who want to ride all day and cover vast distances. XC courses and trails consist of a mix of rough forest paths, single track, smooth fire roads, and even paved paths connecting other trails.";
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem("bike", stringBike);
  var linkElement = document.createElement("a");
  linkElement.setAttribute("href", "../pages/height.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
}

getStoredBike();
downhill.addEventListener("click", downhillClick);
enduro.addEventListener("click", enduroClick);
crossCountry.addEventListener("click", crossCountryClick);
