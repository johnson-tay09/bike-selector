"use strict";

var lowBudget = document.getElementById("low_budget");
var mediumBudget = document.getElementById("medium_budget");
var highBudget = document.getElementById("high_budget");
var link = document.getElementById("link");

var yourBike = {};
function getStoredBike() {
  //parse back to js from JSON
  var parsedBike = JSON.parse(localStorage.getItem("bike"));
  //make product array = stored data to keep running total.
  yourBike = parsedBike;
}

function lowBudgetClick(event) {
  event.preventDefault();
  yourBike.budget = "$500-$1000";
  yourBike.trim = "low trim lorem ipsum";
  var stringBike = JSON.stringify(yourBike);
  //store products in products label
  localStorage.clear();
  localStorage.setItem("bike", stringBike);
  var linkElement = document.createElement("a");
  linkElement.setAttribute("class", "nextLink");
  linkElement.setAttribute("href", "../pages/yourbike.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
}

// wait for a click then run the callback function
lowBudget.addEventListener("click", lowBudgetClick);

function mediumBudgetClick(event) {
  event.preventDefault();
  yourBike.budget = "$1000-$2000";
  yourBike.trim = "medium trim lorem ipsum";
  var stringBike = JSON.stringify(yourBike);
  //store products in products label
  localStorage.clear();
  localStorage.setItem("bike", stringBike);
  var linkElement = document.createElement("a");
  linkElement.setAttribute("class", "nextLink");
  linkElement.setAttribute("href", "../pages/yourbike.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
}

// wait for a click then run the callback function
mediumBudget.addEventListener("click", mediumBudgetClick);

function highBudgetClick(event) {
  event.preventDefault();
  yourBike.budget = "$3000-Beyond";
  yourBike.trim = "high trim lorem ipsum";
  var stringBike = JSON.stringify(yourBike);
  //store products in products label
  localStorage.clear();
  localStorage.setItem("bike", stringBike);
  var linkElement = document.createElement("a");
  linkElement.setAttribute("class", "nextLink");
  linkElement.setAttribute("href", "../pages/yourbike.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
}

// wait for a click then run the callback function
highBudget.addEventListener("click", highBudgetClick);

getStoredBike();
