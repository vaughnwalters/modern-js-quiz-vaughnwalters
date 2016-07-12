"use strict";

let Type = require("./type");

function Stealth() {
  this.health += Math.floor(Math.random() * (80 - 60) + 60);
  this.attack += Math.floor(Math.random() * (20 - 10) + 10);
  this.model = "Stealth";
  this.weapon = "power nukes"
}

Stealth.prototype = new Type.Drone();

function Taco() {
  this.health += Math.floor(Math.random() * (80 - 60) + 60);
  this.attack += Math.floor(Math.random() * (20 - 10) + 10);
  this.model = "Taco";
  this.weapon = "rancid salsa"
}

Taco.prototype = new Type.Drone();

function Stomper() {
  this.health += Math.floor(Math.random() * (80 - 60) + 60);
  this.attack += Math.floor(Math.random() * (20 - 10) + 10);
  this.model = "Stomper";
  this.weapon = "slick shoes";
}

Stomper.prototype = new Type.Bipedal();

function Looper() {
  this.health += Math.floor(Math.random() * (80 - 60) + 60);
  this.attack += Math.floor(Math.random() * (20 - 10) + 10);
  this.model = "Looper";
  this.weapon = "super loops";
}

Looper.prototype = new Type.Bipedal();

function Redneck() {
  this.health += Math.floor(Math.random() * (80 - 60) + 60);
  this.attack += Math.floor(Math.random() * (20 - 10) + 10);
  this.model = "Redneck";
  this.weapon = "skoal can";
}

Redneck.prototype = new Type.ATV();

function Scooter() {
  this.health += Math.floor(Math.random() * (80 - 60) + 60);
  this.attack += Math.floor(Math.random() * (20 - 10) + 10);
  this.model = "Scooter";
  this.weapon = "phat moves"
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