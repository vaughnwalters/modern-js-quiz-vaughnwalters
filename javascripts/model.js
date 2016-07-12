"use strict";

const Type = require("./type");

function Stealth() {
  this.health += Math.floor(Math.random() * (85 - 65) + 65);
  this.attack += Math.floor(Math.random() * (15 - 5) + 5);
  this.model = "Stealth";
}

Stealth.prototype = new Type.Drone();

function Taco() {
  this.health += Math.floor(Math.random() * (100 - 40) + 40);
  this.attack += Math.floor(Math.random() * (20 - 10) + 10);
  this.model = "Taco";
}

Taco.prototype = new Type.Drone();

function Stomper() {
  this.health += Math.floor(Math.random() * (90 - 50) + 50);
  this.attack += Math.floor(Math.random() * (20 - 10) + 10);
  this.model = "Stomper";
}

Stomper.prototype = new Type.Bipedal();

function Looper() {
  this.health += Math.floor(Math.random() * (85 - 60) + 60);
  this.attack += Math.floor(Math.random() * (25 - 15) + 15);
  this.model = "Looper";
}

Looper.prototype = new Type.Bipedal();

function Redneck() {
  this.health += Math.floor(Math.random() * (70 - 30) + 30);
  this.attack += Math.floor(Math.random() * (30 - 5) + 5);
  this.model = "Redneck";
}

Redneck.prototype = new Type.ATV();

function Scooter() {
  this.health += Math.floor(Math.random() * (80 - 60) + 60);
  this.attack += Math.floor(Math.random() * (15 - 10) + 10);
  this.model = "Scooter";
}

Scooter.prototype = new Type.ATV();

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