class createeventpage{
    constructor(page){
        this.page=page
        this.eventtitleinput = page.getByPlaceholder("Event title");
        this.categorydropdown = page.locator("#category");
        this.cityinput = page.getByPlaceholder("e.g. Bangalore");
        this.venueinput = page.getByPlaceholder("Venue name & address");
        this.eventdatetimeinput = page.locator('[id="event-date-&-time"]');
        this.priceinput = page.locator('[id="price-($)"]');
        this.totalseatsinput = page.getByPlaceholder("e.g. 500");
        this.addeventbutton = page.getByRole("button",{name : '+ Add Event'})
    }
    async clickAddEvent(eventtitle){
        await this.eventtitleinput.fill(eventtitle)
        await this.categorydropdown.selectOption("Conference")
        await this.cityinput.fill("Bangalore")
        await this.venueinput.fill("Test Venue");
        await this.selectEventDateTime()
        // this.eventdatetimeinput;
        await this.priceinput.fill("500");
        await this.totalseatsinput.fill("300")
        await this.addeventbutton.click();
    }
    async selectEventDateTime() {
        const eventDate = new Date();
        eventDate.setDate(eventDate.getDate() + 1);
        eventDate.setSeconds(0, 0);

        const dateTime = [
            eventDate.getFullYear(),
            String(eventDate.getMonth() + 1).padStart(2, '0'),
            String(eventDate.getDate()).padStart(2, '0'),
        ].join('-') + `T${String(eventDate.getHours()).padStart(2, '0')}:${String(eventDate.getMinutes()).padStart(2, '0')}`;

        await this.eventdatetimeinput.fill(dateTime);
    }
}
module.exports = {createeventpage}