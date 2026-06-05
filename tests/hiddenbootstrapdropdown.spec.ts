import {test,expect,Locator} from "@playwright/test"

test("Bootstrap hidden dropdown",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(3000);

    //Login steps
    await page.locator("input[name='username']").fill("Admin");
    await page.locator("input[name='password']").fill("admin123");
    await page.locator('button[type="submit"]').click();

    await page.waitForTimeout(3000);

    //click on the PIM
    await page.getByText('PIM').click();

    //click on job title drop down
    await page.locator('form i').nth(2).click();
    await page.waitForTimeout(3000);

    //capture all the options from dropdown and count
    const options:Locator=page.locator("div[role='listbox'] span");
    const count=await options.count();
    console.log("Total options in dropdown: ",count);
    await page.waitForTimeout(3000);

    //print all the options
    for(let i=0;i<count;i++){
        console.log(await options.nth(i).textContent());
    }
    await page.waitForTimeout(2000);

    //slect/click on option
    for(let i=0;i<count;i++){
        const text=await options.nth(i).innerText();
        if(text==='Automaton Tester'){
            await options.nth(i).click();
            break;
        }
    }

    await page.waitForTimeout(3000);




});