import {test,expect,Page} from '@playwright/test';

test("handle popups",async({browser})=>{
    const context=await browser.newContext({httpCredentials:{username:'admin',password:'admin'}}); //create Context
    const page=await context.newPage();

    //https://the-internet.herokuapp.com/basic_auth
    //https://username:password@the-internet.herokuapp.com/basic_auth

    //Approach1: directly pass login along with url
    // await page.goto("https://the-internet.herokuapp.com/basic_auth");
    // await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    // await page.waitForLoadState(); //wait for page load completely
    // await expect(page.locator('text=Congratulations')).toBeVisible();
    // await page.waitForTimeout(5000);

    //Approach 2: Pass the login along with browser context

    await page.goto("https://the-internet.herokuapp.com/basic_auth");
    await page.waitForLoadState(); //wait for page load completely
    await expect(page.locator('text=Congratulations')).toBeVisible();
    await page.waitForTimeout(5000);



})