import {test,expect} from '@playwright/test'
test.only('screenshots from config',async ({page})=>{
    await page.goto('https://demoblaze.com/index.html');
    await page.getByRole('link',{name:'Log in'}).click();
    await page.locator("#loginusername").fill('pavan01');
    await page.locator("#loginpassword").fill('test@123'); //provide wrong password for onfailure screeshot
    await page.getByRole('button',{name:'Log in'}).click();
    await page.waitForTimeout(8000); 
    await expect(page.getByRole('link',{name: 'Log out'})).toBeVisible();
    await expect(page.locator('#nameofuser')).toContainText('Welcome pavan01')
});