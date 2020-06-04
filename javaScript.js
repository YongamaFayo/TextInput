var type = document.querySelector (".billTypeText");
var button = document.querySelector (".addToBillBtn");
var callTtl = document.querySelector (".callTotalOne");
var smsTtl = document.querySelector (".smsTotalOne");
var total = document.querySelector (".totalOne");

//var callsTotal = 27.50;
//var smsTotal = 13.75
var callsTotal = 0.00;
var smsTotal = 0.00;
var billTotal = 0;

function totalPhoneBill (billString){
var billItems = billString.split (",");
//var billTotal = 0;
for (var i=0;i<billItems.length;i++){
var billItem = billItems[i].trim ();
if (billItem === "call"){
billTotal += 2.75;
callsTotal += 2.75;
}
else if (billItem === "sms"){
billTotal += 0.75;
smsTotal += 0.75;
}
}
var roundedBillTotal = billTotal.toFixed (2);
callTtl.innerHTML = (callsTotal).toFixed (2);
smsTtl.innerHTML = (smsTotal).toFixed (2);
return roundedBillTotal;
}

function styleTotalColor (roundedBillTotal){
const currentTotal = Number (roundedBillTotal);

total.classList.remove("danger")
total.classList.remove ("warning")

if (currentTotal >= 50 ){
total.classList.add ("danger")
}
else if (currentTotal >= 30 && currentTotal <= 50 ) {
total.classList.add ("warning")
}
}

function calculateBtnClicked (){
var billString = type.value;
const roundedBillTotal = totalPhoneBill (billString);
total.innerHTML = roundedBillTotal
styleTotalColor (roundedBillTotal);
}
button.addEventListener ("click", calculateBtnClicked);