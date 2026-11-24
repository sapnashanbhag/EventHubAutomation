class bookingpage{
    constructor(page){
        this.page=page
        this.plusbutton = page.getByRole("button",{name:'+'})
        this.fullnameinput = page.getByPlaceholder("Your full name")
        this.emailinput = page.getByPlaceholder("you@email.com")
        this.phonenbrinput = page.getByPlaceholder("+91 98765 43210")
        this.confirmbookingbutton = page.locator('[id="confirm-booking"]')
        this.viewbookingsbutton = page.getByRole("button",{name:'View My Bookings'})
    }
    async confirmBooking(){
        await this.plusbutton.click();
        await this.fullnameinput.fill("testname")
        await this.emailinput.fill("test@test.com")
        await this.phonenbrinput.fill("0123456789")
        await this.confirmbookingbutton.click();
    }
    async viewmybookings(){
        await this.viewbookingsbutton.click();
    }
}
module.exports = {bookingpage}