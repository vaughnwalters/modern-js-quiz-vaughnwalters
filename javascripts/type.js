"use strict";

const Robot = require("./robot"); 

function Drone() {
  this.health += Math.floor(Math.random() * (30 - 15) + 15);
  this.attack += Math.floor(Math.random() * (20 - 5) + 5);
  this.type = "Drone";
}

Drone.prototype = new Robot.Robot();

function Bipedal() {
  this.health += Math.floor(Math.random() * (35 - 10) + 10);
  this.attack += Math.floor(Math.random() * (20 - 10) + 10);
  this.type = "Bipedal";
}

Bipedal.prototype = new Robot.Robot();

function ATV() {
  this.health += Math.floor(Math.random() * (25 - 17) + 17);
  this.attack += Math.floor(Math.random() * (15 - 5) + 5);
  this.type = "ATV";
}

ATV.prototype = new Robot.Robot();

module.exports = {Drone, Bipedal, ATV};
