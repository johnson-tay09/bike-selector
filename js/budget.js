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
  yourBike.trim =
    "Bikes in this price range will have entry level components, basic frame materials and limited lifespans. For mountain bikes expect coil sprung front suspension and mechanical brakes.";
  var stringBike = JSON.stringify(yourBike);
  //store products in products label
  localStorage.clear();
  localStorage.setItem("bike", stringBike);
  var linkElement = document.createElement("a");
  linkElement.setAttribute("href", "../pages/yourbike.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
}

// wait for a click then run the callback function
lowBudget.addEventListener("click", lowBudgetClick);

function mediumBudgetClick(event) {
  event.preventDefault();
  yourBike.budget = "$1000-$2000";
  yourBike.trim =
    "Bikes in this price range will basic level performance components and start to have premium frame materials like carbon fiber or titanium. This price range yields quality bikes built to last just not the cutting edge tech some thirst for. For mountain bikes expect full suspension designs and hydraulic brakes.";
  var stringBike = JSON.stringify(yourBike);
  //store products in products label
  localStorage.clear();
  localStorage.setItem("bike", stringBike);
  var linkElement = document.createElement("a");
  linkElement.setAttribute("href", "../pages/yourbike.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
}

// wait for a click then run the callback function
mediumBudget.addEventListener("click", mediumBudgetClick);

function highBudgetClick(event) {
  event.preventDefault();
  yourBike.budget = "$3000-Beyond";
  yourBike.trim =
    "Bikes in this category will be outfitted in the latest and greatest forged components (increasing strength and saving weight). Their frames will be constructed of only the most advanced materials. The sky is the limit on high end bikes with the ultimate configurations coming equipped with wireless electronic shifting and ultra light weight assembly";
  var stringBike = JSON.stringify(yourBike);
  //store products in products label
  localStorage.clear();
  localStorage.setItem("bike", stringBike);
  var linkElement = document.createElement("a");
  linkElement.setAttribute("href", "../pages/yourbike.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
}

// wait for a click then run the callback function
highBudget.addEventListener("click", highBudgetClick);

getStoredBike();
