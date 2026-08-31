import { Given, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, chromium, expect, Page } from "playwright/test";

setDefaultTimeout(30 * 1000)

let browser: Browser, page: Page
let context

Given('I Launch the browser7', async function () {

    browser = await chromium.launch({

        headless: false,
        args: ["--start-maximized"]
    })

    context = await browser.newContext({

        viewport: null
    })

    page = await context.newPage()
});

Then('I launch the amazon website', async function () {

    await page.goto("https://www.amazon.in/")
});

Then('I verify the hard Assertions', async function () {

    await expect(page.getByPlaceholder("Search Amazon.in")).toBeTruthy()
    await page.getByPlaceholder("Search Amazon.in").fill("Mobiles")

    await expect(page.locator(" //*[@id='nav-search-submit-button']")).toBeVisible()
    await page.locator(" //*[@id='nav-search-submit-button']").click()
    await page.waitForTimeout(3000)

    await page.goBack()


    //await expect(page.locator(" //*[text()='Sell']")).toBeHidden()
    //await expect(page.locator(" //*[text()='Sell']")).toBeDisabled()

    await expect(page.locator(" //*[text()='Sell']")).toBeAttached()

    await expect(page.locator("//*[text()='Sell']")).toHaveCount(1)

    await page.locator("//*[text()='Sell']").click()

    await page.goto("https://testautomationpractice.blogspot.com/")

    await expect(page.locator(" //*[@class='title']")).toHaveCount(17)

    let webtitles = await page.locator(" //*[@class='title']").allInnerTexts()

    for (let i = 0; i <= webtitles.length; i++) {
        console.log(webtitles[i])
    }

    await expect(page.locator("//*[@class='title']")).toContainText(['Automation Testing Practice'])
    await expect(page.locator("//*[@class='title']")).toContainText(["Upload Files"])
    await expect(page.locator("//*[@class='title']")).toContainText(['Upload Files', 'Static Web Table'])

    await expect(page.getByPlaceholder('Enter Name')).toHaveAttribute('class')
    await expect(page.getByPlaceholder('Enter Name')).toHaveAttribute('id')
    await expect(page.getByPlaceholder('Enter Name')).toHaveAttribute('placeholder')
    await expect(page.getByPlaceholder('Enter Name')).toHaveAttribute('placeholder', 'Enter Name')
    await expect(page.getByPlaceholder('Enter Name')).toHaveId('name')
    await expect(page.getByPlaceholder('Enter Name')).toHaveClass('form-control')

    console.log("Hi Hello Playwright")







});


Then('I verify the soft Assertions', async function () {

    await expect.soft(page.getByPlaceholder("Search Amazon.in")).toBeTruthy()
    await page.getByPlaceholder("Search Amazon.in").fill("Mobiles")

    await expect.soft(page.locator(" //*[@id='nav-search-submit-button']")).toBeVisible()
    await page.locator(" //*[@id='nav-search-submit-button']").click()
    await page.waitForTimeout(3000)

    await page.goBack()


    //await expect(page.locator(" //*[text()='Sell']")).toBeHidden()
    //await expect(page.locator(" //*[text()='Sell']")).toBeDisabled()

    await expect.soft(page.locator(" //*[text()='Sell']")).toBeAttached()

    await expect.soft(page.locator("//*[text()='Sell']")).toHaveCount(1)

    await page.locator("//*[text()='Sell']").click()

    await page.goto("https://testautomationpractice.blogspot.com/")

    await expect.soft(page.locator(" //*[@class='title']")).toHaveCount(17)

    let webtitles = await page.locator(" //*[@class='title']").allInnerTexts()

    for (let i = 0; i <= webtitles.length; i++) {
        console.log(webtitles[i])
    }

    await expect.soft(page.locator("//*[@class='title']")).toContainText(['Automation Testing Practice'])
    await expect.soft(page.locator("//*[@class='title']")).toContainText(["Upload Files"])
    await expect.soft(page.locator("//*[@class='title']")).toContainText(['Upload Files', 'Static Web Table'])

    await expect.soft(page.getByPlaceholder('Enter Name')).toHaveAttribute('class')
    await expect.soft(page.getByPlaceholder('Enter Name')).toHaveAttribute('id')
    await expect.soft(page.getByPlaceholder('Enter Name')).toHaveAttribute('placeholder')
    await expect.soft(page.getByPlaceholder('Enter Name')).toHaveAttribute('placeholder', 'Enter Name')
    await expect.soft(page.getByPlaceholder('Enter Name')).toHaveId('name')
    await expect.soft(page.getByPlaceholder('Enter Name')).toHaveClass('form-control')

    console.log("Hi Hello Playwright")







});


Then('I close the browser7', async function () {

    await page.waitForTimeout(3000)
    await page.close()




});