import {test,expect} from '@playwright/test'

test('Booking.com Date picker test -Check-in and check-out',async({page})=>{
    await page.goto('https://www.booking.com/searchresults.en-gb.html?aid=311984&label=2-bedroom-condo-units-xF9E1JkinGBiWKkVGqLclAS715501630247%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-2404387034816%3Alp9226922%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YbSsBl3MCvHsD8UKUHIRFxY&gclid=Cj0KCQjwlqTRBhCBARIsANrkrxjj2GOhYQ-yhQljZFG5Q8G5aQ7vHdT3kfvnbsiGmIq2lJzYzLzyug8aAjZBEALw_wcB&highlighted_hotels=7162607&redirected=1&city=-2428456&hlrd=no_dates&source=hotel&expand_sb=1&keep_landing=1&sid=b256b0d17474678f3083c35daf7b46c4');

    //click on the date picker field to open calendar
    await page.getByTestId('Searchbox-dates-container').click();

    //===check-in Date selection ===
    let checkinYear:string ="2026";
    let checkInMonth:string ="June";
    let checkInDay:string="20";

    //Navigate through the calendar to find the desired check-in month and year

    while(true){
        const checkInMonthYear=await page.locator("h3[aria-live='polite']").nth(0).innerText();
        const currentMonth=checkInMonthYear.split(" ")[0] //February 2026
        const currentYear=checkInMonthYear.split(" ")[1];

        if(currentMonth === currentMonth && currentYear=== checkinYear){
            break;
        }else{
            await page.locator('button[aria-label="Next month"]').click();
        }
    }

    //select the specific check in date
    let allDates=await page.locator('tableb8fcb0c66a tbody').nth(0).locator('td').all();
    let checkinDateSelected=false;

    for(let date of allDates){
        const dateText=await date.innerText();
        if(dateText===checkInDay){
            await date.click();
            checkinDateSelected=true;
            break;
        }

    }

    //Assertion to confirm check in date was selected
    expect(checkinDateSelected).toBeTruthy();

    // ==== check-out Date selection ====
     let checkOutYear:string ="2026";
    let checkOutMonth:string ="July";
    let checkOutDay:string="20";

    //Navigate through the calendar to find the desired check-in month and year

    while(true){
        const checkOutMonthYear=await page.locator("h3[aria-live='polite']").nth(1).innerText();
        const currentMonth=checkOutMonthYear.split(" ")[0] //February 2026
        const currentYear=checkOutMonthYear.split(" ")[1];

        if(currentMonth === checkOutMonth && currentYear=== checkOutYear){
            break;
        }else{
            await page.locator('button[aria-label="Next month"]').click();
        }
    }

    //select the specific check in date
    allDates=await page.locator('tableb8fcb0c66a tbody').nth(1).locator('td').all();
    let checkOutDateSelected=false;

    for(let date of allDates){
        const dateText=await date.innerText();
        if(dateText===checkOutDay){
            await date.click();
            checkOutDateSelected=true;
            break;
        }

    }

    //Assertion to confirm check in date was selected
    expect(checkOutDateSelected).toBeTruthy();

    await page.waitForTimeout(3000);
    




    

})
