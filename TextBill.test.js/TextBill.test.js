describe("CallTotal", function () {

    it("should be able to set call total", function () {
        let settingsTest = TextBillSettings();

        settingsTest.setCallTotal("call");
        assert.equal(2.75, settingsTest.getCallTotal());

    });

});

describe("SMS Total", function () {

    it("should be able to calculate smsTotal", function () {
        let settingsTest = TextBillSettings();

        settingsTest.setCallTotal("sms");
        assert.equal(0.75, settingsTest.getSMSTotal());


    });

});

describe("Total", function () {

    it("should be able to calculate Total", function () {
        let settingsTest = TextBillSettings();

        settingsTest.setCallTotal("call");
        settingsTest.setCallTotal("call");
        settingsTest.setCallTotal("call");
        settingsTest.setCallTotal("call");
        assert.equal(11 ,settingsTest.getTotal());


    });


});   
describe("Warning Level", function () {

    it("should be able to show warning colour code", function () {
        let settingsTest = TextBillSettings();

        
        settingsTest.setCallTotal("call");
        settingsTest.setCallTotal("call");
        settingsTest.setCallTotal("call");
        settingsTest.setCallTotal("call");
        
        settingsTest.setCallTotal("call");
        settingsTest.setCallTotal("call");
        settingsTest.setCallTotal("call");
        settingsTest.setCallTotal("call");
        settingsTest.setCallTotal("call");
        settingsTest.setCallTotal("call");
        
        
        assert.equal("warning",settingsTest.getWarningLevel());


    });


});   
describe("Danger Level", function () {

    it("should be able to show danger colour code", function () {
        let settingsTest = TextBillSettings();

        settingsTest.setCallTotal("call");
        settingsTest.setCallTotal("call");
        settingsTest.setCallTotal("call");
        settingsTest.setCallTotal("call");
        settingsTest.setCallTotal("call");
        settingsTest.setCallTotal("call");
        settingsTest.setCallTotal("call");
        settingsTest.setCallTotal("call");
        settingsTest.setCallTotal("call");
        settingsTest.setCallTotal("call");
        

        // settingsTest.setCallTotal("total");
        assert.equal("danger",settingsTest.getDangerLevel());


    });


});   
