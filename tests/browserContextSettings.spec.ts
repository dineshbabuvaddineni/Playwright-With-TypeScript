import {test, expect, chromium} from '@playwright/test';

//browser--> context -->page
test('browser settings',async()=>{

    //const 
    const browser=await chromium.launch({headless:false}); //runs in headed mode - we can see UI

    //const browser=await chromium.launch({headless:true}); //runs in headless mode - we can't see UI

    const context=await browser.newContext(
        {
           viewport: { width: 700, height: 200 }, // can set at test level or globally in playwright.config.ts
           locale: 'en-US',
           //proxy:{server:'http://myproxy.com:3245'}
           ignoreHTTPSErrors:true

        }
    );
    const page=await context.newPage();
    //await page.goto("https://www.google.com/");
    await page.goto("https://expired.badssl.com/");
    console.log("title of the pages:",await page.title());

    await page.waitForTimeout(7000);
});