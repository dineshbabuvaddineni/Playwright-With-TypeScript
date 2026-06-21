import {test, expect, chromium} from '@playwright/test';

//browser--> context -->page
test('browser settings',async()=>{

    //const 
    const browser=await chromium.launch({headless:false}); //runs in headed mode - we can see UI

    const context=await browser.newContext();
    const page=await context.newPage();
    context.addCookies( [
                            {name:'mycookie',value:'123456',url:'https://testautomationpractice.blogspot.com/'}
                        ]
                    );
    console.log("cookies added.....");
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Get the details of cookie by name
    const allthecookiesadded=await context.cookies();

    const retrievedcookie=allthecookiesadded.find((i) => i.name ==='mycookie');
    console.log("printing cookie details:", retrievedcookie);
    expect(retrievedcookie?.value).toBe('123456');
    expect(retrievedcookie).toBeDefined();

    //2)Get all the cookies created by browser
    console.log("Total number of cookies created:",allthecookiesadded.length); //2
    expect(allthecookiesadded.length).toBeGreaterThan(0);

    console.log("Printing all the cookies:");

    for(const cookie of allthecookiesadded){
        console.log(`${cookie.name}:${cookie.value}`);
    }

    //3)clear all the cookies frpm browser
    await context.clearCookies();

    //4)Verify the number of cookies - 0
    const allcookies=await context.cookies();
    console.log("Number of cookies after clearing:",allcookies.length);
    expect(allcookies.length).toBe(0);

    await page.waitForTimeout(7000);
});