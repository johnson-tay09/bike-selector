"use strict";

var yourImage = document.getElementById("image-container");
var yourContent = document.getElementById("content-container");

var yourBike = {};
function getStoredBike() {
  //parse back to js from JSON
  var parsedBike = JSON.parse(localStorage.getItem("bike"));
  //make product array = stored data to keep running total.
  yourBike = parsedBike;
}
function renderImage() {
  var imageTitle = document.createElement("h2");
  //set text content for h2
  imageTitle.textContent = yourBike.title;
  var imageElement = document.createElement("img");
  //set the attributes of the image
  imageElement.setAttribute("src", `../img/bikes/${yourBike.option}`);
  imageElement.setAttribute("alt", yourBike.option);
  imageElement.setAttribute("height", 450);
  imageElement.setAttribute("width", 600);
  //append to parent
  yourImage.appendChild(imageTitle);
  yourImage.appendChild(imageElement);
}
function renderContent() {
  var goalElement = document.createElement("p");
  //set the attributes of the image
  goalElement.textContent = `${yourBike.name}, this bike will work perfectly for helping you achieve ${yourBike.goal}.`;

  var sizeElement = document.createElement("p");
  //set the attributes of the image
  sizeElement.textContent = `We recommend a size ${yourBike.size} based on your height.`;

  var descriptionElement = document.createElement("p");

  descriptionElement.textContent = yourBike.description;

  var trimElement = document.createElement("p");

  trimElement.textContent = yourBike.trim;

  //append to parent
  yourContent.appendChild(goalElement);
  yourContent.appendChild(sizeElement);
  yourContent.appendChild(descriptionElement);
  yourContent.appendChild(trimElement);
}
getStoredBike();
renderImage();
renderContent();
