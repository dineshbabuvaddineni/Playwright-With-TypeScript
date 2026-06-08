import {test,expect,Locator} from '@playwright/test'

test("verify chrome CPU load in dynamic table",async({page})=>{

    await page.goto("https://practice.expandtesting.com/dynamic-table");
    const table=page.locator("table.table tbody");
    await expect(table).toBeVisible();

    //select all the rows, then find the number of rows
    const rows:Locator[]=await table.locator("tr").all();
    console.log("Number of rows in a table:", rows.length);
    expect(rows).toHaveLength(4);

    //Step:1 :for chrome process get value of CPU load
    //Read each row check chrome presence

    let cpuLoad='';
    for(const row of rows){
        const processName:string=await row.locator("td").nth(0).innerText();
        if(processName==="Chrome"){
            cpuLoad=await row.locator('td:has-text("%")').innerText(); 
             //(OR) cpuLoad=await row.locator("td",{hasText:'%'}).innerText();
            console.log("CPU load of chrome",cpuLoad);
            break;
        } 
    }

   

    //Step:2 comapre it with value in the yellow label
    let yellowboxtext=await page.locator("#chrome-cpu").innerText();
    console.log("Chrome CPU load from yellow box:",yellowboxtext);
    if(yellowboxtext.includes(cpuLoad)){
        console.log("CPU load of chrome is equal");
    }else{
        console.log("CPU load of chrome is Not equal");
    }
    expect(yellowboxtext).toContain(cpuLoad);
    await page.waitForTimeout(3000);


});