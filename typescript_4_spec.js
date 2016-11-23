var chai = require('chai');
var expect = chai.expect;
var EC = protractor.ExpectedConditions;

describe('Task#4: Cogniance Careers', function() {
    const site = "http://cogniance.com/";
    const site1 = "http://cogniance.com/careers/new-york/sales-executive-2/";
    const country = "USA";
    const depratment = "sales"
    const expectedVal = 9;
    const expectedText = "Sales Ececutive";

    var careersLink = element(by.xpath("//a[@data-id='careers']"));
    var countryFilter = element(by.xpath("//input[@name='countryFilter'][@value='USA']/parent::*"));
    var jobFilter = element(by.xpath("//input[@name='jobFilter'][@value='#Sales']/parent::*"));
    var jobLink = element(by.xpath("//a/strong[contains(text(),'Sales Executive')]"));
    var allAfterPerson = element.all(by.xpath("//h3/b[contains(text(),'THE PERSON')]/following:: ul"));


    // Returns element when it actually becomes visible
    function doWhenAppear(elem){
        browser.wait(EC.visibilityOf(elem), 10000);
        return elem;
    }

    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.get(site);
        doWhenAppear(careersLink).click();

        // browser.executeScript("arguments[0].scrollIntoView();", countryFilter);

        browser.executeScript("arguments[0].scrollIntoView();", countryFilter.getWebElement());

        doWhenAppear(countryFilter).click();
        doWhenAppear(jobFilter).click();
        // doWhenAppear(countryFilter).click();
        // doWhenAppear(jobFilter).click();
    });

    it('Sales Executive job is available', function() {
        doWhenAppear(joblink).getText()
            .then(function(text){
                expect(text).to.equal(expectedText);
            })
    });

    it('Sales Executive job Person part has 9 descriptions', function() {

        doWhenAppear(jobLink).click();

        allAfterPerson.count()
            .then(function(number){
                expect(number).to.equal(expectedVal);
            })
        });
});