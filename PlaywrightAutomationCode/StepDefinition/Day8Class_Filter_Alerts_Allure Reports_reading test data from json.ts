import { Given, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, chromium, expect, Page } from "playwright/test";

let browser: Browser, page: Page

let context

setDefaultTimeout(30 * 1000)


Given('I Launch the browser9', async function () {

    browser = await chromium.launch({

        headless: false,
        args: ["--start-maximized"]
    })

    context = await browser.newContext({

        viewport: null
    })

    page = await context.newPage()
})

Then('I launch the Sauce demo website', async function () {

    await page.goto("https://www.saucedemo.com/")
})

Then('I verify the filters', async function () {

    await page.getByPlaceholder("Username").fill("standard_user")
    await page.getByPlaceholder("Password").fill("secret_sauce")
    await page.locator("#login-button").click()

    await page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Backpack' }).getByRole('button', { name: 'Add to cart' }).click()
    await page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Bike Light' }).getByRole('button', { name: 'Add to cart' }).click()
    await page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Bolt T-Shirt' }).getByRole('button', { name: 'Add to cart' }).click()

    await page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Backpack' }).getByRole('button', { name: 'Remove' }).click()
    await page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Bike Light' }).getByRole('button', { name: 'Remove' }).click()
    await page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Bolt T-Shirt' }).getByRole('button', { name: 'Remove' }).click()

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator(".form-check.form-check-inline").filter({ hasText: 'Sunday' }).click()
    await page.locator(".form-check.form-check-inline").filter({ hasText: 'Monday' }).click()
    await page.locator(".form-check.form-check-inline").filter({ hasText: 'Tuesday' }).click()
    await page.locator(".form-check.form-check-inline").filter({ hasText: 'Wednesday' }).click()
    await page.locator(".form-check.form-check-inline").filter({ hasText: 'Thursday' }).click()
    await page.locator(".form-check.form-check-inline").filter({ hasText: 'Friday' }).click()
    await page.locator(".form-check.form-check-inline").filter({ hasText: 'Saturday' }).click()
    await page.locator(".form-check.form-check-inline").filter({ hasText: 'Male' }).last().click()

})

Then('I launch the heroku app', async function () {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

})

Then('I verify the alerts', async function () {
    page.on('dialog', async (dialog) => {

        let text = dialog.message()
        console.log(text)
        await dialog.accept()
    })
    await page.locator("//button[text()='Click for JS Alert']").click()
})


Then('I verify confirmation alert ok', async function () {

    await page.on('dialog', async (dialog) => {

        let text = dialog.message()
        console.log(text)
        dialog.accept()
    })
    await page.waitForTimeout(3000)

    await page.locator("//button[text()='Click for JS Confirm']").click()

})

Then('I verify confirmation alert cancel', async function () {

    await page.on('dialog', async (dialog) => {

        let text = dialog.message()
        console.log(text)
        await dialog.dismiss()
    })
    await page.locator("//button[text()='Click for JS Confirm']").click()
})

Then('I verify Prompt alert ok without text', async function () {

    await page.on('dialog', async (dialog) => {

        let text = dialog.message()

        console.log(text)
        dialog.accept()
    })
    await page.locator("//button[text()='Click for JS Prompt']").click()
})

Then('I verify Prompt alert with text', async function () {

    await page.on('dialog', async (dialog) => {

        let text = dialog.message()
        console.log(text)
        dialog.accept("I verified the alert")
    })
    await page.locator("//button[text()='Click for JS Prompt']").click()
})


Then("I verify alert messages using with assertions1", async function () {

    await page.on('dialog', async (dialog) => {

        let text = dialog.message()
        console.log(text)
        await dialog.accept()
        let webText =await page.locator("//h4[text()='Result:']//following-sibling::p").innerText()
        console.log(webText)
        await page.waitForTimeout(3000)
        await expect(page.locator("//h4[text()='Result:']//following-sibling::p")).toContainText("You successfully clicked an alert")
    })
    await page.locator("//button[text()='Click for JS Alert']").click()
})


Then('I verify alert messages using with assertions2',async function(){

    await page.on('dialog',async(dialog)=>{

        let text = dialog.message()
        console.log(text)
          await page.waitForTimeout(3000)
        await dialog.accept("Happy Learning")
        let webText1 = await page.locator("//h4[text()='Result:']//following-sibling::p").innerText()
        console.log(webText1)
        await page.waitForTimeout(3000)
        await expect(page.locator("//h4[text()='Result:']//following-sibling::p")).toContainText("You entered: Happy Learning")

    })
    await page.locator("//button[text()='Click for JS Prompt']").click()
})



Then('I close the browser9', async function () {

    await page.waitForTimeout(3000)
    await page.close()
})