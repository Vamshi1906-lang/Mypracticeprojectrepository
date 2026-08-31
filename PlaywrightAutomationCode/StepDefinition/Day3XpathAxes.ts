import { Given, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, chromium, expect, Page } from "playwright/test";

setDefaultTimeout(30 * 1000)

let browser: Browser, page: Page

let context

Given("I Launch the browser3", async function () {

    browser = await chromium.launch({

        headless: false,

        args: ["--start-maximized"]
    })

    context = await browser.newContext({

        viewport: null
    })

    page = await context.newPage()
})

Then("I launch the Test Automation practice website", async function () {

    await page.goto("https://testautomationpractice.blogspot.com/")
})

Then("I Verify the xpath methods", async function () {

    console.log("=============contains=========")

    await page.locator("//input[contains(@id,'name')]").fill("Prabhas")
    await page.locator("//*[contains(@placeholder,'Enter EMail')]").fill("NTR")

    console.log("=============starts-with=========")

    await page.locator("//input[starts-with(@class,'form-control')]").last().fill("Ramcharan")
    await page.locator("//*[starts-with(@id,'textarea')]").fill("Hyderabad")

    console.log("=============text()=========")

    var text = await page.locator("//h2[text()='Alerts & Popups']").innerText()
    console.log("1st way text is  :", text)

    text = await page.locator("//*[text()='Alerts & Popups']").innerText()
    console.log("2nd way text is  :", text)

    text = await page.locator("//h2[contains(text(),'Alerts & Popups')]").innerHTML()
    console.log("3rd way text is  :", text)

    console.log('============== and ================')

    await page.locator("//input[@type='text' and @id='field2']").fill("Method 1")
    await page.locator("//input[@type='text' and contains(@class,'wikipedia-search-input')]").fill("Modi")

    console.log('============== or ================')

    let orcount = await page.locator("//input[@type='text' or contains(@class,'wikipedia-search-input')]").all()
    expect(orcount.length).toBeGreaterThan(0)
    console.log("orcount is :", orcount.length)




})

Then("I close the browser3", async function () {

    await page.waitForTimeout(4000)

    await page.close()
})


Then('I Verify the xpath Axes', async function () {

    console.log("============= parent =========")

    let parentCount = await page.locator("//input[@id='female']//parent::div").all();
    console.log("parentcount is :",parentCount.length)


    console.log("============= Ancestor =========")

    let ancesterCount = await page.locator("//input[@id='female']//ancestor::div").all()
    console.log("AncesterCount is :",ancesterCount.length)

    console.log("============= preceding =========")
    let precedingCount = await page.locator("//input[@id='sunday']//preceding::div").all()
    console.log("PrecedingCount is : ",precedingCount.length)



});

