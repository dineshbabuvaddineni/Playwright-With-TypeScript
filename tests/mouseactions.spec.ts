import {test,expect} from '@playwright/test';

test('Mouse hover',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const pointme=await page.locator('.dropbtn');
    await pointme.hover();

    const laptops=page.locator('.dropdown-content a:nth-child(2)');
    laptops.hover();

    await page.waitForTimeout(5000);

});

test('Right Click',async({page})=>{
    await page.goto("http://swisnl.github.io/jQuery-contextMenu/demo.html");
    const button=page.locator('span.context-menu-one');
    await button.click({button:'right'}); // this will perform the right click action
    await page.waitForTimeout(5000);
});

test.only('Double Click',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const source=await page.locator('#draggable');
    const dest=await page.locator('#droppable');
    
    //Approach1: mouse hover and drag manually
    // await source.hover();
    // page.mouse.down();
    // await dest.hover();
    // await page.mouse.up();

    //Approach2:

    await source.dragTo(dest);
    
    await page.waitForTimeout(4000);


});
