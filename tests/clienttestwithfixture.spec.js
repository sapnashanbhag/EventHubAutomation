const {customtest} = require('../tests/utils/fixtures.js');
const {POManager} = require('../pageobjects/POManager.js');
const {expect} = require('@playwright/test')
const dataset = JSON.parse(JSON.stringify(require('./utils/login-base.json')));
let poManager;
for (const data of dataset) {

customtest.use({
    username1: data.username,
    password1: data.password
});

customtest(`Create Event with login ${data.username}`,async({authenticatedPage}) => {
    
    
    await authenticatedPage.goto('https://eventhub.rahulshettyacademy.com/')
    poManager = new POManager(authenticatedPage);
    const homepage = poManager.getHomePage();
    await homepage.clickOnBrowseEventsLink();
    await expect(authenticatedPage).toHaveURL("https://eventhub.rahulshettyacademy.com/events")
    const eventName = `Automation Test Event ${Date.now()}`;
    const eventspage = poManager.getEventsPage();
    await eventspage.addevent();
    const createeventpage = poManager.getCreateEventsPage();
    await createeventpage.clickAddEvent(eventName);
    await expect(authenticatedPage.getByText(eventName)).toBeVisible();
    await homepage.clickOnEventsLink();
    await expect(authenticatedPage.getByText(eventName)).toBeVisible();
    await eventspage.bookEventByName(eventName);
    await expect(authenticatedPage.locator("h1.text-2xl")).toBeVisible();
    const bookingpage = poManager.getBookingPage();
    await bookingpage.confirmBooking();
    await expect(authenticatedPage.getByText("Your tickets are reserved.")).toBeVisible();



    });
}