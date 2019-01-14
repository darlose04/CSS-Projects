// UI Variables for New Day
let newDayButton = document.querySelector(".new-day");
let saveDayButton = document.querySelector(".save-day");
let weekDiv = document.querySelector(".week");

// Event Listeners
loadEventListeners();

function loadEventListeners() {
  // DOM load event
  document.addEventListener("DOMContentLoaded", getDays);
  // adds new tables to page with click of button
  newDayButton.addEventListener("click", () => {
    addNewDay();
    tables();
  });

  saveDayButton.addEventListener("click", putDayInLocalStorage);
}

// get the tables from local storage
function getDays() {
  let days;
  if (localStorage.getItem("days") === null) {
    days = [];
  } else {
    days = JSON.parse(localStorage.getItem("days"));

    for (let i = 0; i < days.length; i++) {
      let div = document.createElement("div");
      div.innerHTML = days[i];
      weekDiv.appendChild(div);
    }
  }
}

// add new exercises and results tables to page  (through event listener click)
function addNewDay(e) {
  // create div element
  let div = document.createElement("div");
  // add class
  div.className = "day";
  // add div innerHTML
  div.innerHTML =
    '<table class="exercises"><thead><tr><th class="muscle-group"><input class="muscle-value" type="text"></th><th class="new-lift"><button class="button">New Lift</button></th><th class="save-lifts"><button class="button">Save</button></th></tr></thead><thead><tr><th>Exercises</th><th>Sets</th><th>Reps</th></tr></thead><tbody class="exercises-table"></tbody></table><table class="results"><thead><tr><th class="date"><input type="date"></th><th class="new-row"><button class="button">New Row</button></th><th class="results"><button class="button">Save</button></th></tr></thead><thead><tr><th>Weight</th><th>Sets</th><th>Reps</th></tr></thead><tbody class="results-table"></tbody></table>';

  // append div to div.week
  weekDiv.appendChild(div);

  // e.preventDefault();
}

// this function actually puts the day in local storage when the 'Save Day' button is clicked
function putDayInLocalStorage(e) {
  //create var for day value (the html table)
  let div = document.createElement("div");
  // add class name
  div.className = "day";
  // add div inner html
  div.innerHTML =
    '<table class="exercises"><thead><tr><th class="muscle-group"><input class="muscle-value" type="text"></th></tr></thead><thead><tr><th>Exercises</th><th>Sets</th><th>Reps</th></tr></thead><tbody></tbody></table><table class="results"><thead><tr><th class="date"><input type="date"></th></tr></thead><thead><tr><th>Weight</th><th>Sets</th><th>Reps</th></tr></thead><tbody></tbody></table>';

  saveDaysInLocalStorage(div.innerHTML);

  e.preventDefault();
}

// save the days in local storage
function saveDaysInLocalStorage(day) {
  let days;
  if (localStorage.getItem("days") === null) {
    days = [];
  } else {
    days = JSON.parse(localStorage.getItem("days"));
  }

  days.push(day);

  localStorage.setItem("days", JSON.stringify(days));
}

/*
Function that contains all the JS for the table buttons. Need to do this in order to 
prevent JS errors when clicking 'Add New Day' button. Otherwise, the JS loads before the
HTML, which causes errors since the JS is trying to manipulate HTML elements that don't exist yet.
*/
function tables() {
  // UI Variables for Lifts Table
  let newLiftButton = document.querySelector(".new-lift");
  let saveLiftsButton = document.querySelector(".save-lifts");
  let exercisesTable = document.querySelector(".exercises-table");

  // UI Variables for Results Table
  let newRowButton = document.querySelector(".new-row");
  let resultsButton = document.querySelector(".results");
  let resultsTable = document.querySelector(".results-table");

  // load event listeners for table buttons
  loadTableEventListeners();

  // event listeners for buttons in tables
  function loadTableEventListeners() {
    // add new row to exercises table
    newLiftButton.addEventListener("click", addLift);
    // save lifts inputs in local storage
    saveLiftsButton.addEventListener("click", saveLift);
    // save muscle group description in local storage
    saveLiftsButton.addEventListener("click", addMuscle);

    // add new row to results table
    newRowButton.addEventListener("click", addRow);
  }

  // ==================================================================================
  // The below JS is for the exercises table
  // ==================================================================================

  // add new lift row to table.exercises
  function addLift(e) {
    // create tr element
    let tr = document.createElement("tr");
    // add tr inner html
    tr.innerHTML =
      "<td><input class='exercise-input' type='text'></td><td><input class='exercise-input' type='text'></td><td><input class='exercise-input' type='text'></td>";
    // append tr to tbody parent (exercises table)
    exercisesTable.appendChild(tr);

    e.preventDefault();
  }

  // save inputs in exercises/lift table to local storage
  function saveLift(e) {
    // create variable for input values
    const inputs = document.querySelectorAll(".exercise-input");
    // store in local storage
    for (let i = 0; i < inputs.length; i++) {
      storeLiftInLocalStorage(inputs[i].value);
    }

    e.preventDefault();
  }

  // store lifts in local storage
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

  // add muscle group description and put it in local storage
  function addMuscle(e) {
    // create variable for muscle group value
    const muscleGroup = document.querySelector(".muscle-value");
    storeMuscleInLocalStorage(muscleGroup.value);

    e.preventDefault();
  }

  // store muscle group description in local storage
  function storeMuscleInLocalStorage(muscle) {
    let muscles;
    if (localStorage.getItem("muscles") === null) {
      muscles = [];
    } else {
      muscles = JSON.parse(localStorage.getItem("muscles"));
    }

    muscles.push(muscle);

    localStorage.setItem("muscles", JSON.stringify(muscles));
  }

  // ==================================================================================
  // The below JS is for the results table
  // ==================================================================================

  // add new results row to table.results
  function addRow(e) {
    // create tr element
    const tr = document.createElement("tr");
    // add tr inner html
    tr.innerHTML =
      "<td><input class='result-input' type='text'></td><td><input class='result-input' type='text'></td><td><input class='result-input' type='text'></td>";
    // append tr to tbody parent
    resultsTable.appendChild(tr);

    e.preventDefault();
  }

  // Add results
  function addResult(e) {
    // create variable for input values
    const inputs = document.querySelectorAll(".result-input");
    // store in local storage
    for (let i = 0; i < inputs.length; i++) {
      storeResultInLocalStorage(inputs[i].value);
    }

    e.preventDefault();
  }

  // store results from workout in local storage
  function storeResultInLocalStorage(result) {
    let results;
    if (localStorage.getItem("results") === null) {
      results = [];
    } else {
      results = JSON.parse(localStorage.getItem("results"));
    }

    results.push(result);

    localStorage.setItem("results", JSON.stringify(results));
  }

  // add date and put it in local storage when save button is clicked
  function addDate(e) {
    // create variable for date value
    const liftDate = document.querySelector("input[type='date']");
    saveDateInLocalStorage(liftDate.value);

    e.preventDefault();
  }

  // save the date of the workout in local storage
  function saveDateInLocalStorage(date) {
    let dates;
    if (localStorage.getItem("dates") === null) {
      dates = [];
    } else {
      dates = JSON.parse(localStorage.getItem("dates"));
    }

    dates.push(date);

    localStorage.setItem("dates", JSON.stringify(dates));
  }
}
