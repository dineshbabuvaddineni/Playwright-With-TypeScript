/*
An iframe (short for "inline frame") is an html element that allows you to embed another html documnet within the current document.
Iframes are commonly used to embed external content such as videos, maps,or other web pages (as seen here) into web page without affecting the parent document.
*/

import {test, expect} from "@playwright/test";
test("frames demo",async({page})=>{
    await page.goto("https://roboticqa.com/");
    await page.locator("#identifier").fill("standard_user");
    await page.locator("#password").fill("password123");
    await page.locator("button[type='submit']").click();

    await page.getByRole("tab",{name:'Testing Ground'}).click();

    const frames=page.frames();
    console.log("Number of frames:",frames.length);

    //iframe handle
    const parentFrame=page.frameLocator("#test-iframe").frameLocator('iframe[src="/nested-iframe-content.html"]');
    await parentFrame.locator("#popup-text").waitFor();
    await parentFrame.locator("#popup-text").fill("Welcoome to playwright");

    await page.waitForTimeout(3000);

    //total number of frames present on the wepage
    // const frames=page.frames();
    // console.log("Number of frames:",frames.length)

});


// test("frames demo2",async({page})=>{
//     await page.goto("https://ui.vision/demo/webtest/frames/");

//     //total number of frames present on the page
//     const frames=page.frames();
//     console.log("Number of frames:",frames.length);

//     //Approach1 - using page.frame()
//     const frame=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});

//     if(frame){
//         await frame.locator("[name='mytext1']").fill("Hello");
//         //await frame.fill("[name='mytext1']","Hello");
//     }else{
//         console.log("Frame is not available");
//     }
//     await page.waitForTimeout(5000);

//     //Approach 2: Using frameLocator()

//     const inputbox=page.frameLocator("[src='frame_1.html']").locator("[name='mytext1']");
//     inputbox.fill("John");
//     await page.waitForTimeout(5000);

//     //page.frame() vs page.frameLocator() - page.frame() it accepts name and url where as page.frameLocator() accepts ll type of locators
    
// });

// test("inner/child frames demo",async({page})=>{
//     await page.goto("https://ui.vision/demo/webtest/frames/");

//     const frame3=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});

//     if(frame3){
//         await frame3.locator("[name='mytext3']").fill("Welcome");
//         const childFrames=frame3.childFrames();
//         console.log("Child frames inside the frame3:",childFrames.length); //only one child frame exist
//         const radio=childFrames[0].getByLabel("I am a human");
//         await radio.check(); //select radio button
//         await expect(radio).toBeChecked(); //assertion
//     }else{
//         console.log("Frame 3 is not found");
//     }
//     await page.waitForTimeout(5000);  
    
// });





