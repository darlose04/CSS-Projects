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

// get exercises from local storage
function getLifts() {
  // loop through the values in local storage and apply them to each td

  let lifts;
  if (localStorage.getItem("lifts") === null) {
    lifts = [];
  } else {
    lifts = JSON.parse(localStorage.getItem("lifts"));

    // loop through tje exercises array taken from local storage
    for (let h = 0; h <= lifts.length; h++) {
      // counter variable for while loop
      let i = 0;
      let rows = [];

      // create tr element to hold tds for row values
      const tr = document.createElement("tr");
      exercisesTable.appendChild(tr);

      // use while loop and shift() to repeatedly push the first three exercise values into empty rows array
      while (i < 3) {
        rows.push(lifts.shift());
        i++;
      }

      // create a td inside the above tr for every value in rows (so three tds per tr)
      for (let k = 0; k < rows.length; k++) {
        let td = document.createElement("td");
        td.innerText = rows[k];
        tr.appendChild(td);
      }

      // set counter variable back to 0 and empty the rows array
      i = 0;
      rows = [];
    }
  }
}

// add new lift row to spreadsheet
function addLift(e) {
  // create tr element
  const tr = document.createElement("tr");
  // add tr inner html
  tr.innerHTML =
    "<td><input class='exercise-input' type='text'></td><td><input class='exercise-input' type='text'></td><td><input class='exercise-input' type='text'></td>";
  // append tr to tbody parent
  exercisesTable.appendChild(tr);

  e.preventDefault();
}

// save input exercises in local storage
function saveLift(e) {
  // create variable for input values
  const inputs = document.querySelectorAll(".exercise-input");
  // store in local storage
  for (let i = 0; i < inputs.length; i++) {
    storeLiftInLocalStorage(inputs[i].value);
  }

  e.preventDefault();
}

// store exercises in local storage
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
