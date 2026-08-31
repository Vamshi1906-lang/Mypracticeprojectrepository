import { Given, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, chromium, Page, } from "playwright/test";
setDefaultTimeout(30 * 1000)

let browser: Browser, page: Page
let context

Given("I Launch the browser2", async function () {

    browser = await chromium.launch({

        headless: false, args: ['--start-maximized']
    })

    context = await browser.newContext({
        viewport: null
    })

    page = await context.newPage()
})

Then("Iam Launching the Automation practice website", async function () {

    await page.goto("https://testautomationpractice.blogspot.com/")
})

Then("I Verify playwright locators", async function () {

    //await page.getByPlaceholder("attribute value of the placeholder").methods()
    console.log("======= getByPlaceholder() ========")
    await page.getByPlaceholder("Enter Name").fill("Vamshi")
    await page.getByPlaceholder("Enter EMail").fill("Vamshi@yahoo.com")

    // await page.getByText("Text of the web element").methods()

    console.log("======= getByText() ========")

    await page.getByText('START').click()

    await page.getByText('STOP').click()


    // await page.getByRole(‘type of the web element’,{name:‘text of the web element’})

    console.log("======== getByRole() =======")
    await page.getByRole('button', { name: 'START' }).click()
    await page.getByRole('button', { name: 'STOP' }).click()

    await page.getByRole('checkbox', { name: 'Sunday' }).click()
    await page.getByRole('checkbox', { name: 'Saturday' }).click()

    await page.getByRole('textbox', { name: "Phone" }).fill("9398442641")


})

Then("I close the browser2", async function () {

    await page.waitForTimeout(4000)
    await page.close()
})



Given("Iam Launching the Parabank website", async function () {

    await page.goto("https://parabank.parasoft.com/parabank/index.htm")
})

Then("I Verify playwright locators2", async function () {

    console.log("====== getByAltText() ======")

    //await page.getByalttext(‘attribute value of the alt).methods()

    await page.getByAltText("ParaBank").click();

    console.log("===== getByTitle() =======")
    //await page.getByTitle(" attribute value of the title").methods()

    await page.getByTitle("ParaBank").click()

})


Given("Iam Launching the salesforce website", async function () {

    await page.goto("https://login.salesforce.com/")
})

Then("I Verify playwright locators3", async function () {

    console.log("========getByLabel===========")

    //await page.getbylabel(‘text of the label tag’).methods()

    await page.getByLabel("Username").fill("Advika")
})

Given("Iam Launching the Automation practicee website", async function () {

    await page.goto("https://testautomationpractice.blogspot.com/")
})

Then("I verify selenium Locators",async function(){

    console.log("============xpaths==================")

    console.log("============Relative xpath==================")

    // await page.loctaor(relative xpath’).methods()

    await page.locator("//input[@placeholder='Enter Name']").fill("Vamshi")

    await page.locator("//*[@placeholder='Enter EMail']").fill("vamshi@yahoo.com")

    console.log("============css selector xpath==================")

    // 1.tag with id ===> tag#id

    await page.locator("input#phone").fill("1234567890")

    //2. tag with class ====> tag.class

    await page.locator("input.wikipedia-search-input").fill("Hyderabad")

    //3. tag with attribute ===> tag[attribute="value"]

    await page.locator("textarea[id='textarea']").fill("Madeenaguda")

    //4.Tagwith class and Attribute ====> tag.classname[attribute = 'value']

    await page.locator("textarea.form-control[id='textarea']").fill("Hitech city")





})




