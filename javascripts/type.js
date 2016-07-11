"use strict";

let Robot = require("./robot"); 

function Drone() {
  this.type = "Drone";
}

Drone.prototype = new Robot.Robot();

function Bipedal() {
  this.type = "Bipedal";
}

Bipedal.prototype = new Robot.Robot();

function ATV() {
  this.type = "ATV";
}

ATV.prototype = new Robot.Robot();

console.log("ATV", ATV);

module.exports = {Drone, Bipedal, ATV};
