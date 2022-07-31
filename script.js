"use strict";

//variables

const carInfo = document.querySelector("#carInfo"),
  model = document.querySelector("#model"),
  InsuranceSelection = document.querySelector("#Insurance-selection"),
  result = document.querySelector("#result"),
  calcBtn = document.querySelector("button"),
  form = document.querySelector("#infoBox"),
  year = document.querySelector("#year");

//eventlistener
model.addEventListener("change", carModel);
year.addEventListener("change", YearImpact);
InsuranceSelection.addEventListener("click", InsuranceSelector);
form.addEventListener("submit", FinalPrice);
form.addEventListener('submit', function(e) {
  e.preventDefault();});

function appInit(){
  calcBtn.disabled = true;
}

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
console.log(decreaseRate);
    return decreaseRate
     
}



 function InsuranceSelector() {

  if ( !InsuranceSelection.children[0].checked && !InsuranceSelection.children[2].checked){
    alert(" نوع بیمه را انتخاب کنید ")
  } else if (InsuranceSelection.children[0].checked){
    return 1.3
  } else if (InsuranceSelection.children[2].checked){
    
    return 1.5
  } 



}


function FinalPrice ( produceYear, price, insurance){

 produceYear = YearImpact(),
  price = carModel(),
  insurance = InsuranceSelector();
console.log(produceYear*price*insurance);

let receipt = document.createElement("pre");
result.style.display="flex"

result.appendChild(receipt);
receipt.append(`
قیمت نهایی: 
${(produceYear*price*insurance)*1000000} تومان 

مدل ماشین :
${model.value}

سال ساخت :
${year.value}

نوع بیمه :

`)
  
  
  
//  return  (produceYear*price*insurance)*1000000;
form.reset()
  
}
