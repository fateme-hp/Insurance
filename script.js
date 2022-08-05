"use strict";


//variables - selectors
const carInfo = document.querySelector("#carInfo"),
model = document.querySelector("#model"),
InsuranceSelection = document.querySelector("#Insurance-selection"),
result = document.querySelector("#result"),
calcBtn = document.querySelector("button"),
form = document.querySelector("#infoBox"),
produceYear= document.querySelector("#year"),
ui = new UserInterface();



// eventListeners 
document.addEventListener('DOMContentLoaded', function(){
  ui.displayYear()
});
form.addEventListener('submit', function(e) {
  e.preventDefault();

  let carMake = model.value,
      carYear = produceYear.value,
      level = document.querySelector('input[name="insurance"]:checked').value;
      console.log(carMake, carYear, level);

      if ( carMake ==="" || carYear ==="" || level===""){
        ui.displayMsg('لطفا همه ی فیلد ها را  پر کنید.')
      }else{
       new FinalPrice()
      }

});

function Insurance(){}

function UserInterface(){

}


UserInterface.prototype.displayYear = function(){
  const year = new Date().toLocaleDateString('fa-IR-u-nu-latn').slice(0,4),

  maxYear = Number(year),
  minYear = maxYear - 20;

  for (let i = maxYear; i >= minYear; i--) {
   
    let option = document.createElement('option');
    produceYear.appendChild(option)
    option.value = i;
    option.innerHTML =` سال ${i}`;
    
  }
}

UserInterface.prototype.displayMsg = function(msg){

  const messageBox = document.createElement('div');
  messageBox.classList.add('error');
  messageBox.innerText = msg;

  form.insertBefore(messageBox,carInfo)

  setTimeout(() => {
    document.querySelector('.error').remove()
  }, 5000);
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
  generateYear = Number( new Date().toLocaleDateString('fa-IR-u-nu-latn').slice(0,4)),
    gap = generateYear - produce,
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
