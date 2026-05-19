import {test,expect} from "@playwright/test";
// test function is used to create our test cases

// expect is the function used for assertions 
/*
test("title", ()=>){
    //step1
    //step2
    //step3
}
*/

//fixture - nothing but global variable: page, browser
test("Verify page title",async ({page})=>{
    await page.goto("https://login.pearson.com/v1/piapi/iesui/signin?client_id=6oVj1comRlGtGamiOamwDArIbVgGcKrA&redirect_uri=https%3A%2F%2Fplus.pearson.com%2F&nonce=123454321&prompt=login&login_success_url=https%3A%2F%2Fplus.pearson.com%2F%3FiesCode%3DA5DWJIr7BT");
    let title:string=await page.title();
    console.log("Title:",title);
    await expect(page).toHaveTitle("Sign in  |  Pearson+");
})