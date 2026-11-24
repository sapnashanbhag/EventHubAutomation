const {test, expect} = require('@playwright/test');
const {POManager} = require('../pageobjects/POManager.js');
const dataset = JSON.parse(JSON.stringify(require('./utils/login-base.json')));
let webContext;
let poManager;



for (const data of dataset) {
test.beforeEach(`Login to EventHub with username ${data.username}`, async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.goToLoginPage();
    if(data.expected === "success"){
        await loginPage.loginToApplication(data.username, data.password);
        await expect(page).toHaveURL('https://eventhub.rahulshettyacademy.com/');
         await page.context().storageState({path: 'state.json'})
         webContext = await browser.newContext({storageState: 'state.json'});

    }
    else if(data.expected === "failure") {
        await loginPage.invalidLoginToApplication(data.username, data.password);
        await expect(loginPage.invaliderrormessage).toContainText('Invalid email or password');
        await expect(loginPage.invaliderrormessage).toBeVisible();
    }
 

});


test(`Create Event with login ${data.username}`,async({}) => {
    
    
    const eventpage = await webContext.newPage();
    await eventpage.goto('https://eventhub.rahulshettyacademy.com/')
    poManager = new POManager(eventpage);
    const homepage = poManager.getHomePage();
    await homepage.clickOnBrowseEventsLink();
    await expect(eventpage).toHaveURL("https://eventhub.rahulshettyacademy.com/events")
    const eventName = `Automation Test Event ${Date.now()}`;
    const eventspage = poManager.getEventsPage();
    await eventspage.addevent();
    const createeventpage = poManager.getCreateEventsPage();
    await createeventpage.clickAddEvent(eventName);
    await expect(eventpage.getByText(eventName)).toBeVisible();
    await homepage.clickOnEventsLink();
    await expect(eventpage.getByText(eventName)).toBeVisible();
    await eventspage.bookEventByName(eventName);
    await expect(eventpage.locator("h1.text-2xl")).toBeVisible();
    const bookingpage = poManager.getBookingPage();
    await bookingpage.confirmBooking();
    await expect(eventpage.getByText("Your tickets are reserved.")).toBeVisible();
    await bookingpage.viewmybookings();
    await expect(eventpage.locator("h1.text-3xl")).toContainText('My Bookings');
    const mybookingspage = poManager.getMyBookingsPage()
    await mybookingspage.clickcancelbooking(eventName);
    await mybookingspage.clickcancelit();

    });
}
