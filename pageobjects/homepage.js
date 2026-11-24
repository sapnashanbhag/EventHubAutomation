const {test, expect} = require('@playwright/test');

class homepage{
    constructor(page){
        this.page = page;
        this.logoutButton=page.locator('#logout-btn');
        this.eventhubtext = page.locator('span.text-lg')
        this.browseeventslink = page.getByRole("link",{name:'Browse Events →'});
        this.mybookingslink = page.getByRole('button', { name: 'My Bookings' });
        this.featuredeventstext = page.locator('div h2').getByText('Featured Events');
        this.adminbutton = page.getByRole('button', { name: 'Admin' });
        this.manageeventlink = page.getByRole('link', { name: 'Manage Events' });
        this.managebookingslink = page.getByRole('link', { name: 'Manage Bookings' });
        this.eventslink = page.getByRole('link',{name:"Events"})
    }
    async isfeaturedeventstextVisible(){
        await expect(this.featuredeventstext).toBeVisible()
    }
    async clickOnEventsLink(){
        await this.eventslink.nth(1).click();
    }
    async clickOnLogoutButton(){
        await this.logoutButton.click();
    }
    async clickOnBrowseEventsLink(){
        await this.browseeventslink.click();
    }
    async clickOnMyBookingsLink(){
        await this.mybookingslink.click();
    }   
    async clickonAdminButton(){
        await this.adminbutton.click();
    }
    async hoveronManageEvents(){
        await this.adminbutton.click();
        await this.manageeventlink.nth(1).click();
    }
    async hoveronManageBookings(){
        await this.adminbutton.click();
        await this.managebookingslink.click();

    }
    async goToHomePage(){
        await this.page.goto("https://eventhub.rahulshettyacademy.com/")
    }


}
module.exports={homepage}