import {test,expect,Page} from '@playwright/test';

test("handle popups",async({browser})=>{
    const context=await browser.newContext(); //create Context
    const page=await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Multiple popups
    await Promise.all([page.waitForEvent('popup'),await page.locator("#PopUp").click()]);

    const allPopupWindows=context.pages(); //Returns array of pages
    console.log("Number of pages/windows:",allPopupWindows.length); //3

    console.log(allPopupWindows[0].url()); 
    console.log(allPopupWindows[1].url());
    console.log(allPopupWindows[2].url());

    for(const pw of allPopupWindows){
        const title=await pw.title();
        if(title.includes('Playwright')){
            await pw.locator('.generated_Sjon').click();
            await page.waitForTimeout(5000);
        }

    }

    page.waitForTimeout(5000);



})