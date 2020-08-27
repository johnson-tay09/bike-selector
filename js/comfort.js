"use strict";

var cruiser = document.getElementById("cruiser");
var commuter = document.getElementById("commuter");
var hybrid = document.getElementById("hybrid");
var link = document.getElementById("link");

var yourBike = {};

function getStoredBike() {
  var parsedBike = JSON.parse(localStorage.getItem("bike"));
  yourBike = parsedBike;
}

function cruiserClick(event) {
  event.preventDefault();
  yourBike.option = "cruiserSIL.jpg";
  yourBike.description =
    "Also known as a beach-cruiser, these  bicycles usually combines large tires, an upright seating posture, a single drive train, and straight forward heavy-duty construction with expressive styling. Cruisers are popular among casual bicyclists and vacationers because they are very stable and easy to ride, but their heavy weight and large tires tend to make them rather slow. Another common feature is their ability to be customized with accessories including fenders, lights and side bags. They are designed for use primarily on compact surfaces, moderate speeds/distances.";
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem("bike", stringBike);
  var linkElement = document.createElement("a");
  linkElement.setAttribute("class", "nextLink");
  linkElement.setAttribute("href", "../pages/height.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
}

function commuterClick(event) {
  event.preventDefault();
  yourBike.option = "commuterSIL.jpg";
  yourBike.description =
    "With a design built for durability and stability whether built from steel, aluminum, or carbon, the overall intention of a commuter bike is to handle any and all conditions every single work day, year after year. Some commuter bikes will have straight handle bars, some will have drop downs but all will sport beefy wheels and tires for the potholes, roots, rocks, junk, curbs, and general road mayhem commuters face every day on their way to the office. Like any good four-wheel-drive vehicle the commuter bike will safely and consistently get a rider where they need to go with the minimal amount of fuss. On weekends, the commuter bike can be your ticket to cruise through old city streets, gravel paths, through the neighborhood, or out on the bike path. They are versatile and strong. Commuter bikes will, by definition, be heavier and not as nimble as a road bike but with stout reliability and versatility it is a bike that can proudly go into the ring against the road bike and put up a good fight. ";
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem("bike", stringBike);
  var linkElement = document.createElement("a");
  linkElement.setAttribute("class", "nextLink");
  linkElement.setAttribute("href", "../pages/height.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
}

function hybridClick(event) {
  event.preventDefault();
  yourBike.option = "hybridSIL.jpg";
  yourBike.description =
    "Hybrid bikes are designed for comfort and ease of use. Their versatility will come in handy riding down at the marina or on the gravel path. Typically equipped with a drop-down top tube and a front suspension fork, these bikes are accessible to anyone. ";
  var stringBike = JSON.stringify(yourBike);
  localStorage.clear();
  localStorage.setItem("bike", stringBike);
  var linkElement = document.createElement("a");
  linkElement.setAttribute("class", "nextLink");
  linkElement.setAttribute("href", "../pages/height.html");
  linkElement.textContent = "Next";
  link.appendChild(linkElement);
}

getStoredBike();
cruiser.addEventListener("click", cruiserClick);
commuter.addEventListener("click", commuterClick);
hybrid.addEventListener("click", hybridClick);
