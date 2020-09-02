var obj = {};

var vrboObject = require('../pageObjects/vrboPage');
var citySearch = require('../testAsset/vrboAsset');

module.exports = {
    beforeEach: browser => {
        obj = browser.page.vrboPage();
        obj.navigate();
        browser.maximizeWindow();
    },
    afterEach: browser => {
        obj.end();
    },
    'first search': browser => {
        obj
            .searchHomePage('Saint-Tropez ', 'Saint-Tropez City Centre, Saint-Tropez, Var, France');
    },
    'After initial search': browser => {
        obj
            .searchForEach();
    },
    "save function logged out": browser => {

        obj
            .replay();
    },
    "save function logged in": browser => {
        obj
            .login()
            .replay();

    },
    "clean up test case": browser => {
        obj
            .login()
            .cleanUp();
    }
}
