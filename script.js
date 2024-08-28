let bill = document.querySelector("#topInput");
let people = document.querySelector("#peopleInput");
let total = document.querySelector("#totalValue");
let tip = document.querySelector("#tipValue");
let percent = document.querySelector("#customInput");
let fivePercent = document.querySelector("#p5");
let tenPercent = document.querySelector("#p10");
let fifteenPercent = document.querySelector("#p15");
let twofivePercent = document.querySelector("#p25");
let fiftyPercent = document.querySelector("#p50");
let reset = document.querySelector("#reset");
let topInputContainer = document.querySelector(".topInput");
let bottomInputContainer = document.querySelector(".bottomInput");
let customInput = document.querySelector(".customInput");
let billValue = 0;
let percentValue = 0;
let peopleValue = 0;
let errorMessageTop = document.querySelector("#errorMessageTop");
let errorMessageBottom = document.querySelector("#errorMessageBottom");

bill.addEventListener("input", billFunction);
people.addEventListener("input", peopleFunction);
percent.addEventListener("input", percentFunction);

fivePercent.addEventListener("click", function () {
  percentValue = setPercent(5);
  calculateResults();
  customInput.classList.remove("borderError");
  customInput.classList.remove("borderFocus");
});
tenPercent.addEventListener("click", function () {
  percentValue = setPercent(10);
  calculateResults();
  customInput.classList.remove("borderError");
  customInput.classList.remove("borderFocus");
});
fifteenPercent.addEventListener("click", function () {
  percentValue = setPercent(15);
  calculateResults();
  customInput.classList.remove("borderError");
  customInput.classList.remove("borderFocus");
});
twofivePercent.addEventListener("click", function () {
  percentValue = setPercent(25);
  calculateResults();
  customInput.classList.remove("borderFocus");
  customInput.classList.remove("borderError");
});
fiftyPercent.addEventListener("click", function () {
  percentValue = setPercent(50);
  calculateResults();
  customInput.classList.remove("borderError");
  customInput.classList.remove("borderFocus");
});
reset.addEventListener("click", function () {
  percentValue = 0;
  billValue = 0;
  peopleValue = 0;
  bill.value = "";
  people.value = "";
  percent.value = "";
  tip.innerHTML = "$0.00";
  total.innerHTML = "$0.00";
});

function billFunction() {
  billValue = parseFloat(bill.value);
  calculateResults();
}

function percentFunction() {
  percentValue = parseFloat(percent.value) / 100;
  calculateResults();
}

function peopleFunction() {
  peopleValue = parseInt(people.value);
  calculateResults();
}

function setPercent(p) {
  return p / 100;
}

function calculateResults() {
  if (peopleValue > 0 && billValue > 0 && percentValue >= 0) {
    let tipAmount = (billValue * percentValue) / peopleValue;
    let totalAmount = billValue / peopleValue + tipAmount;
    tip.innerHTML = "$" + tipAmount.toFixed(2);
    total.innerHTML = "$" + totalAmount.toFixed(2);
  } else {
    tip.innerHTML = "$0.00";
    total.innerHTML = "$0.00";
  }
}

bill.addEventListener("focus", function () {
  topInputContainer.classList.add("borderFocus");
});

bill.addEventListener("focusout", function () {
  if (bill.value != 0) {
    topInputContainer.classList.remove("borderFocus");
    topInputContainer.classList.remove("borderError");
    errorMessageTop.classList.add("visible");
  } else {
    topInputContainer.classList.add("borderError");
    errorMessageTop.classList.remove("visible");
  }
});

people.addEventListener("focus", function () {
  bottomInputContainer.classList.add("borderFocus");
});

people.addEventListener("focusout", function () {
  if (people.value != 0) {
    bottomInputContainer.classList.remove("borderFocus");
    bottomInputContainer.classList.remove("borderError");
    errorMessageBottom.classList.add("visible");
  } else {
    bottomInputContainer.classList.add("borderError");
    errorMessageBottom.classList.remove("visible");
  }
});

percent.addEventListener("focus", function () {
  customInput.classList.add("borderFocus");
});

percent.addEventListener("focusout", function () {
  if (percent.value != 0) {
    customInput.classList.remove("borderFocus");
    customInput.classList.remove("borderError");
  } else {
    customInput.classList.add("borderError");
  }
});
