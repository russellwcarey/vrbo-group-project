var vp = {}
module.exports = {
    beforeEach: browser => {
        vp = browser.page.vrboPage()
        vp
        .navigate()
    },
    after: browser => {
        vp.end()
    },
    'Search': browser => {
        vp
        .click('.control')
        .setValue('.control', 'Hawaii')
        .click('div[data-suggestion-key="0"]')
        .pause()
    }
}