
/*
open app  --beforeAll()

login --beforeEach()
    find products
logout --afterEach()

login
    add product to cart
logout

closeapp -- afterAll()
*/

import {test,expect,Page} from '@playwright/test';

let page:Page;

test.beforeAll("open app",async({browser})=>{
    page=await browser.newPage();
    await page.goto("https://demoblaze.com/index.html");
})

test.afterAll("closing App",async({page})=>{
    await page.close();
})



