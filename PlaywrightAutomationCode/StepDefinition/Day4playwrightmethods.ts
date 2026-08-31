import { Given, Then, setDefaultTimeout } from "@cucumber/cucumber";


import { Browser, chromium, Page, BrowserContext } from "playwright/test";

setDefaultTimeout(30 * 1000)

let browser: Browser, page: Page
let context: BrowserContext
let newTab: Page




Given('I Launch the browser4', async function () {

    browser = await chromium.launch({

        headless: false,
        args: ["--start-maximized"]
    })

    context = await browser.newContext({

        viewport: null
    })

    page = await context.newPage()

});

Then('I launch the TestAutomation practice website', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/")

});

Then('I verify the playwright methods', async function () {

    /*  console.log("==========to refresh the page==========")
     await page.reload() */

    console.log("==========Scroll to the webelement==========")

    await page.getByText('New Tab').scrollIntoViewIfNeeded()



    console.log("==========to click to the web element==========")

    const newTabPromise = context.waitForEvent('page')
    await page.getByText('New Tab').click()
    await page.waitForTimeout(6000)
    let newTab = await newTabPromise
    await newTab.waitForLoadState()
    console.log("New Tab URL:", newTab.url());

    console.log("==========to go to the previous page==========")
    await page.bringToFront();
    await page.waitForTimeout(3000);

    // Go again to SDET-QA Blog
    await newTab.bringToFront();

    await page.waitForTimeout(3000);

    await newTab.close();

    console.log("========to enter text to the textbox===========")
    await page.getByPlaceholder("Enter Name").fill("Vamshi")


    console.log("=============to get more than one web element count=======")

    let followingCount = await page.locator("//div[@class='form-group']//following::input[@type='checkbox']").all()
    console.log("Following Count is :", followingCount.length)

    for (let i = 0; i < followingCount.length; i++) {
        await followingCount[i].click()

    }

    console.log("========to title of the web page===========")

    console.log(await page.title())

    console.log("========to url of the web page===========")
    console.log(page.url())

    console.log("======== to clear the text of a web element===========")

    await page.locator("//input[@id='field1']").scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    await page.locator("//input[@id='field1']").clear()
    await page.locator('//input[@id="field1"]').fill('quality')

    console.log("=============to get the text of  a web element=======")

    let innerText = await page.locator("//h2[text()='Alerts & Popups']").innerText()
    console.log(innerText)

    console.log("=============to right click of  a web element=======")

    await page.locator("//input[@class='wikipedia-search-input']").scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)
    await page.locator("//input[@class='wikipedia-search-input']").click({ button: "right" })

    console.log("=============to get the text from more than one web element=======")
    let text = await page.locator("//input[@class='form-check-input' and @type = 'checkbox']//following-sibling::label").allInnerTexts()
    console.log("Days inner text", text)

    for (let intxt of text) {
        console.log(intxt)
    }

    console.log("2nd way all text contents")

    let text1 = await page.locator("//input[@class='form-check-input' and @type = 'checkbox']//following-sibling::label").allTextContents()
    console.log("Days inner text", text)

    for (let i = 0; i < text1.length; i++) {
        console.log(text1[i])
    }

    console.log("=============drag and drop======")
    let first = page.locator("//div[@id='draggable']")
    let second = page.locator("//div[@id='droppable']")

    await page.waitForTimeout(3000)

    await first.dragTo(second)

    const textLocator = await page.locator("//div[@id='droppable']/p[1]").innerText()
    console.log("After Dropped text : ", textLocator)

    console.log('============== and in playwright================')
    await page.waitForTimeout(3000)

    await page.locator('#phone').and(page.getByPlaceholder("Enter Phone")).fill("9398442641")

    console.log('==============double click of a web element================')

    await page.getByText("START").scrollIntoViewIfNeeded()

    await page.getByText("START").dblclick()

})

Then('I verify the playwright methods2', async function () {

    console.log("======== is visible ========")

    let visible = await page.locator('#female').isVisible()

    if (visible) {

        await page.waitForTimeout(2000)
        await page.locator('#female').click();

    }

    console.log("========== is hidden ==========")

    let hidden = await page.locator("#sunday").isHidden()

    if (hidden == false) {
        await page.locator('#sunday').click()
    }


    console.log("========== is disabled ==========")

    let disabled = await page.locator('#monday').isDisabled()

    if (disabled == false) {
        await page.locator('#monday').click()

    }

    console.log("========== is Enabled ==========")

    let enabled = await page.locator('#tuesday').isEnabled()

    if (enabled == true) {
        await page.locator('#tuesday').click()
    }

    console.log("========== is Editable ==========")

    let editable = await page.locator('#textarea').isEditable()

    if (editable == true) {
        await page.locator('#textarea').fill("vamshi")
    }

    console.log("========== is Checked ==========")

    let checked = await page.locator('#saturday').isChecked()

    if (checked == false) {
        //await page.locator('#saturday').click()

        //await page.locator('#saturday').setChecked(true)
        await page.locator('#saturday').check()
        await page.waitForTimeout(2000)
        await page.locator('#saturday').uncheck()
    }

})


Then('I launch the Myntra application', async function () {

    await page.goto("https://www.myntra.com/")
    await page.waitForTimeout(2000)
})


Then('I verify the playwright methods3', async function () {

    console.log("==========hover==========")

    await page.locator("//a[text()='Kids' and @class ='desktop-main']").hover();

    ////a[text()='Kids' and @class ='desktop-main']//following::ul[2]//li[8]

    const kidsSection = page.locator("//a[text()='Kids' and @class ='desktop-main']//following::ul[2]//li");

    console.log("Kids section count:", await kidsSection.count());

    for (let i = 0; i < await kidsSection.count(); i++) {
        console.log(await kidsSection.nth(i).allTextContents());
    }

    console.log("==========hightlight==========")

    await page.getByPlaceholder("Search for products, brands and more").highlight()

    console.log("==========get attribute==========")

    let getAttribute =  await page.getByPlaceholder("Search for products, brands and more").getAttribute('placeholder')

    console.log('attributeValue of placeholder is :', getAttribute)



})



Then('I close the browser4', async function () {

    await page.waitForTimeout(5000)
    await page.close()

});