import {test,expect,Locator} from "@playwright/test"

test("Autosuggest dropdown",async({page})=>{

    await page.goto("https://www.flipkart.com/duplicate/p/itmd4jmugfhrutgc");
    await page.waitForTimeout(3000);

    await page.locator("input[name='q']").first().fill("smart");// search text
    await page.waitForTimeout(2000);

    //Get all the suggested options ----> ctrl+shift+p on DOM--> emulate focused page
    const options:Locator=page.locator("ul>li");
    const count =await options.count();
    console.log("Number of suggested options:",count);

    //printing all the suggested options in the console

    for(let i=0;i<count;i++){
        // const option=await options.nth(i).innerText();
        const option=await options.nth(i).textContent();
        console.log("element option:",i,":",option);
    }

    //select/click on the smartphone option

    for(let i=0;i<count;i++){
        const text=await options.nth(i).innerText();
        if(text==='smartphone'){
            await options.nth(i).click();
            break;
        }
    }

    await page.waitForTimeout(2000);

    




});