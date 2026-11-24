class mybookingspage{
    constructor(page){
        this.page = page
        this.bookingcard = page.locator("#booking-card")
        this.yescancelitbutton = page.locator("#confirm-dialog-yes")
    }
    async clickcancelbooking(eventname){
        const bookingcardforcancel = this.bookingcard.filter({hasText:eventname})
        await bookingcardforcancel.getByRole("button",{name:'Cancel Booking'}).click();

    }
    async clickcancelit(){
       await this.yescancelitbutton.click();
    }
}
module.exports = {mybookingspage}