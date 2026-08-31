import {test,expect,Locator} from "@playwright/test"


test("Verify dynamic Webtable",async ({page})=> {

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("//*[text()='Dynamic Web Table']").scrollIntoViewIfNeeded()

    let taskTable = await page.locator("//table[@id='taskTable']").isVisible()
/* 
    if(taskTable == true)
    {
        let rows = await page.locator("//table[@id='taskTable']/tbody/tr").all()

        for(let i=1;i<=rows.length;i++)
        {
            let name = page.locator("//table[@id='taskTable']/tbody/tr["+i+"]//td[1]")

            if((await name.innerText()).match("Firefox"))
            {
                let diskSpace = await page.locator("//td[normalize-space()='Firefox']//following-sibling::*[contains(text(),'MB/s')]").innerText()
                let FireFoxdisk = await page.locator("//div[@class='display-values']/p[4]").innerText()

                 let actualFirefoxDisk = FireFoxdisk.split(":")[1].trim()

                if(diskSpace == actualFirefoxDisk)
                {
                    console.log("Both Diskspaces for fire fox are Matching :",diskSpace,FireFoxdisk)
                }
                else
                {
                    console.log("Both Diskspaces for fire fox are not Matching :",diskSpace,FireFoxdisk)
                }
                break
            }
           
        }
    }
    */
    let rows = await page.locator("//table[@id='taskTable']/tbody/tr").all()

        for(let i=1;i<=rows.length;i++)
        {
            let name = page.locator("//table[@id='taskTable']/tbody/tr["+i+"]//td[1]")

            if((await name.innerText()).match("Firefox"))
            {
                let diskSpace = await page.locator("//td[normalize-space()='Firefox']//following-sibling::*[contains(text(),'MB/s')]").innerText()
                let FireFoxdisk = await page.locator("//div[@class='display-values']/p[4]").innerText()

                 let actualFirefoxDisk = FireFoxdisk.split(":")[1].trim()

                if(diskSpace == actualFirefoxDisk)
                {
                    console.log("Both Diskspaces for fire fox are Matching :",diskSpace,FireFoxdisk)
                }
                else
                {
                    console.log("Both Diskspaces for fire fox are not Matching :",diskSpace,FireFoxdisk)
                }
                break
            }
           
        }
   

})

