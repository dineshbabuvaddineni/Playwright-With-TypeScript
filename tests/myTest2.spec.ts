import {test,expect} from "@playwright/test";

test("Verify page URL",async ({page})=>{
    await page.goto("https://login.pearson.com/v1/piapi/iesui/signin?client_id=6oVj1comRlGtGamiOamwDArIbVgGcKrA&redirect_uri=https%3A%2F%2Fplus.pearson.com%2F&nonce=123454321&prompt=login&login_success_url=https%3A%2F%2Fplus.pearson.com%2F%3FiesCode%3DA5DWJIr7BT");
    let url:string=await page.url();
    console.log("Url:",url);

    await expect(page).toHaveURL(/login/);
});