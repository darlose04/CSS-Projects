// UI Variables for New Day
let newDayButton = document.querySelector(".new-day");
let saveDayButton = document.querySelector(".save-day");
let weekDiv = document.querySelector(".week");

// UI Variables for Lifts Table
let newLiftButton = document.querySelector(".new-lift");
let saveLiftsButton = document.querySelector(".save-lifts");
let exercisesTable = document.querySelector(".exercises-table");

// UI Variables for Results Table
let newRowButton = document.querySelector(".new-row");
let resultsButton = document.querySelector(".results");
let resultsTable = document.querySelector(".results-table");

// Event Listeners
loadEventListeners();

function loadEventListeners() {}

// add new exercises and results tables to page
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
