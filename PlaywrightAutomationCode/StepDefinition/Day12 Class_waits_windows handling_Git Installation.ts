import { Given, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "playwright/test";

let browser: Browser, page: Page

let context: BrowserContext


Given('I lauch the browser11', async function () {

    browser = await chromium.launch({

        headless: false,
        args: ["--start-maximized"]
    })

    context = await browser.newContext({

        viewport: null
    })

    page = await context.newPage()
});

Then('I launch the paraactice website', async function () {
    // await page.goto("https://www.facebook.com/")
    //await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.goto("https://testautomationpractice.blogspot.com/")

});

Then('I verify the Waits', async function () {
    /* 
        await page.waitForURL("https://www.facebook.com/")
        console.log("=========wait for timeout========")
        await page.waitForTimeout(5000)
        await page.locator("//input[@name='email']").fill("Vamshi12368@gmail.com")
        await page.waitForTimeout(5000)
        await page.locator("//input[@name='pass']").fill("Vamshi@3456")
        await page.getByRole('button', { name: 'Log in' }).click()
     */


    await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    // 1st way waitForSelector
    await page.waitForLoadState('domcontentloaded')
    await page.getByPlaceholder("Username").fill("Admin")

    //2nd way waitForSelector
    await page.waitForSelector("//input[@name='password']",)
    await page.getByPlaceholder("Password").fill("admin123")


});


Then('I close the browser11', async function () {

    await page.waitForTimeout(5000)
    await page.close()
});
