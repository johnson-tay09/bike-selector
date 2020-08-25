'use strict'
// parent element for images
var imageContainer = document.getElementById('bike-container');
//parent element for data
var dataContainer = document.getElementById('data-container');
//parent element for graph
var graphContainer = document.getElementById('graph-container');
// array to store bike object instances
var bikeArray = [];
//constructor to create bike object instances
function Bike(terrain, option,){
    this.terrain = terrain;
    this.option = option;
    this.height = 0;
    this.budget = 0;
    // this.alt = alt;
    this.clicks = 0;
    bikeArray.push(this);
  }

    new Bike('mountain', 'Downhill');
    new Bike('mountain', 'All Mountain');
    new Bike('mountain', 'Cross Country');
    new Bike('road', 'Gravel');
    new Bike('road', 'Race');
    new Bike('road', 'Touring');
    new Bike('comfort', 'Cruiser'); 
    new Bike('comfort', 'Hybrid');
    new Bike('comfort', 'Commuter');
 
 //callback function for our event listener
function callbackClick(event){
    //variable to identify alt value of the current target
    var idValue = event.target.id;
    // loop through my array until I find the alt that matches my alt
    for(var i=0; i<bikeArray.length; i++){
      //if target alt value matches the array[i] alt value then increase array[i] clicks value.
      if(idValue === BikeArray[i].option){
        BikeArray[i].clicks++;
      }
    }
    }
  // wait for a click then run the callback function
  mountain.addEventListener('click', callbackClick);
  road.addEventListener('click', callbackClick);
  comfort.addEventListener('click', callbackClick);
  //function call to populate our bike array
 