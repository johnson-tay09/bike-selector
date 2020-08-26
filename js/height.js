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
  linkElement.setAttribute("href", "../pages/budget.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
}

function mediumClick(event) {
  event.preventDefault();
  yourBike.size = "Medium";
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem("bike", stringBike);
  var linkElement = document.createElement("a");
  linkElement.setAttribute("href", "../pages/budget.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
}

function largeClick(event) {
  event.preventDefault();
  yourBike.size = "Large";
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem("bike", stringBike);
  var linkElement = document.createElement("a");
  linkElement.setAttribute("href", "../pages/budget.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
}

getStoredBike();
sizeSmall.addEventListener("click", smallClick);
sizeMedium.addEventListener("click", mediumClick);
sizeLarge.addEventListener("click", largeClick);
