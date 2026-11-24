const {loginpage} = require("./loginpage.js");
const {homepage} = require("./homepage.js");
const {eventspage} = require("./eventspage.js")
const {createeventpage} = require("./createeventpage.js")
const {bookingpage} = require("./bookingpage.js")
const {mybookingspage} = require("./mybookingspage.js")

class POManager {
    constructor(page) {
        this.page = page;
        this.loginPage = new loginpage(this.page);
        this.homepage = new homepage(this.page);
        this.eventspage = new eventspage(this.page);
        this.createeventpage = new createeventpage(this.page)
        this.bookingpage = new bookingpage(this.page)
        this.mybookingspage = new mybookingspage(this.page)
    }
getLoginPage() {
        return this.loginPage;
    }
getHomePage() {
        return this.homepage;
    }
getEventsPage(){
    return this.eventspage;
}
getCreateEventsPage(){
    return this.createeventpage;
}
getBookingPage(){
    return this.bookingpage;
}
getMyBookingsPage(){
    return this.mybookingspage
}
}
module.exports = { POManager };