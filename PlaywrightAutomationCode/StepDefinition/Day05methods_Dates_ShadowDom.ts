import { Given, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, chromium, Page } from "playwright/test";

let browser: Browser, page: Page
let context

Given('I launch the browser5', async function () {

    let browser = await chromium.launch({

        headless: false,
        args: ['--start-maximized']

    })

    let context = await browser.newContext({

        viewport: null
    })

    page = await context.newPage()
})

Then('I launch the TestAutomation practice websitee', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/")
})

Then('I verify the methods and shadowdom', async function () {

    console.log("==========1st way to clear the text in the textbox==========")
    await page.locator('#field1').scrollIntoViewIfNeeded()
    await page.locator('#field1').clear()
    await page.waitForTimeout(3000)
    await page.locator('#field1').fill("Vamshi Mudunoori")

    console.log("==========1st way to clear the text in the textbox==========")
    await page.locator('#field1').fill("")
    await page.locator('#field1').fill("krishna")

    console.log("==========3rd way to clear the text in the textbox==========")
    await page.locator('#field1').press('Control+A')
    await page.keyboard.press('Delete')
    await page.keyboard.up('Control')

    await page.keyboard.insertText("VamshiKrishna")

    console.log("==========4th way to enter the text in the textbox==========")
    await page.locator('#field1').clear()
    await page.locator('#field1').pressSequentially("GoodMorning   ")
    await page.locator('#field1').pressSequentially("Everyone")


    console.log("==========dropdown==========")
    await page.waitForTimeout(3000)
    await page.locator("#colors").scrollIntoViewIfNeeded()
    await page.locator("#colors").selectOption('Red')
    await page.locator("#colors").selectOption(['Red', 'Blue', 'Green'])

    let dropDown = await page.locator("#colors > option").allTextContents()

    dropDown = dropDown.map(text => text.trim())
    console.log("Dropdown inner Text :", dropDown)

    for (let drp of dropDown) {
        console.log(drp)
    }

    await page.locator("#colors").selectOption([{ index: 3 }, { index: 4 }, { index: 5 }])
    await page.locator("#country").selectOption("India")


    console.log("==========screenshots==========")

    console.log("==========1st way to take the web element level screenshot==========")

    /* await page.locator("#name").scrollIntoViewIfNeeded()
    await page.locator("#name").fill("Advika")

    await page.waitForTimeout(3000)
    await page.locator("#name").screenshot({ path: 'WebElementLevelScreenshot.png' })

     console.log("==========2nd way to take the upto screen length level screenshot==========")
     await page.screenshot({path :'./PlaywrightAutomationCode/Screrenshot/uptoScreenLength.jpg' })

     console.log("==========3rd way to take the full page screenshot==========")
     await page.screenshot({path :'./PlaywrightAutomationCode/Screrenshot/Fullscreenshot.jpg',fullPage:true}) */

    console.log("==========upload a file==========")

    console.log("==========single file upload==========")

    await page.locator('#singleFileInput').scrollIntoViewIfNeeded()
    await page.locator('#singleFileInput').setInputFiles('WebElementLevelScreenshot.png')

    console.log("==========Multiple file upload==========")

    await page.locator('#multipleFilesInput').setInputFiles(['C:/Software Courses/Quality Thought Playwright/PlaywrightAutomationCode/Screenshot/Fullscreenshot.jpg','C://Software Courses//Quality Thought Playwright course//Playwright//6th Class_Playwright methods_Dates_ShadowDom_CrossBrowserTesting_Part2//6th Class.docx'])

    await page.locator("//button[text()='Upload Multiple Files']").click()

})

Then('Generate Dates', async function () {
    const todaysDate = new Date()
    console.log("Today Date is:",todaysDate)

    const todaysDateIst = todaysDate.toLocaleDateString()
    console.log("TodaysDateIst :",todaysDateIst)

    let pastdate = new Date(todaysDate)
    pastdate.setDate(pastdate.getDate() - 10)
    console.log(pastdate)

    let pastdateIst = pastdate.toLocaleDateString()
    pastdate.setDate(pastdate.getDate() - 10)
    console.log("pastdateIst",pastdateIst)

    let futureDate = new Date(todaysDate)
    futureDate.setDate(futureDate.getDate() +10)
    console.log("futureDate :",futureDate)

    
    let futureDateIst = futureDate.toLocaleDateString()
    futureDate.setDate(futureDate.getDate() +10)
    console.log("futureDateIst :",futureDateIst)

    const completeMonth = todaysDate.toLocaleDateString('en-us',{month : 'long'})
    console.log("Complete month is :",completeMonth)

    const year = todaysDate.getFullYear()
    console.log("Full Year :",year)

    const month = todaysDate.getMonth() + 1
    console.log("Month :",month)

    const date = todaysDate.getDate()
    console.log("Todays date :",date)

    const newdate = year + '-' +month +'-'+date
    console.log(newdate)
  
})

Then('I launch the selectorshub website',async function(){

    await page.goto('https://practice.expandtesting.com/shadowdom')
    
})

Then('I toggle the shadowdom elements',async function(){

    await page.getByRole('button', { name: /Here's a basic button example\./i}).click()

    await page.locator("#shadow-host").getByRole('button', { name: /This button is inside a Shadow DOM\./i}).click()


})



Then('I close the browser5', async function () {

    await page.waitForTimeout(4000)

    await page.close()
})
