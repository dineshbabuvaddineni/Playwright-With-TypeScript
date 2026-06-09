import {test,expect,Locator} from "@playwright/test"

test("JQuery datepicker",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dateInput:Locator=page.locator("#datepicker");
    expect(dateInput).toBeVisible();

    //Approach1: using fill() method
    // dateInput.fill("06/20/2025"); //mm/dd/yyyy

    //Approach2: using date picker
    await dateInput.click(); //opens the datepicker

    //select target date
    const year='2025';
    const month='May';
    const date='10'; 

    while(true){
        const currentMonth=await page.locator('.ui-datepicker-month').textContent();
        const currentYear=await page.locator('.ui-datepicker-year').textContent();

        if(currentMonth===month && currentYear===year){
            break;
        }

        //Future
        //await page.locator(".ui-datepicker-next").click();

        //Past
        await page.locator('.ui-datepicker-prev').click();

    }

    const allDates=await page.locator(".ui-datepicker-calendar td").all();
    for(let dt of allDates){
        const dateText=await dt.innerText();
        if(dateText===date){
            await dt.click();
            break;
        }
    }

    await page.waitForTimeout(5000);


});