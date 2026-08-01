
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

//Its recommned to use hooksoutside the group, so that it can be used for all the tests in the group. If we use hooks inside the group, then it will be applicable only for the tests inside that group.
import {test,expect,Page} from '@playwright/test';

let page:Page;

test.beforeAll("open app",async({browser})=>{
    page=await browser.newPage();
    await page.goto("https://demoblaze.com/index.html");
})

test.afterAll("closing App",async()=>{
    await page.close();
})

test.beforeEach("login",async()=>{
    await page.locator('#login2').click();
    await page.locator("#loginusername").fill("pavan01");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("button[onclick='logIn()']").click();
    await page.waitForTimeout(3000);
})

test.afterEach('Logout',async()=>{
    await page.locator('#logout2').click();
})

test.describe("My Group",async()=>{
    test('Find No of products',async()=>{
    const products=page.locator('#tbodyid .hrefch');
    const count=await products.count();
    console.log('Number of products:',count);
    await expect(products).toHaveCount(9);
    });

    test('add products to the cart',async()=>{
        await page.locator("text='Samsung galaxy s6'").click();

        //handle alert before the click
        page.once('dialog',async(dialog)=>{  //we can use page.on also
            expect(dialog.message()).toContain('Product added');
            await dialog.accept();
        });

        await page.locator('.btn.btn-success.btn-lg').click();
    });

});

 




