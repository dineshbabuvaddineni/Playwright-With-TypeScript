import {test,expect,Locator} from "@playwright/test";

test('single select dropdown',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //1. select option from the dropdown (4 ways)
    //await page.locator("#country").selectOption("Germany"); //visible text
    //await page.locator("#country").selectOption({value:'uk'}); //by using value attribute
    //await page.locator('#country').selectOption({label:'India'}); //by using value label
    await page.locator('#country').selectOption({index:3}); //by using index

    await page.waitForTimeout(3000);

    //2) check number of options in the dropdown(count)
    const dropdownOptions:Locator=page.locator('#country>option');
    await expect(dropdownOptions).toHaveCount(10);

    //3)check an option present in the dropdown(count)
    const optionsText:string[]= (await dropdownOptions.allTextContents()).map(text=>text.trim());
    console.log(optionsText)

    expect(optionsText).toContain('Japan'); //check if the array contain "japan"




})