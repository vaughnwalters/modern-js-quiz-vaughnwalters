"use strict";

const Type = require("./type");

function Stealth() {
  this.health += Math.floor(Math.random() * (50 - 40) + 40);
  this.attack -= Math.floor(Math.random() * (10 - 5) + 5);
  this.model = "Stealth";
}

Stealth.prototype = new Type.Drone();

function Taco() {
  this.health += Math.floor(Math.random() * (12 - 8) + 8);
  this.attack += Math.floor(Math.random() * (10 - 5) + 5);
  this.model = "Taco";
}

Taco.prototype = new Type.Drone();

function Stomper() {
  this.health += Math.floor(Math.random() * (15 - 5) + 5);
  this.attack += Math.floor(Math.random() * (15 - 5) + 5);
  this.model = "Stomper";
}

Stomper.prototype = new Type.Bipedal();

function Looper() {
  this.health += Math.floor(Math.random() * (20 - 10) + 10);
  this.attack += Math.floor(Math.random() * (10 - 5) + 5);
  this.model = "Looper";
}

Looper.prototype = new Type.Bipedal();

function Redneck() {
  this.health += Math.floor(Math.random() * (15 - 8) + 8);
  this.attack += Math.floor(Math.random() * (12 - 5) + 5);
  this.model = "Redneck";
}

Redneck.prototype = new Type.ATV();

function Scooter() {
  this.health += Math.floor(Math.random() * (12 - 5) + 5);
  this.attack += Math.floor(Math.random() * (12 - 6) + 6);
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