import {test,expect} from '@playwright/test';

test.beforeEach('launching app',async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/');

});

test('logtest1',async({page})=>{
    await expect(page.locator("img[alt='Tricentis Demo web shop']")).toBeVisible();
})

test('logtest1',async({page})=>{
    await expect(page.title()).toContain('Demo Web Shop');
})
test('logtest1',async({page})=>{
    await page.locator('#small-searchterms').fill('laptop');
    await page.locator('input[value="Search"]').click();
    await expect.soft(page.locator("h2 a").nth(0)).toContainText("laptop",{ignoreCase:true});
})