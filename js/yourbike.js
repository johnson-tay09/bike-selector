"use strict";

var bikeArray = [];
var yourImage = document.getElementById("image-container");
var yourContent = document.getElementById("content-container");

var yourBike = {};
function getStoredBike() {
  //parse back to js from JSON
  var parsedBike = JSON.parse(localStorage.getItem("bike"));
  //make product array = stored data to keep running total.
  yourBike = parsedBike;
  bikeArray.push(yourBike);
  // console.log(bikeArray);
}
function renderImage() {
  var imageElement = document.createElement("img");
  //set the attributes of the image
  imageElement.setAttribute("src", `../img/bikes/${yourBike.option}`);
  imageElement.setAttribute("alt", yourBike.option);
  //append to parent
  yourImage.appendChild(imageElement);
}
function renderContent() {
  var sizeElement = document.createElement("p");
  //set the attributes of the image
  sizeElement.textContent = `We recommend a size ${yourBike.size} based on your height.`;

  var descriptionElement = document.createElement("p");

  descriptionElement.textContent = yourBike.description;

  var trimElement = document.createElement("p");

  trimElement.textContent = yourBike.trim;

  //append to parent
  yourContent.appendChild(sizeElement);
  yourContent.appendChild(descriptionElement);
  yourContent.appendChild(trimElement);
}
function storeBikeData() {
  if (sessionStorage.getItem("bikeArray") === null) {
    var stringBikeArray = JSON.stringify(bikeArray);
    console.log(stringBikeArray);
    sessionStorage.setItem("bikeArray", stringBikeArray);
  } else {
    var parsedBikeArray = JSON.parse(sessionStorage.getItem("bikeArray"));
    bikeArray = parsedBikeArray;
    var stringBikeArray = JSON.stringify(bikeArray);
    sessionStorage.setItem("bikeArray", stringBikeArray);
  }

  // function checkLocalStorage() {
  //   if (localStorage.getItem('products') === null) {
  //     //if empty run new products to create object instances
  //     newProducts();
  //   } else {
  //        //get the products from storage
  //        var getProducts = localStorage.getItem('products');
  //        //parse back to js from JSON
  //         var parsedProductsArray = JSON.parse(getProducts);
  //         //make product array = stored data to keep running total.
  //         productArray = parsedProductsArray;
}

getStoredBike();
storeBikeData();
renderImage();
renderContent();
