import {test, expect} from '@playwright/test';

test('Autowaiting and forcing',async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/');

     //Assertions - Auto wait works
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/");
    await expect(page.locator('text=Welcome to our store')).toBeVisible();

    //Actions- Auto wait works
    await page.locator('#small-searchterms').fill("Laptop",{force:true}); //search box- Force Action(It will not do actionability checks)
    await page.locator('.button-1.search-box-button').click({force:true}); //clicking on search button-Force Action

    // For assertions default time is 5 sec and for actions auto time is 30 sec
    

});