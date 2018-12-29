// Define UI variables
const muscleGroup = document.querySelector(".muscle-group");
const newLiftButton = document.querySelector("#new-lift");
const saveLiftsButton = document.querySelector("#save-lifts");
const exercisesTable = document.querySelector(".exercises-table");

loadEventListeners();

// load all event listeners
function loadEventListeners() {
  // DOM load event
  document.addEventListener("DOMContentLoaded", getLifts);
  // add/save muscle group ...

  // add new lift event
  newLiftButton.addEventListener("click", addLift);
  // add lifts to local storage event
  saveLiftsButton.addEventListener("click", saveLift);
}

function storeLiftInLocalStorage(lift) {
  let lifts;
  if (localStorage.getItem("lifts") === null) {
    lifts = [];
  } else {
    lifts = JSON.parse(localStorage.getItem("lifts"));
  }

  lifts.push(lift);

  localStorage.setItem("lifts", JSON.stringify(lifts));
}