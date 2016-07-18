"use strict";

function Robot() {
  this.name = null;
  this.health = Math.floor(Math.random() * (80 - 60) + 60);
  this.attack = Math.floor(Math.random() * (10 - 5) + 5);
  this.type = null;
  this.model = null;
}

module.exports = {Robot};