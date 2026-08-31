import { Given, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, chromium, expect, Page } from "playwright/test";

let browser: Browser, page: Page

let context

setDefaultTimeout(30 * 1000)


Given('I launch the browser10', async function () {

    browser = await chromium.launch({

        headless: false,
        args: ["--start-maximized"]
    })

    context = await browser.newContext({

        viewport: null
    })

    page = await context.newPage()
})

Then('I launch the practice Site', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/")
})

Then('I read the data from feature file {string},{string},{string},{string},{string}', async function (Name,  Email, Phone, Adress, Wikipedia) {

    await page.getByPlaceholder('Enter Name').fill(Name)
    await page.getByPlaceholder('Enter EMail').fill(Email)
    await page.getByRole('textbox',{name:'Phone'}).fill(Phone)
    await page.locator("#textarea").fill(Adress)
    await page.locator("//*[@class= 'wikipedia-search-input']").fill(Wikipedia)

   

});

Then('I read the Field1 Field2 and dropwon data from feature file {string},{string},{string},{string},{string}', async function (filed1, Field2,color1,color2,color3) {
    
    let field = page.locator('#field1')
    await field.dblclick()
    await field.clear()
    await field.fill(filed1)

    await page.waitForTimeout(5000)
    await page.locator("#field2").fill(Field2)


      await page.waitForTimeout(5000)
    let cdropdown = await page.locator("#colors>option").allInnerTexts()

    if(cdropdown.includes(color1) && cdropdown.includes(color2) && cdropdown.includes(color3))
    {
        await page.locator("#colors").selectOption([{label :color1},{label : color2},{label:color3}])
    }
    
 
});