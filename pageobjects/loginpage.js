class loginpage{
    constructor(page){
        this.page = page;
        this.username=page.getByPlaceholder('you@email.com');
        this.password=page.locator('[type="password"]');
        this.loginButton=page.locator('.login-submit-btn');
        this.invaliderrormessage = page.locator('[aria-live="polite"]')
    }
    async goToLoginPage(){
        await this.page.goto("https://eventhub.rahulshettyacademy.com/login");
    }

    async loginToApplication(username,password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
        
        await this.page.waitForLoadState('networkidle');
    }

    async invalidLoginToApplication(username,password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click(); 
        await this.page.waitForLoadState('networkidle');
    
    }
}
module.exports = {loginpage};