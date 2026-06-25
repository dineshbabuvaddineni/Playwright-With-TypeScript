import {test, expect} from '@playwright/test';

test('Autowaiting and forcing',async({page})=>{

    test.setTimeout(50000); //50secs
    // test.slow(); //90 secs (default is 30 secs) -->It makes triple the timeout

    await page.goto('https://demowebshop.tricentis.com/');

     //Assertions - Auto wait works
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/",{timeout:10000});
    await expect(page.locator('text=Welcome to our store')).toBeVisible({timeout:10000});

    //for assertions force action not works 

    //Actions- Auto wait works
    await page.locator('#small-searchterms').fill("Laptop",{force:true}); //search box- Force Action(It will not do actionability checks)
    await page.locator('.button-1.search-box-button').click({force:true}); //clicking on search button-Force Action

    // For assertions default time is 5 sec and for actions auto time is 30 sec
    

});