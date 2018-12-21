const inputs = document.querySelectorAll('input[type="text"]');

for (let i = 0; i < inputs.length; i++) {
  storeResultInLocalStorage(inputs[i].value);
}

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