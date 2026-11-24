class eventspage{
    constructor(page){
        this.page = page;
        this.addeventbutton = page.getByRole("button",{name:'Add New Event'})
        this.booknowbuttons = page.getByTestId("book-now-btn")

        


    }
    async addevent(){
        await this.addeventbutton.click();
    }

 
    async bookEventByName(eventName) {
    const eventCard = this.page.locator('#event-card').filter({ hasText: eventName });

    await eventCard.getByTestId('book-now-btn').click();
}
}
module.exports = {eventspage}