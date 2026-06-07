import {test,expect,Locator} from '@playwright/test'

test("Comparing methods",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");

    const products:Locator=page.locator('.product-title'); //6

    await page.waitForTimeout(3000);

    //1)innerText() vs textContent()

    /*innerText() - returns the visible text of an element, excluding hidden elements and 
    extra whitespace. It also processes line breaks and other formatting, providing a more
    user-friendly representation of the text as it appears on the page.*/

    /*textContent() - returns the raw text content of an element, including hidden elements 
    and extra whitespace. It does not process line breaks or formatting, providing a more 
    literal representation of the text as it exists in the DOM.*/

    // console.log(await products.nth(1).innerText()); 
    // console.log(await products.nth(1).textContent());

    const count=await products.count();
    console.log(count);
    for(let i=0;i<count;i++){
        // const productName=await products.nth(i).innerText();
        //console.log(productName);
        // const productName: string|null=await products.nth(i).textContent();
        // console.log(productName);

        const productName: string|null=await products.nth(i).textContent();
        console.log(productName?.trim());
    }

    //2) allInnerText() vs allTextContent()

    console.log("*********comparing allInnerText() vs allTextContent())*********");
    // const productNames:string[]=await products.allInnerTexts();
    // console.log("product Names captured by allInnerText(): ",productNames);

    // const productNames:string[]=await products.allTextContents();
    // console.log("product Names captured by allTextContents(): ",productNames);

    // const productNamesTrimmed:string[]=productNames.map(text=>text.trim());
    // console.log("Product names after trimmed: ",productNamesTrimmed);

     //3)all() - coverts Locator ------> Locator[]
     //eturns array of locators
     const productLocators:Locator[]=await products.all();
     console.log(productLocators);

     //console.log(await productLocators[1].innerText());
    //for of loop
    //  for(let productloc of productLocators){
    //     console.log(await productloc.innerText());
    //  }

    //for in loop
    for(let i in productLocators){
       console.log(await productLocators[i].innerText());
    }


});