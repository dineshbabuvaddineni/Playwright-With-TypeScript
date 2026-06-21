/*
All locators in playwright by default work with elements in shadow DOM.
The execptions are:
Locating by Xpath does not place shadow roots.
*/

import {test,expect} from "@playwright/test";

test('shadow dom',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const shadow_ele1=await page.locator("span.info");
    console.log(await shadow_ele1.textContent());
    await expect(shadow_ele1).toContainText("Mobiles");
    await page.waitForTimeout(3000);

    //Find nested shadow dom
    const shadow_ele2=await page.locator("#nested_shadow_content>div");
    console.log(await shadow_ele2.textContent());
    await expect(shadow_ele2).toContainText("Laptops");
    await page.waitForTimeout(3000);
});

test.only('nested shadow dom',async({page})=>{
    await page.goto("https://shop.polymer-project.org/");

    await page.locator("a[aria-label=\"Men's Outerwear Shop Now\"]").click();
    await page.waitForTimeout(3000);

    const productsFound=await page.locator('div.title').all();
    console.log("Number of products found:", productsFound.length);

    expect(productsFound.length).toBe(16);
    await page.waitForTimeout(3000);

})