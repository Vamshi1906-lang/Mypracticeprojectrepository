import { Given, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, chromium, Page } from "playwright/test";

setDefaultTimeout(30 * 3000)

let browser: Browser, page: Page
let context


Given('I launch the browser11', async function () {

    browser = await chromium.launch({
        headless: false,
        args: ["--start-maximized"]
    })

    context = await browser.newContext({

        viewport: null
    })

    page = await context.newPage()


})

Then('I open the practice website', async function () {
    
    await page.goto("https://the-internet.herokuapp.com/nested_frames")
});

Then('I verify the frames', async function () {
    
    let allFramesCount = await page.frames()
    console.log("allFramesCount :",allFramesCount.length)

    let bottomFrameText = await page.frameLocator("//frame[@src='/frame_bottom']").locator("//*[contains(text(),'BOTTOM')]").innerText()
    console.log("bottomFrameText :",bottomFrameText)

    await page.waitForTimeout(5000)

    let middleFrameText = await page.frameLocator("//frame[@src='/frame_top']").locator("//*[contains(text(),'MIDDLE')]").innerText()

    console.log("middleFrameText :",middleFrameText)
});