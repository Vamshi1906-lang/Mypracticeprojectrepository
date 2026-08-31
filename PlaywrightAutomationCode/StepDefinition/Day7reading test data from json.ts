import { Given, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, chromium, expect, Page } from "playwright/test";

import TestData from "../Files/TestData.json"

setDefaultTimeout(30 * 1000)

let browser: Browser, page: Page
let context


Given('I Launch the browser8', async function () {
    browser = await chromium.launch({

        headless: false,
        args: ["--start-maximized"]
    })

    context = await browser.newContext({

        viewport: null
    })

    page = await context.newPage()
});

Then('I launch the practice website', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/")
});

Then('I verify the Reading test data JSON', async function () {

    await page.getByPlaceholder('Enter Name').fill(TestData.TestData1.Name)
    await page.getByPlaceholder('Enter EMail').fill(TestData.TestData1.Email)
    await page.getByPlaceholder('Enter Phone').fill(TestData.TestData1.Phone)
    await page.locator(" //input[@class='wikipedia-search-input']").fill(TestData.TestData1.Wikipedia)

});

Then('I close the browser8', async function () {
    
});