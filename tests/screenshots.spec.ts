import {test,expect} from '@playwright/test'

test('screenshots demo',async ({page})=>{
    await page.goto('https://demowebshop.tricentis.com/')
    const timestamp=Date.now();
    //Page screenshot
    //await page.screenshot({path:'screenshots/'+'homepage_'+timestamp+'.png'})

    //Full page screenshot
    //await page.screenshot({path:'screenshots/'+'fullpage_'+timestamp+'.png',fullPage:true})

    //Element screenshot
    // const logo=page.locator("img[alt='Tricentis Demo Web Shop']");
    // logo.screenshot({path:'screenshots/'+'fullpage'+timestamp+'.png'});
    //await page.locator("img[alt='Tricentis Demo Web Shop']").screenshot({path:'screenshots/'+'logo_'+timestamp+'.png'});
    
    //Section screenshot
    //await page.locator(".product-grid.home-page-product-grid").screenshot({path:'screenshots/'+'Featured products'+timestamp+'.png'});
});
 
//capture the screenspt by applying global settings in config file. If we add screenshot option in config file, then we don't need to write screenshot code in test file. It will automatically take screenshot on failure of test case.
test.only('screenshots from config',async ({page})=>{
    await page.goto('https://demoblaze.com/index.html');
    await page.getByRole('link',{name:'Log in'}).click();
    await page.locator("#loginusername").fill('pavan01');
    await page.locator("#loginpassword").fill('test@123x'); //provide wrong password for onfailure screeshot
    await page.getByRole('button',{name:'Log in'}).click();
    await expect(page.getByRole('link',{name: 'Log out'})).toBeVisible();
    await expect(page.locator('#nameofuser')).toContainText('Welcome pavan01');

    // If we add screenshot option in config file, then we don't need to write screenshot code in test file. It will automatically take screenshot on failure of test case.
    // If we add screenshot code in test file, then it applicable for that test case only. If we add screenshot option in config file, then it applicable for all the test cases.
    // By default the screenshots get stored in the test-results folder. If we want to store the screenshots in different folder, then we can add the path in config file.
    //If we mention screenshot option in config file the old screenshots will be deleted and new screenshots will be stored in the test-results folder. If we want to keep the old screenshots, then we can add the path in config file.


    //Video recording is also available in playwright. If we add video option in config file, then it will automatically take video on failure of test case.
    //on : when we want to take video for all the test cases, both on pass and failure. 
    //off: when we don't want to take video,
    //retain-on-failure: when the test case fails it captures the video. if test case fails for n times it captures n number of times
    //on-first-retry: when the test case fails for the first time it captures the video
    //retry-with-video: when the test case fails it captures the video. if test case fails for n times it captures n number of times. If we want to capture video for all the test cases, both on pass and failure, then we can add video option in config file.
    //By default the videos get stored in the test-results folder. If we want to store the videos in different folder, then we can add the path in config file.
    //If we mention video option in config file the old videos will be deleted and new videos will be stored in the test-results folder. If we want to keep the old videos, then we can add the path in config file.

    //When we add screenshot code programatically we canot add that to html report. If we add screenshot option in config file, then it will be added to html report.
    // off- when we don't want to take screenshot,
    // on- when we want to take screenshot for all the test cases, both on pass and failure. when we want to take screenshot for failed test cases.
    // onfirst-failure- when the test case fails for the first time it captures the screenshot
    //only on failure- when the test case fails it captures the screenshot. if test case fails for n times it captures n number of times
});


