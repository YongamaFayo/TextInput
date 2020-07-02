function TextBillSettings() {
  //var theCallTotal = 0;
  var callsTotal = 0.00;
var smsTotal = 0.00;
var billTotal = 0;

  function setCallTotal(billString) {
    var billItems = billString.split(",");
    //var billTotal = 0;
    for (var i = 0; i < billItems.length; i++) {
        var billItem = billItems[i].trim();
        if (billItem === "call") {
            billTotal += 2.75;
            callsTotal += 2.75;
        }
        else if (billItem === "sms") {
            billTotal += 0.75;
            smsTotal += 0.75;
        }
    }
  }
  function getCallTotal(){
     
    return callsTotal
    
  } 

  // function setSMSTotal(billString) {
  //   var billItems = billString.split(",");
  //   //var billTotal = 0;
  //   for (var i = 0; i < billItems.length; i++) {
  //       var billItem = billItems[i].trim();
  //       if (billItem === "call") {
  //           billTotal += 0.75;
  //           SMSTotal += 0.75;
  //       }
  //       else if (billItem === "sms") {
  //           billTotal += 2.75;
  //           CallTotal += 2.75;
  //       }
  //   }
  // }
  function getSMSTotal(){
     
    return smsTotal
    
  } 

  

  function getTotal() { 
     
    return billTotal;

  }
  

  

  function getWarningLevel(){
    if (getTotal()>= 30) {
      return "warning";
    }

  }
  function getDangerLevel(){
    if (getTotal()>= 50) {
      return "danger"
    }

  }
  return {

    setCallTotal,
    getCallTotal,
    getTotal,
    getSMSTotal,
    getWarningLevel,
    getDangerLevel



  }

}




