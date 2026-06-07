import {test, expect,Locator} from '@playwright/test';

test("static web table",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const table:Locator=page.locator("table[name='BookTable'] tbody");
    await expect(table).toBeVisible();

    //1) count number of rows in a table

    const rows:Locator=table.locator("tr"); //returns all the rows includeing header
    await expect(rows).toHaveCount(7); //7 //approach1

    const rowCount:number=await rows.count();
    console.log("Number of rows in a table: ",rowCount); 
    expect(rowCount).toBe(7); //approach2

     //2)count number of headers/columns in a table
     const columns:Locator=rows.locator("th");  //chaining of locators
     await expect(columns).toHaveCount(4);//4 approach1
     
     const columnCount:number=await columns.count();
     console.log("Number of columns/headers: ",columnCount);
     expect(columnCount).toBe(4); //approach2

     //3) Read all data from 2nd row (index 2 means 3rd row including header)
     const secondRowCells:Locator=rows.nth(2).locator('td');
     const secondRowTexts:string[]=await secondRowCells.allInnerTexts();
    console.log("2ndRow data: ",secondRowTexts); //[ 'Learn Java', 'Mukesh', 'Java', '500' ]
    await expect(secondRowCells).toHaveText([ 'Learn Java', 'Mukesh', 'Java', '500' ]); //assertion

    console.log("printing 2nd row data..........")

    for(let text of secondRowTexts){
        console.log(text);
    }


    //4) Read all data from the table(excluding header)
    console.log("printing all Table data..............");

    const allRowData=await rows.all();//get all row locators //all() retuns array of locators

    for(let row of allRowData.slice(1)){
        const cols=await row.locator('td').allInnerTexts();
        console.log(cols);
    }

    console.log("Books written by Mukesh..............")

    const mukeshBooks:string[]=[];

    for(let row of allRowData.slice(1)) //slice(1) --> ski header row
    {
        const cells= await row.locator('td').allInnerTexts();
        const author= cells[1];
        const book= cells[0];

        if(author==='Mukesh'){
            console.log(`${author}\t ${book}`);
            mukeshBooks.push(book);
        }

    }
    expect(mukeshBooks).toHaveLength(2); //Assertion

    //6) calculate total price of all books
    let totalprice:number=0;

    for(let row of allRowData.slice(1)) //slice(1) ----> skip header row
    {
        const cells=await row.locator('td').allInnerTexts();
        const price=cells[3];
        totalprice=totalprice+parseInt(price);
    }
    console.log("Total price",totalprice);
    expect(totalprice).toBe(7100); //assertion
});
