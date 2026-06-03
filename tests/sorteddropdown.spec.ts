import {test,expect,Locator} from "@playwright/test";

test('verify drop down is sorted',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const dropDownOptions:Locator=page.locator('#animals>option'); //sorted
    //const dropDownOptions:Locator=page.locator('#colors>option');

    //console.log(await dropDownOptions.allTextContents());

    const optionsText:string[]=(await dropDownOptions.allTextContents()).map(text=>text.trim());

    // const originalList:string[]=optionsText;
    // const sortedList:string[]=optionsText.sort();

    

    //here there is a problem with the sort method,
    //  it is changing the original array as well,
    //  so both originalList and sortedList are same, 
    // to avoid this we can use spread operator to create a new array for sortedList

    const originalList:string[]=[...optionsText];
    const sortedList:string[]=[...optionsText].sort();


    console.log("Original List: ",originalList);
    console.log("Sorted List: ",sortedList);

    expect(originalList).toEqual(sortedList); 



    



     

})