// Define UI variables
const newRowForm = document.querySelector("#new-row-form");
const resultsForm = document.querySelector("#result-form");
const resultsTable = document.querySelector(".results-table");
// const inputs = document.querySelectorAll('input[type="text"]');

loadEventListeners();

// load all event listeners
function loadEventListeners() {
  // add new row event
  newRowForm.addEventListener("submit", addRow);
  // add results to local storage
  resultsForm.addEventListener("submit", addResult);
}

// add new row to spreadsheet
function addRow(e) {
  // create tr element
  const tr = document.createElement("tr");
  // add tr html
  tr.innerHTML =
    "<td><input type='text'></td><td><input type='text'></td><td><input type='text'></td>";
  // append tr to tbody parent
  resultsTable.appendChild(tr);

  e.preventDefault();
}

// Add results
function addResult(e) {
  // create variable for input values
  const inputs = document.querySelectorAll('input[type="text"]');
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
