"use strict";

let Type = require("./type");

function Stealth() {
  this.health += Math.floor(Math.random() * (80 - 60) + 60);
  this.attack += Math.floor(Math.random() * (20 - 10) + 10);
  this.model = "Stealth";
}

Stealth.prototype = new Type.Drone();
// let StealthTest = new Stealth();
// console.log("StealthTest", StealthTest);


function Taco() {
  this.health += Math.floor(Math.random() * (80 - 60) + 60);
  this.attack += Math.floor(Math.random() * (20 - 10) + 10);
  this.model = "Taco";
}

Taco.prototype = new Type.Drone();
// let TacoTest = new Taco();
// console.log("TacoTest", TacoTest);


function Stomper() {
  this.health += Math.floor(Math.random() * (80 - 60) + 60);
  this.attack += Math.floor(Math.random() * (20 - 10) + 10);
  this.model = "Stomper";
}

Stomper.prototype = new Type.Bipedal();
// let StomperTest = new Stomper();
// console.log("StomperTest", StomperTest);


function Looper() {
  this.health += Math.floor(Math.random() * (80 - 60) + 60);
  this.attack += Math.floor(Math.random() * (20 - 10) + 10);
  this.model = "Looper";
}

Looper.prototype = new Type.Bipedal();
// let LooperTest = new Looper();
// console.log("LooperTest", LooperTest);


function Redneck() {
  this.health += Math.floor(Math.random() * (80 - 60) + 60);
  this.attack += Math.floor(Math.random() * (20 - 10) + 10);
  this.model = "Redneck";
}

Redneck.prototype = new Type.ATV();
// let RedneckTest = new Redneck();
// console.log("RedneckTest", RedneckTest);


function Scooter() {
  this.health += Math.floor(Math.random() * (80 - 60) + 60);
  this.attack += Math.floor(Math.random() * (20 - 10) + 10);
  this.model = "Scooter";
}

Scooter.prototype = new Type.ATV();
let ScooterTest = new Scooter();
console.log("ScooterTest", ScooterTest);

module.exports = {
  Stealth,
  Taco,
  Stomper,
  Looper,
  Redneck,
  Scooter
};

// let Stealth2 = new Stealth();

// can't log a function!
// must assign function to a variable and then log variable

// console.log("Stealth", Stealth);
// console.log("Stealth", Stealth2); 