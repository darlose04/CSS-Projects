// UI Variables for New Day
let newDayButton = document.querySelector(".new-day");
let saveDayButton = document.querySelector(".save-day");
let weekDiv = document.querySelector(".week");

// Event Listeners
loadEventListeners();

function loadEventListeners() {
  // adds new tables to page with click of button
  newDayButton.addEventListener("click", () => {
    addNewDay();
    tables();
  });
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
  }

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
}

