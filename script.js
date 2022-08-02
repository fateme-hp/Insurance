"use strict";

//variables

const carInfo = document.querySelector("#carInfo"),
  model = document.querySelector("#model"),
  InsuranceSelection = document.querySelector("#Insurance-selection"),
  result = document.querySelector("#result"),
  calcBtn = document.querySelector("button"),
  form = document.querySelector("#infoBox"),
  year = document.querySelector("#year");

// eventlistener
model.addEventListener("change", carModel);
year.addEventListener("change", YearImpact);
InsuranceSelection.addEventListener("click", InsuranceSelector);
form.addEventListener("submit", FinalPrice);
form.addEventListener('submit', function(e) {
  e.preventDefault();});



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


function carModel() {

  let car = model.value,
    basePrice;
  console.log(car);
  if (car == "") {
    alert("نوع وسیله را انتخاب کنید ");
  } else if (car == "کمتر از 4 سیلندر") {
    basePrice = 2350000;
  } else if (car == "پیکان، پراید،سمند") {
    basePrice = 2800000;
  } else if (car == "سایر 4 سیلندر ها") {
    basePrice = 3400000;
  } else if (car == "بیش از 4 سیلندر") {
    basePrice = 3700000;
  }
  return basePrice;
}

function YearImpact() {
  let produce = year.value,
    gap = generateYear() - produce,
    decreaseRate = 1 - (gap *.03) ;
console.log(decreaseRate);
    return decreaseRate
     
}

function insuranceRate(percent){

  return 1 + percent
}


 function InsuranceSelector() {

  if ( !InsuranceSelection.children[0].checked && !InsuranceSelection.children[2].checked){
    alert(" نوع بیمه را انتخاب کنید ")
  } else if (InsuranceSelection.children[0].checked){
    return insuranceRate(0)
  } else if (InsuranceSelection.children[2].checked){
    
    return insuranceRate(.3)
  } 



}


function FinalPrice ( produceYear, price, insurance){
  
 produceYear = YearImpact(),
  price = carModel(),
  insurance = InsuranceSelector();
console.log(produceYear*price*insurance);

let receipt = document.createElement("pre"),
spinner = document.createElement("img"),
insuranceType;
result.style.display="flex"

if( insurance == 1){
  insuranceType = "ساده";
} else{
  insuranceType = "کامل"
}


result.appendChild(receipt);
result.appendChild(spinner);
spinner.src ="img/spinner.gif"

  
setTimeout(() => {
spinner.remove();
  receipt.append(`

  نوع بیمه : ${ insuranceType}

  مدل ماشین : ${model.value}

  سال ساخت : ${year.value}

  قیمت نهایی: ${Math.round(produceYear*price*insurance)} تومان 
  `)

  form.reset()
}
,3000)
setTimeout(() => {
receipt.remove();
result.style.display="none"

  
}
,8000)


}
