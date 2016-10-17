// create var to hold value of return object
let robotOne = chooseRobot(R1Select);

function chooseRobot(robot) {
  if (robot === "stealthDrone") {
    newRobot = new Model.Stealth();
    newWeapon = new Weapon.StealthWeapon();
  } else if (robot === "tacoDrone") {
    newRobot = new Model.Taco();
    newWeapon = new Weapon.TacoWeapon();
  } else if (robot === "stomperBipedal") {
    newRobot = new Model.Stomper();
    newWeapon = new Weapon.StomperWeapon();
  } else if (robot === "looperBipedal") {
    newRobot = new Model.Looper();
    newWeapon = new Weapon.LooperWeapon();
  } else if (robot === "redneckATV") {
    newRobot = new Model.Redneck();
    newWeapon = new Weapon.RedneckWeapon();
  } else if (robot === "scooterATV") {
    newRobot = new Model.Scooter();
    newWeapon = new Weapon.ScooterWeapon();
  }
  return {newRobot, newWeapon}
}