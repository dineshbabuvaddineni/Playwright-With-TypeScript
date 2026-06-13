import {test,expect,Page,chromium,firefox,webkit} from "@playwright/test";

//Browser -----> Context ----->Pages

//Browser ----->Chromium, firefox, webkit

//Contexts -----> We can have multiple contexts for multiple users/apps for the same browser
                //Provide a way to operate multiple independent browser sessions.

//Page ----> New tab, window, popup

test("Browser context demo",async()=>{
    const browser=await chromium.launch();
    //const browser=await firefox.launch();
    //const browser=await webkit.launch();
    const context=await browser.newContext();

    //Creating two pages
    const page1=await context.newPage();
    const page2=await context.newPage();

    await page1.goto("https://testautomationpractice.blogspot.com/");
    await expect(page1).toHaveTitle("Automation Testing Practice");

    await page2.goto("https://www.selenium.dev/");
    await expect(page2).toHaveTitle("Selenium");

    await page1.waitForTimeout(5000);
    await page2.waitForTimeout(5000);

})