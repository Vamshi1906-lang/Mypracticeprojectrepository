/* Scenario: Launch the facebook application
Given I Launch the browser
Then Iam launching the facebook application
And I close the browser
 */

import {Given,Then} from '@cucumber/cucumber'

import { Browser, chromium, Page } from 'playwright/test'

let browser:Browser
let page:Page
let context

Given('I Launch the browser',async function(){

    browser = await chromium.launch({

        headless : false,
        args : ['--start-maximized']
    })

    context = await browser.newContext({

        viewport : null
    })

    page = await context.newPage()
})

Then('Iam launching the facebook application',async function() {

    await page.goto("https://www.facebook.com/")
    
})

Then('I close the browser',async function(){

    await page.close()
})

Then('Iam Launching the Chatgpt application', async function () {
  await page.goto("https://chatgpt.com/")
}); 