// Define UI variables
const resultsForm = document.querySelector("#result-form");
const resultsTable = document.querySelector(".results-table");
const inputs = document.querySelectorAll('input[type="text"]');

// for (let i = 0; i < inputs.length; i++) {
//   storeResultInLocalStorage(inputs[i].value);
// }

// Add results
function addResult(e) {
  
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

/*


*/
