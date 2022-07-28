"use strict";

//variables

const carInfo = document.querySelector("#carInfo"),
  model = document.querySelector("#model"),
  InsuranceSelection = document.querySelector("#Insurance-selection"),
  result = document.querySelector("#result"),
  calcBtn = document.querySelector("button"),
  year = document.querySelector("#year");

//eventlistener
calcBtn.addEventListener("click", carModel);
calcBtn.addEventListener("click", YearImpact);
calcBtn.addEventListener("click", InsuranceSelector);

function generateYear() {
  let currentYear = new Date().getFullYear(),
    persianYear = currentYear - 621;
  return persianYear;
}

for (let i = 0; i < 21; i++) {
  let yearCount = document.createElement("option");

  let countStart = generateYear();
  yearCount.innerHTML = countStart - i;

  year.appendChild(yearCount);
}

// let Model = function () {

//   const  car = model.value;

// };

function carModel(e) {
  e.preventDefault();
  let car = model.value,
    basePrice;
  console.log(car);
  if (car == "") {
    alert("نوع وسیله را انتخاب کنید ");
  } else if (car == "کمتر از 4 سیلندر") {
    basePrice = 2.35;
  } else if (car == "ییکان، پراید،سمند") {
    basePrice = 2.8;
  } else if (car == "سایر 4 سیلندر ها") {
    basePrice = 3.4;
  } else if (car == "بیش از 4 سیلندر") {
    basePrice = 3.7;
  }
  return basePrice;
}

function YearImpact() {
  let produce = year.value,
    gap = generateYear() - produce,
    decreaseRate = 1 - (gap *.03) ;

    return decreaseRate
     
}

 function InsuranceSelector() {

  if ( !InsuranceSelection.children[0].checked && !InsuranceSelection.children[2].checked){
    alert(" نوع بیمه را انتخاب کنید ")
  } else if (InsuranceSelection.children[0].checked){
    console.log("basic");
    return "basic "
  } else if (InsuranceSelection.children[2].checked){
    console.log("complete");
    return "complete"
  } 



}
// YearImpact.prototype.decrease = function(){

// }