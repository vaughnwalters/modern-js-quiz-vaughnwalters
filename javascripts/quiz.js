"use strict";

let Model = require("./model");
let $ = require("jquery");

// document ready
$(() => {

  let newRobotOne = null;
  let newRobotTwo = null;

  // build robot one
  $("#selectRobotOne").change(() => {
    let R1Select = $("#selectRobotOne").val();
    let p1Name = $("#playerOneName").val();
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
    $("#r1Div").html(`${newRobotOne.name}\'s heath is ${newRobotOne.health} and attack is ${newRobotOne.attack}`);
  });


  // build robot two
  // why isn't looper bipedal working to be selected?
  $("#selectRobotTwo").change(() => {
    let R2Select = $("#selectRobotTwo").val();
    let p2Name = $("#playerTwoName").val();
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
    $("#r2Div").html(`${newRobotTwo.name}\'s heath is ${newRobotTwo.health} and attack is ${newRobotTwo.attack}`);
  });

  $("#attackBtn").click(() => {
    fight();
    console.log("fight button clicked");
  });

  function fight() {
    newRobotOne.health = newRobotOne.health - newRobotTwo.attack;
      $("#r1Div").html(`${newRobotOne.name}\'s heath is ${newRobotOne.health} and attack is ${newRobotOne.attack}`);
    if (newRobotOne.health < 1) {
      console.log("Robot one is dead");
      robotOneDead();
    } else { 
      newRobotTwo.health = newRobotTwo.health - newRobotOne.attack;
        $("#r2Div").html(`${newRobotTwo.name}\'s heath is ${newRobotTwo.health} and attack is ${newRobotTwo.attack}`);
      if (newRobotTwo.health < 1) {
        console.log("Robot two is dead");
      }
    }
  }

  function robotOneDead () {
    $("#outputDiv").html(`${newRobotTwo.name} the ${newRobotTwo.type} ${newRobotTwo.model} defeated ${newRobotOne.name} the ${newRobotOne.type} ${newRobotOne.model} with its ${newRobotTwo.weapon}`);
  }

  function robotTwoDead () {
    $("#outputDiv").html(`${robotOneDead.name} the ${robotOneDead.type} ${robotOneDead.model} defeated ${newRobotTwo.name} the ${newRobotTwo.type} ${newRobotTwo.model} with its ${robotOneDead.weapon}`);
  }


});