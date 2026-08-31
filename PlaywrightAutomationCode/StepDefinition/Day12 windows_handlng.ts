import { Given, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, expect, Page } from "playwright/test";
let browser: Browser, page: Page
let context: BrowserContext

let page1: Page;
let page2: Page;
let page3: Page;


setDefaultTimeout(30 * 1000)
Given('I launch the browser12', async function () {

  browser = await chromium.launch({

    headless: false,
    args: ["--start-maximized"]
  })

  context = await browser.newContext({
    viewport: null
  })

  page1 = await context.newPage()
  page2 = await context.newPage()
  page3 = await context.newPage()

});


Then('I verify the Windowhandle', async function () {

  let allPages = context.pages()
  console.log("All Pages count :", allPages.length)

  await page1.goto("https://testautomationpractice.blogspot.com/")

  await expect(page1).toHaveTitle("Automation Testing Practice")

  await page2.goto("https://login.salesforce.com/")
  await expect(page2).toHaveTitle("Login | Salesforce")

  await page3.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  await expect(page3).toHaveTitle("OrangeHRM")

  await page3.getByPlaceholder("Username").fill("Admin")
  await page3.getByPlaceholder("password").fill("admin123")
  await page3.getByRole('button', { name: ' Login ' }).click()

  await page3.waitForTimeout(5000)

  await allPages[0].bringToFront()
  await page1.locator("//*[text()='New Tab']").scrollIntoViewIfNeeded()
  const newPagePromise = context.waitForEvent('page');
  await page1.locator("//*[text()='New Tab']").click()
  const page4 = await newPagePromise
  await page4.waitForLoadState()


  allPages = context.pages()

  console.log("allPagesCount is :", allPages.length) //4
  await page3.waitForTimeout(5000)

  await context.close()

})
