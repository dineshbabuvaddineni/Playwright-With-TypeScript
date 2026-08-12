import {test,expect} from '@playwright/test';

test('test1',async({page})=>{
    //await page.goto("https://demowebshop.tricentis.com/");
    await page.goto("https://demowebshop.tricentis.com/register");

    //Approach1
    //expect(await page.screenshot()).toMatchSnapshot("homepage.png");

    //Approach2
    //await expect(page).toHaveScreenshot();

    //Compare the snapshot of the element
    const logo=page.locator("img[alt='Tricentis Demo Web Shop']");
    //expect(await logo.screenshot()).toMatchSnapshot("logo.png");
    await expect(logo).toHaveScreenshot();

    

})
