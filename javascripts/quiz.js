"use strict";

// let Robot = require("./robot"); 
// let Type = require("./type");
let Model = require("./model");
let $ = require("jquery");

$(document).ready(function(){

let newRobotOne = null;
let newRobotTwo = null;

// function buildExtraWeapon () {
//   $('.extraWeaponBtn').click(function () {
//     var inputName = $('#name').val();
//     NewHero = new EquipmentModule.ExtraWeapon();
//     NewHero.name = inputName;
//     resetHealth = NewHero.health;
//     addFightButton();
//     buildEnemy ();
//     Templates.heroTemplate(NewHero);
//     Templates.enemyTemplate(NewEnemy);
//     console.log(NewHero.race);
//   })
//  }
//  buildExtraWeapon();

$("#selectRobotOne").change(function() {
  let R1Select = $("#selectRobotOne").val();
  console.log(R1Select);
  let p1Name = $("#playerOneName").val();
  console.log("Robot1");
  console.log("p1Name", p1Name);
  if (R1Select === "stealthDrone") {
    console.log("AW YEAH STEALTHDRONE");
    let p1Stealth = new Model.Stealth();
    p1Stealth.name = p1Name;
    console.log(p1Stealth);

  } else if (R1Select === "tacoDrone") {
    console.log("AW YEAH TACODRONE");
    
  } else if (R1Select === "stomperBipedal") {
    console.log("AW YEAH STOMPER BIPEDAL");
  } else if (R1Select === "looperBipedal") {
    console.log("AW YEAH Looper BIPEDAL");
  } else if (R1Select === "redneckATV") {
    console.log("AW YEAH REDNECK ATV");
  } else if (R1Select === "scooterATV") {
    console.log("AW YEAH SCOOTER ATV");
  }
});

$("#selectRobotTwo").change(function() {
  let p2Name = $("#playerTwoName").val();
  console.log("Robot2");
  console.log("p2Name", p2Name);
  buildStealthDrone();
});

function buildStealthDrone () {
 let NewRobot = new Model.Stealth();
 console.log(NewRobot)
}

function buildTacoDrone () {
  
}

function buildStomperBipedal () {
  
}

function buildLooperBipedal () {
  
}

function buildRedneckATV () {
  
}

function buildStealthATV () {

}



}); 
