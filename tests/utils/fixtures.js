const base = require('@playwright/test')

exports.customtest = base.test.extend(
    {   //below 2 lines are used to pass parameters from test to fixture
        username1: ['', { option: true }],
        password1: ['', { option: true }],
        authenticatedPage: async({browser,username1,password1}, use) =>{
            const context = await browser.newContext();
            const page = await context.newPage();
            const username=page.getByPlaceholder('you@email.com');
            const password=page.locator('[type="password"]');
            const loginButton=page.locator('.login-submit-btn');
            const invaliderrormessage = page.locator('[aria-live="polite"]')
            await page.goto("https://eventhub.rahulshettyacademy.com/login");
            await username.fill(username1);
            await password.fill(password1);
            await loginButton.click();
                
            await page.waitForLoadState('networkidle');
            await use(page);
            
            //tear down code
            await context.close();
        }
    });