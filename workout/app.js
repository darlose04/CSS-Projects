// Define UI variables
const newRowForm = document.querySelector("#new-row-form");
const resultsForm = document.querySelector("#result-form");
const resultsTable = document.querySelector(".results-table");
// const inputs = document.querySelectorAll('input[type="text"]');

loadEventListeners();

// load all event listeners
function loadEventListeners() {
  // DOM load event
  document.addEventListener("DOMContentLoaded", getResults);
  // add new row event
  newRowForm.addEventListener("submit", addRow);
  // add results to local storage
  resultsForm.addEventListener("submit", addResult);
}

// get results from local storage
function getResults() {
  // want to loop through the local storage and apply the values to each td

  let results;
  if (localStorage.getItem("results") === null) {
    results = [];
  } else {
    results = JSON.parse(localStorage.getItem("results"));
  }
  // console.log(results);

  // loop through the results array taken from local storage
  for (let h = 0; h <= results.length; h++) {
    // counter variable for while loop
    let i = 0;
    let rows = [];

    // create tr element to hold tds for row values
    const tr = document.createElement("tr");
    resultsTable.appendChild(tr);

    // use while loop to push every three results values into empty rows array
    while (i < 3) {
      rows.push(results.shift());
      i++;
    }

    // create a td inside the above tr for every value in rows
    for (let k = 0; k < rows.length; k++) {
      let td = document.createElement("td");
      td.innerText = rows[k];
      tr.appendChild(td);
    }

    console.log(rows);
    // set counter variable back to 0 and empty rows array
    i = 0;
    rows = [];
  }
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
