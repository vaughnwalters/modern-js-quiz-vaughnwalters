"use strict";

// has-a constructor function
function Weapon() {
  this.weapon = null;
}

// instantiations of the weapon constructor

function StealthWeapon () {
  this.weapon = "power nukes";
}

StealthWeapon.prototype = new Weapon();

function TacoWeapon () {
  this.weapon = "rancid salsa";
}

TacoWeapon.prototype = new Weapon();

function StomperWeapon () {
  this.weapon = "slick shoes";
}

StomperWeapon.prototype = new Weapon();

function LooperWeapon () {
  this.weapon = "super loops";
}

LooperWeapon.prototype = new Weapon();

function RedneckWeapon () {
  this.weapon = "skoal can";
}

RedneckWeapon.prototype = new Weapon();

function ScooterWeapon () {
  this.weapon = "phat moves";
}

ScooterWeapon.prototype = new Weapon();

module.exports = {
  StealthWeapon,
  TacoWeapon,
  StomperWeapon,
  LooperWeapon,
  RedneckWeapon,
  ScooterWeapon
}; 