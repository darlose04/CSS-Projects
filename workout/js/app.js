// Define UI variables
let newDayButton = document.querySelector(".new-day");
let weekDiv = document.querySelector(".week");

loadEventListeners();

function loadEventListeners() {
  // add new day tables
  document.addEventListener('click', addNewDay);
}

function addNewDay(e) {
  // create div element
  let div = document.createElement("div");
  // add class
  div.className = "day";
  // add div innerHTML
  div.innerHTML = '<table class="exercises"><thead><tr><th class="muscle-group"><input class="muscle-value" type="text"></th><th class="new-lift"><button class="button">New Lift</button></th><th class="save-lifts"><button class="button">Save</button></th></tr></thead><thead><tr><th>Exercises</th><th>Sets</th><th>Reps</th></tr></thead><tbody class="exercises-table"></tbody></table><table class="results"><thead><tr><th class="date"><input type="date"></th><th id="new-row"><button class="button">New Row</button></th><th id="results"><button class="button">Save</button></th></tr></thead><thead><tr><th>Weight</th><th>Sets</th><th>Reps</th></tr></thead><tbody class="results-table"></tbody></table>'

  // append div to div.week
  weekDiv.appendChild(div);
}