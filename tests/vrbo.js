var obj = {}

var vrboObject = require('../pageObjects/vrboPage')
// var vroboAsset=require('..')

module.exports = {
    beforeEach: browser => {
        obj = browser.page.vrboObject()
    //    browser.url("https://www.vrbo.com/")
        obj.navigate()
        browser.maximizeWindow();
    },
    afterEach: browser => {
        obj
            .end()
    },
    "save function logged out":browser=>{
        obj
        .replay()
    },
    // "save function logged in":browser=>{
    //     obj
    //     .login()
    //     .replay()
    //     .cleanUp()
    // }
}