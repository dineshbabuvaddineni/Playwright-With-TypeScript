/*

css(Casacading style sheets)

html+js+css

2 types of css locators:
1)absolute css locator
2)relative css locator

tag with id                    tag#id  or   #id
tag with class                 tag.class  or  .class
tag with any other attribute   tag[attribute=value]   or  [attribute=value]
tag with class and attribute   tag.class[attribute=value]  or .class[attribute=value]

page.locator(css/xpath)

*/

import {test,expect,Locator} from "@playwright/test"

test("Verify CSS Locators", async({page})=> {
    await page.goto("https://demowebshop.tricentis.com/");

    //tag#id
    // const searchbox:Locator =page.locator("input#small-searchterms");
    // await searchbox.fill("T-shirts");

    // await expect(page.locator("input#small-searchterms")).toBeVisible();
    // await page.locator("input#small-searchterms").fill("T-shirts"); 
    
    // tag.class
    // await page.locator("input.search-box-text").fill("T-shirts");
    // await page.locator(".search-box-text").fill("T-shirts");

    //tag[attribute=value]
    //await page.locator("input[name=q]").fill("T-shirts");
    //await page.locator("[name='q']").fill("T-Shirts");


    // tag.class[attribute=value]
    //await page.locator("input.search-box-text[name='q']").fill("T-shirt");
    //await page.locator(".search-box-text[name='q']").fill("T-shirt");
    await page.waitForTimeout(5000);

    


})