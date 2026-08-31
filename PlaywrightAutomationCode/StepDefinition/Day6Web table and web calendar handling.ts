import { Given, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, chromium, Page } from "playwright/test";

let browser: Browser, page: Page

let context

Given('I Launch the browser6', async function () {

    browser = await chromium.launch({

        headless: false,
        args: ["--start-maximized"]
    })

    context = await browser.newContext({

        viewport: null
    })

    page = await context.newPage()
})

Then('I launch the automation practice website', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/")
})

Then('I verify the tables', async function () {

    await page.locator("//h2[@class='title' and text()='Static Web Table']").scrollIntoViewIfNeeded()

    let bTable = await page.locator("//table[@name='BookTable']").isVisible()

    if (bTable == true) {
        console.log("Book table is Visible")

        let actual = "Animesh"

        let expectedText = await page.locator("//table[@name='BookTable']//tr[4]//td[2]").innerText()

        if (actual == expectedText) {
            console.log(expectedText, " is displayed in the web table")
        }
        else {

            console.log(expectedText, " is not displayed in the web table")
        }

    }
    else {
        console.log(" web table is not displayed in the web page ")
    }

})




Then('I verify the webtable dynamicway', async function () {
    let bTable = await page.locator("//table[@name='BookTable']").isVisible()

    if (bTable == true) {
        console.log("Book table is Visible")
        await page.locator("//h2[@class='title' and text()='Static Web Table']").scrollIntoViewIfNeeded()

        let rows = await page.locator("//table[@name='BookTable']//tr").all()

        if (rows.length > 0) {
            console.log("Web table have rows")
            for (let i = 2; i <= rows.length; i++) {
                let columns = await page.locator("//table[@name='BookTable']/tbody/tr[" + i + "]/td").all()
                if (columns.length > 0) {
                    console.log("Web table have coumns")

                    for (let j = 1; j <= columns.length; j++) {
                        let expectedText = "Java"
                        let actualText = await page.locator("//*[@name='BookTable']/tbody/tr[" + i + "]/td[" + j + "]").innerText()

                        if (actualText.includes(expectedText)) {
                            console.log(expectedText, " is displayed in the web table in row no :", i, " and column number is :", j)
                        }
                    }
                }
                else {
                    console.log("Web table not have columns")
                }
            }
        }
        else {
            console.log("Web table not have rows")
        }
    }
    else {
        console.log("Book table is Not Visible")
    }




})

Then('I verify the Headers dynamic way', async function () {
    await page.locator("//h2[@class='title' and text()='Static Web Table']").scrollIntoViewIfNeeded()

    let bTable = await page.locator("//table[@name='BookTable']").isVisible()

    if (bTable == true) {
        console.log("Web table is visible")

        let rows = await page.locator("//table[@name='BookTable']/tbody/tr").all()

        if (rows.length > 0) {
            console.log("Web table have rows ")

            for (let i = 1; i <= rows.length; i++) {
                if (i == 1) {
                    let coloumns = await page.locator("//table[@name='BookTable']/tbody/tr[" + i + "]//th").all()
                    if (coloumns.length > 0) {
                        console.log("Web element have coloumns")

                        for (let j = 1; j <= coloumns.length; j++) {
                            let headerText = await page.locator("//table[@name='BookTable']/tbody/tr[" + i + "]//th[" + j + "]").innerText()

                            console.log("headerText is: ", headerText)
                        }
                    }
                    else {
                        console.log("Web element not have coloumns")
                    }
                }
            }
        }
        else {
            console.log("Web element not have rows")
        }
    }
    else {
        console.log("Web table is not visible")

    }

})


Then('I verify the web calender', async function () {

    await page.locator("input#datepicker").scrollIntoViewIfNeeded()

    await page.locator('input#datepicker').click()

    let calendarUi = await page.locator("table[class='ui-datepicker-calendar']").isVisible()

    if (calendarUi == true) {
        console.log("Calendar UI is visible in the Website")

        let expectedDate = "31"

        let actualDate = await page.locator("//*[@class='ui-datepicker-calendar']/tbody/tr[6]/td[2]").innerText()

        if (expectedDate == actualDate) {
            console.log(expectedDate, " is displayed in the web calendar")

            await page.locator("//*[@class='ui-datepicker-calendar']/tbody/tr[6]/td[2]").click()
        }
        else {
            console.log(expectedDate, " is not displayed in the web calendar")

        }
    }
    else {
        console.log("Calendar UI is not visible in the Website")
    }


});



Then('I verify the web calender static way2', async function () {

    await page.locator("input#datepicker").scrollIntoViewIfNeeded()

    await page.locator("input#datepicker").click()

    let calenUI = await page.locator("//*[@class='ui-datepicker-calendar']").isVisible()

    if (calenUI == true) {
        console.log("Calendar UI is visible in the Website")
        let expectedDate = "25"

        let actualdDate = await page.locator("//*[@class='ui-datepicker-calendar']/tbody/tr[5]//td[3]").innerText()

        if (expectedDate == actualdDate) {
            console.log(expectedDate, " is displayed in the web calendar")

            await page.locator("//*[@class='ui-datepicker-calendar']/tbody/tr[5]//td[3]").click()
        }
        else {
            console.log(expectedDate, " is displayed in the web calendar")
        }
    }
    else {
        console.log("Calendar UI is not visible in the Website")

    }



});


Then('I verify the dynamic webtable', async function () {

    await page.getByText("Dynamic Web Table").scrollIntoViewIfNeeded()

    let dynamicTable = await page.locator("//table[@id='taskTable']").isVisible()

    if (dynamicTable == true) {
        console.log("Dynamic table is visible")

        let rows = await page.locator("//table[@id='taskTable']//tbody/tr").all()

        for (let r = 1; r <= rows.length; r++) {
            let name = page.locator("//table[@id='taskTable']//tbody/tr[" + r + "]//td[1]")

            if ((await name.innerText()).match("Chrome")) {
                let cpuLoad = page.locator("//td[normalize-space()='Chrome']//following-sibling::*[contains(text(),'%')]").innerText()
                let chromload = page.locator("//strong[@class='chrome-cpu']").innerText()

                console.log("Both Loads :", "Cpu Load :", await cpuLoad, "ChroumLoad:", await chromload)

                if ((await cpuLoad).trim() == (await chromload).trim()) {
                    console.log("Both the loads are matched")
                }
                else {
                    console.log("Both the loads are not matched")
                }
            }




        }




    }



})


Then('I close the browser6', async function () {

    await page.waitForTimeout(6000)
    await page.close()
});