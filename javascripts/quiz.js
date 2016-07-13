"use strict";

const Model = require("./model");
const Weapon = require("./weapon");

// document ready
$(() => {

  let newRobotOne = null;
  let newRobotTwo = null;

  // build robot one
  $("#selectRobotOne").change(() => {
    const R1Select = $("#selectRobotOne").val();
    const p1Name = $("#playerOneName").val();
    let newR1Weapon;
    if (R1Select === "stealthDrone") {
      newRobotOne = new Model.Stealth();
      newR1Weapon = new Weapon.StealthWeapon();
    } else if (R1Select === "tacoDrone") {
      newRobotOne = new Model.Taco();
      newR1Weapon = new Weapon.TacoWeapon();
    } else if (R1Select === "stomperBipedal") {
      newRobotOne = new Model.Stomper();
      newR1Weapon = new Weapon.StomperWeapon();
    } else if (R1Select === "looperBipedal") {
      newRobotOne = new Model.Looper();
      newR1Weapon = new Weapon.LooperWeapon();
    } else if (R1Select === "redneckATV") {
      newRobotOne = new Model.Redneck();
      newR1Weapon = new Weapon.RedneckWeapon();
    } else if (R1Select === "scooterATV") {
      newRobotOne = new Model.Scooter();
      newR1Weapon = new Weapon.ScooterWeapon();
    }
    newRobotOne.weapon = newR1Weapon.weapon;
    newRobotOne.name = p1Name;
    if (p1Name === "") {
      alert ("Please enter a name for Player One");
    } else {
      $("#r1Div").html(`${newRobotOne.name}\'s heath is ${newRobotOne.health} and attack is ${newRobotOne.attack}`);
    }
  });

  // build robot two
  $("#selectRobotTwo").change(() => {
    const R2Select = $("#selectRobotTwo").val();
    const p2Name = $("#playerTwoName").val();
    let newR2Weapon;
    if (R2Select === "stealthDrone") {
      newRobotTwo = new Model.Stealth();
      newR2Weapon = new Weapon.StealthWeapon();
    } else if (R2Select === "tacoDrone") {
      newRobotTwo = new Model.Taco();
      newR2Weapon = new Weapon.TacoWeapon();
    } else if (R2Select === "stomperBipedal") {
      newRobotTwo = new Model.Stomper();
      newR2Weapon = new Weapon.StomperWeapon();
    } else if (R2Select === "looperBipedal") {
      newRobotTwo = new Model.Looper();
      newR2Weapon = new Weapon.LooperWeapon();
    } else if (R2Select === "redneckATV") {
      newRobotTwo = new Model.Redneck();
      newR2Weapon = new Weapon.RedneckWeapon();
    } else if (R2Select === "scooterATV") {
      newRobotTwo = new Model.Scooter();
      newR2Weapon = new Weapon.ScooterWeapon();
    }
    newRobotTwo.weapon = newR2Weapon.weapon;
    newRobotTwo.name = p2Name;
    if (p2Name === "") {
      alert("Please enter a name for player two.");
    } else {
    $("#r2Div").html(`${newRobotTwo.name}\'s heath is ${newRobotTwo.health} and attack is ${newRobotTwo.attack}`);
    }
  });

// fight button event 
  $("#attackBtn").click(() => {
    if ($("#playerOneName").val() === "" || $("#playerTwoName").val() === "" || newRobotOne === null || newRobotTwo === null) {
      alert("Enter a name and select a robot");
    } else {
    fight();
    }
  });

// fight function
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

// Robot dies string template
  function robotDead (alive, dead) {
    $("#outputDiv").html(`${alive.name} the ${alive.model} ${alive.type} defeated ${dead.name} the ${dead.model} ${dead.type} with its ${alive.weapon}!`);
  }

// enable selectors when name is typed in input
  $("#playerOneName").keyup(() => {
    if ($("#playerOneName").val() !== "") {
    $("#selectRobotOne").prop("disabled", false);
    } else if ($("#playerOneName").val() === "") {
    $("#selectRobotOne").prop("disabled", true);
    }
  });


  $("#playerTwoName").keyup(() => {
    if ($("#playerTwoName").val() !== "") {
    $("#selectRobotTwo").prop("disabled", false);
    } else if ($("#playerTwoName").val() === "") {
    $("#selectRobotTwo").prop("disabled", true);
    }
  });

// enable fight button when robot selections are made
  $("body").mouseover(() => {
    if($("#selectRobotTwo").val() !== "chooseOne" && 
    $("#selectRobotOne").val() !== "chooseOne") {
      $("#attackBtn").prop("disabled", false);
    }
  });

});