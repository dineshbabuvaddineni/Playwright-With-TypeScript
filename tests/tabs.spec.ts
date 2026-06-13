import {test,expect,chromium} from '@playwright/test';

test("handle tabs",async()=>{
    const browser=await chromium.launch(); //create browser
    const context=await browser.newContext(); //create Context

    //Creating 1 page
    const parentPage=await context.newPage();
    parentPage.goto("https://testautomationpractice.blogspot.com/");

    // context.waitForEvent('page');//pending ,fulfilled,rejected
    // parentPage.locator("button:has-text('New Tab')").click(); //opens new tab/new page
    //We need to execute two statements parallelly
    const[childPage]=await Promise.all([context.waitForEvent('page'),parentPage.locator("button:has-text('New Tab')").click()]);

    //Approach1: switch between pages and getTitles
    const pages=context.pages(); //returns an array
    console.log("Number of pages creted:",pages.length);

    console.log("Titles of the parent page:",await pages[0].title());
    console.log("Title of child page:", await pages[1].title());

    //Approach2:alternate
    console.log("Title of the parent page:", await parentPage.title());
    console.log("Title of the Child Page:",await childPage.title());

    // When to go for which approach

    // if we have only two pages then we go for second appraoch
    // if we have multiple pages then we go for First approach



  


})