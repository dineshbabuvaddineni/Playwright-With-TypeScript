/*
Methods
down
insertText
press
type
up


await page.keyboard
*/

import {test,expect} from 'playwright/test';
test('keyboard actions',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/"); 
    const input1=page.locator('#input1');

    //1) . focus on input 1
    await input1.focus();
    //await input1.click();

    //2) provide the text input 1
    await page.keyboard.insertText("welcome");

    //3) ctrl+A - select the text text from input1
    // await page.keyboard.down('Control');
    // await page.keyboard.press('A');
    // await page.keyboard.up('Control');

    await page.keyboard.press('Control+A');

    //4) ctrl+c  -copy the text
    // await page.keyboard.down('Control');
    // await page.keyboard.press('C');
    // await page.keyboard.up('Control');

    await page.keyboard.press('Control+C');

    //5) Press Tab two times
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    //6) ctrl+v - paste the text in input2
    // await page.keyboard.down('Control');
    // await page.keyboard.press('V');
    // await page.keyboard.up('Control');
    await page.keyboard.press('Control+V');

    //7) Press TAB - 2 times
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    //8) ctrl+v -paste the text in input 3
    // await page.keyboard.down('Control');
    // await page.keyboard.press('V');
    // await page.keyboard.up('Control'); 

    await page.keyboard.press('Control+V');
    await page.waitForTimeout(5000);
})