// Define UI variables
let newDayButton = document.querySelector(".new-day");
let saveDayButton = document.querySelector(".save-day");
let weekDiv = document.querySelector(".week");

loadEventListeners();

function loadEventListeners() {
  // DOM load event
  document.addEventListener("DOMContentLoaded", getDays);
  // add new day tables
  newDayButton.addEventListener("click", () => {
    addNewDay();
    liftsJS();
    resultsJS();
  });
  // save day in local storage
  saveDayButton.addEventListener("click", addDay);
}

// get tables from local storage
function getDays() {
  let days;
  if (localStorage.getItem("days") === null) {
    days = [];
  } else {
    days = JSON.parse(localStorage.getItem("days"));

    let div = document.createElement("div");
    div.className = "day"
    for (let i = 0; i < days.length; i++) {
      div.innerHTML = days[i];
      weekDiv.appendChild(div);
    }
  }
}

// adds new exercises and results tables to page
function addNewDay(e) {
  // create div element
  let div = document.createElement("div");
  // add class
  div.className = "day";
  // add div innerHTML
  div.innerHTML =
    '<table class="exercises"><thead><tr><th class="muscle-group"><input class="muscle-value" type="text"></th><th class="new-lift"><button class="button">New Lift</button></th><th class="save-lifts"><button class="button">Save</button></th></tr></thead><thead><tr><th>Exercises</th><th>Sets</th><th>Reps</th></tr></thead><tbody class="exercises-table"></tbody></table><table class="results"><thead><tr><th class="date"><input type="date"></th><th id="new-row"><button class="button">New Row</button></th><th id="results"><button class="button">Save</button></th></tr></thead><thead><tr><th>Weight</th><th>Sets</th><th>Reps</th></tr></thead><tbody class="results-table"></tbody></table>';

  // append div to div.week
  weekDiv.appendChild(div);

  // e.preventDefault();
}

function addDay(e) {
  // create var for day value (the html tables)
  let div = document.createElement("div");
  // add class
  div.className = "day";
  // add div innerHTML
  div.innerHTML =
    '<table class="exercises"><thead><tr><th class="muscle-group"><input class="muscle-value" type="text"></th></tr></thead><thead><tr><th>Exercises</th><th>Sets</th><th>Reps</th></tr></thead><tbody class="exercises-table"></tbody></table><table class="results"><thead><tr><th class="date"><input type="date"></th><th id="new-row"><button class="button">New Row</button></th><th id="results"><button class="button">Save</button></th></tr></thead><thead><tr><th>Weight</th><th>Sets</th><th>Reps</th></tr></thead><tbody class="results-table"></tbody></table>';
  
  saveDaysInLocalStorage(div.innerHTML);
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

// This function contains the code for the exercises table

function liftsJS() {
  // Define UI variables
  let newLiftButton = document.querySelector(".new-lift");
  let saveLiftsButton = document.querySelector(".save-lifts");
  let exercisesTable = document.querySelector(".exercises-table");

  loadEventListeners();

  // load all event listeners
  function loadEventListeners() {
    // DOM load event
    document.addEventListener("DOMContentLoaded", getLifts);
    document.addEventListener("DOMContentLoaded", getMuscle);
    // add new lift event

    newLiftButton.addEventListener("click", addLift);

    // add lifts to local storage event
    saveLiftsButton.addEventListener("click", saveLift);
    // add muscle group description to local storage
    saveLiftsButton.addEventListener("click", addMuscle);
  }

  // get exercises from local storage
  function getLifts() {
    // loop through the values in local storage and apply them to each td

    let lifts;
    if (localStorage.getItem("lifts") === null) {
      lifts = [];
    } else {
      lifts = JSON.parse(localStorage.getItem("lifts"));

      // loop through the exercises array taken from local storage
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

  // get muscle group description from local storage
  function getMuscle() {
    let muscles;
    if (localStorage.getItem("muscles") === null) {
      muscles = [];
    } else {
      muscles = JSON.parse(localStorage.getItem("muscles"));

      const muscleGroup = document.querySelector(".muscle-group");

      for (let i = 0; i < muscles.length; i++) {
        muscleGroup.innerText = muscles[i];
      }
    }
  }

  // add new lift row to spreadsheet
  function addLift(e) {
    // need to loop through and do this for every button on the page that will add a lift row

    // create tr element
    let tr = document.createElement("tr");
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
}

// this function contains the code for the results table
function resultsJS() {
  // Define UI variables
  let newRowButton = document.querySelector("#new-row");
  let resultsButton = document.querySelector("#results");
  let resultsTable = document.querySelector(".results-table");

  loadEventListeners();

  // load all event listeners
  function loadEventListeners() {
    // DOM load event
    document.addEventListener("DOMContentLoaded", getResults);
    document.addEventListener("DOMContentLoaded", getDate);
    // add new row event
    newRowButton.addEventListener("click", addRow);
    // add results to local storage
    resultsButton.addEventListener("click", addResult);
    //add date to local storage
    resultsButton.addEventListener("click", addDate);
  }

  // get results from local storage
  function getResults() {
    // want to loop through the local storage and apply the values to each td

    let results;
    if (localStorage.getItem("results") === null) {
      results = [];
    } else {
      results = JSON.parse(localStorage.getItem("results"));

      // loop through the results array taken from local storage
      for (let h = 0; h <= results.length; h++) {
        // counter variable for while loop
        let i = 0;
        let rows = [];

        // create tr element to hold tds for row values
        const tr = document.createElement("tr");
        resultsTable.appendChild(tr);

        // use while loop and shift() to repeatedly push the first three result values into empty rows array
        while (i < 3) {
          rows.push(results.shift());
          i++;
        }

        // create a td inside the above tr for every value in rows (so three tds per tr)
        for (let k = 0; k < rows.length; k++) {
          let td = document.createElement("td");
          td.innerText = rows[k];
          tr.appendChild(td);
        }

        // set counter variable back to 0 and empty rows array
        i = 0;
        rows = [];
      }
    }
  }

  // get date from local storage
  function getDate() {
    let dates;
    if (localStorage.getItem("dates") === null) {
      dates = [];
    } else {
      dates = JSON.parse(localStorage.getItem("dates"));

      const liftDate = document.querySelector(".date");

      for (let i = 0; i < dates.length; i++) {
        liftDate.innerText = dates[i];
      }
    }
  }

  // add new row to spreadsheet
  function addRow(e) {
    // create tr element
    const tr = document.createElement("tr");
    // add tr html
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

  // add date and put it in local storage
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
      dates = JSON.parse(localStorage.getitem("dates"));
    }

    dates.push(date);

    localStorage.setItem("dates", JSON.stringify(dates));
  }
}
