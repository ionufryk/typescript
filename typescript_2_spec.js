var chai = require('chai');
var expect = chai.expect;
var EC = protractor.ExpectedConditions;

describe('Task#2: Super Calculator', function() {
    var learnJavascript = element(by.xpath("(//a[contains(text(),'Learn JavaScript')])[1]"));
    var inputOne = element(by.model("first"));
    var inputTwo = element(by.model("second"));
    var goButton = element(by.css("#gobutton"));
    var result = element(by.xpath("(//td[@class='ng-binding'])[2]"));

    const site = "http://juliemr.github.io/protractor-demo/";
    const key1 = 3;
    const key2 = 6;
    const expectedVal = "9";

    // Returns element when it actually becomes visible
    function doWhenAppear(elem){
        browser.wait(EC.visibilityOf(elem), 10000);
        return elem;
    }

    beforeEach(function() {
        browser.ignoreSynchronization = true;
    });

    it('adds 3 and 6 correctly', function() {
        browser.get(site);
        doWhenAppear(inputOne).sendKeys(key1);
        doWhenAppear(inputTwo).sendKeys(key2);
        doWhenAppear(goButton).click();

        doWhenAppear(result).getText()
            .then(function(text){
                expect(text).to.equal(expectedVal);
            })
        });
});