import {test,expect} from '@playwright/test';

/*Tracing can be done in three ways
1) Using playwright.config.ts --> trace file will added html report. If we want to view the trace file, then we can click on the trace link in the html report.
2) using command
    npx playwright test MediaKeyStatusMap.spec.ts --trace on

    trace file will added html report. If we want to view the trace file, then we can click on the trace link in the html report.
3) code (programmatically)
     context.tracing.start({screenshots: true, snapshots: true});
     context.tracing.stop({path:'trace.zip'});

     externally we can view the trace file using command
     npx playwright show-trace trace.zip

     trace.playwright.dev is the official site to view the trace file.

     To view trace file(3 ways)
     --------------------------
     1) From html file --> click on trace.zip
     2)through command - npx playwright show-trace trace.zip
     3) Using utility --> https://trace.playwright.dev/ (drag and drop/upload trace.zip file)
*/



test.only('tracing test',async ({page,context})=>{
    await context.tracing.start({screenshots: true, snapshots: true});
    await page.goto('https://demoblaze.com/index.html');
    await page.getByRole('link',{name:'Log in'}).click();
    await page.locator("#loginusername").fill('pavan01');
    await page.locator("#loginpassword").fill('test@123'); //provide wrong password for onfailure screeshot
    await page.getByRole('button',{name:'Log in'}).click();
    await expect(page.getByRole('link',{name: 'Log out'})).toBeVisible();
    await expect(page.locator('#nameofuser')).toContainText('Welcome pavan01');
    await context.tracing.stop({path:'trace.zip'});
});