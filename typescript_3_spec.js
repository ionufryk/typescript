var chai = require('chai');
var expect = chai.expect;
var EC = protractor.ExpectedConditions;

describe('Task#3: Cogniance Careers', function() {
    var ourWorklink = element(by.xpath("//a[@data-id='our-work']"));
    var showAllButton = element(by.xpath("//a[@class='show-dialog open-all-projects']"));
    var beanstockImg = element(by.xpath("//img[@alt='beanstock-visual']"));
    var header2 = element(by.xpath("(//h2)[2]"));

    const site = "http://cogniance.com/careers/";
    const expectedVal = "Enabling online publishers to manage and optimize advertising yields";

    // Returns element when it actually becomes visible
    function doWhenAppear(elem){
        browser.wait(EC.visibilityOf(elem), 10000);
        return elem;
    }

    beforeEach(function() {
        browser.ignoreSynchronization = true;
    });

    it('Beanstock pictuer has expected text', function() {
        browser.get(site);
        doWhenAppear(ourWorklink).click();
        doWhenAppear(showAllButton).click();
        doWhenAppear(beanstockImg).click();

        doWhenAppear(header2).getText()
            .then(function(text){
                expect(text).to.equal(expectedVal);
            })
        });
});