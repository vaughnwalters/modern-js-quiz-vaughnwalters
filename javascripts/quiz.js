"use strict";

const Model = require("./model");
const $ = require("jquery");

// document ready
$(() => {

  let newRobotOne = null;
  let newRobotTwo = null;

  // build robot one
  $("#selectRobotOne").change(() => {
    const R1Select = $("#selectRobotOne").val();
    const p1Name = $("#playerOneName").val();
    if (R1Select === "stealthDrone") {
      newRobotOne = new Model.Stealth();
    } else if (R1Select === "tacoDrone") {
      newRobotOne = new Model.Taco();
    } else if (R1Select === "stomperBipedal") {
      newRobotOne = new Model.Stomper();
    } else if (R1Select === "looperBipedal") {
      newRobotOne = new Model.Looper();
    } else if (R1Select === "redneckATV") {
      newRobotOne = new Model.Redneck();
    } else if (R1Select === "scooterATV") {
      newRobotOne = new Model.Scooter();
    }
    newRobotOne.name = p1Name;
    if (p1Name === "") {
      alert ("Please enter a name for Player One");
    } else {
      $("#r1Div").html(`${newRobotOne.name}\'s heath is ${newRobotOne.health} and attack is ${newRobotOne.attack}`);
    }
  });


  // build robot two
  // why isn't looper bipedal working to be selected?
  $("#selectRobotTwo").change(() => {
    const R2Select = $("#selectRobotTwo").val();
    const p2Name = $("#playerTwoName").val();
    if (R2Select === "stealthDrone") {
      newRobotTwo = new Model.Stealth();
    } else if (R2Select === "tacoDrone") {
      newRobotTwo = new Model.Taco();
    } else if (R2Select === "stomperBipedal") {
      newRobotTwo = new Model.Stomper();
    } else if (R2Select === "looperBipedal") {
      newRobotTwo = new Model.Looper();
    } else if (R2Select === "redneckATV") {
      newRobotTwo = new Model.Redneck();
    } else if (R2Select === "scooterATV") {
      newRobotTwo = new Model.Scooter();
    }
    newRobotTwo.name = p2Name;
    if (p2Name === "") {
      alert("Please enter a name for player two.")
    } else {
    $("#r2Div").html(`${newRobotTwo.name}\'s heath is ${newRobotTwo.health} and attack is ${newRobotTwo.attack}`);
    };
  });

  $("#attackBtn").click(() => {
    fight();
  });

  function fight() {
    newRobotOne.health = newRobotOne.health - newRobotTwo.attack;
      $("#r1Div").html(`${newRobotOne.name}\'s heath is ${newRobotOne.health} and attack is ${newRobotOne.attack}`);
    if (newRobotOne.health < 1) {
      robotDead(newRobotTwo, newRobotOne);
    } else { 
      newRobotTwo.health = newRobotTwo.health - newRobotOne.attack;
        $("#r2Div").html(`${newRobotTwo.name}\'s heath is ${newRobotTwo.health} and attack is ${newRobotTwo.attack}`);
      if (newRobotTwo.health < 1) {
        robotDead(newRobotOne, newRobotTwo);
      }
    }
  }

  function robotDead (alive, dead) {
    $("#outputDiv").html(`${alive.name} the ${alive.model} ${alive.type} defeated ${dead.name} the ${dead.model} ${dead.type} with its ${alive.weapon}!`);
  }
});