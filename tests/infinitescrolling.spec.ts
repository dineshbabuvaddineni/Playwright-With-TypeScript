import {test, expect} from '@playwright/test';

test("Infinitescrolling",async({page})=>{

    test.slow(); 
    //default wait time in playwright is 30s or 3000ms
    //test.slow() - it triples te default time value (.i.e, 9000ms)

    await page.goto('https://www.booksbykilo.in/new-books?pricernage=201to500');

    let previousHeight=0;
    while(true){
        

        //scroll down the page
        await page.evaluate(()=>{
            window.scrollTo(0,document.body.scrollHeight);
        })

        //wait for new content to load
        await page.waitForTimeout(1500);

        const currentHeight=await page.evaluate(()=>{
            return document.body.scrollHeight;
        })
        console.log("Previous Height",previousHeight);
        console.log("Current Height",currentHeight);

        if(currentHeight===previousHeight){
            break;
        }
        previousHeight=currentHeight;
    } 
    console.log("Reached end of the page");
})