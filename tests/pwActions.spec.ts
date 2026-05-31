import {test,expect,Locator} from "@playwright/test";


//Text Input/ Text Box/Input Box
 
test('Text Input Actions',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const textBox=page.locator('#name');
    await expect(textBox).toBeVisible();
    await expect(textBox).toBeEnabled();

    const maxLength: string | null =await textBox.getAttribute("maxlength"); //Returns value of maxlength of the attribute
    expect(maxLength).toBe('15');
    
    await textBox.fill("John canedy");

    console.log("text content of FirstName :", await textBox.textContent()); //returns empty

    const enteredValue:string=await textBox.inputValue();
    console.log("Input value of the FirstName :", enteredValue); //returns the input value of textBox
    expect(enteredValue).toBe("John canedy");

    await page.waitForTimeout(3000);

});

// Radio Buttons

test ('Radio Button Actions',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const maleRadio:Locator=page.locator('#male'); //Male radio button
    await expect(maleRadio).toBeVisible();
    await expect(maleRadio).toBeEnabled();
    expect(await maleRadio.isChecked()).toBe(false);

    await maleRadio.check(); //select radio button
    expect(await maleRadio.isChecked()).toBe(true);
    await page.waitForTimeout(3000);
 
});

//Check Box

test.only('Check Box Actions',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //1. Select specific checkbox (sunday) using getByLabel and assert
    const sundayCheckBox:Locator=page.getByLabel('Sunday');
    await sundayCheckBox.check();
    await expect(sundayCheckBox).toBeChecked();
    

    //2. Select all checkBoxes and assert each is checked
    const days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const checkBoxes:Locator[]=days.map(index => page.getByLabel(index));
    expect(checkBoxes.length).toBe(7);
    await page.waitForTimeout(3000);

    //3.select all checkBoxes and assert each is checked
    for(const checkbox of checkBoxes){
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }
    await page.waitForTimeout(3000);
    
    //4. Uncheck last 3 checkBoxes and assert

    for(const checkbox of checkBoxes.slice(-3)){
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
    }
    await page.waitForTimeout(3000);

    //5. Toggle checkboxes:If checked,uncheck; if unchecked, check.Assert state flipped

    for(const checkbox of checkBoxes){
        if(await checkbox.isChecked()) //true
        {
            //onlyone if checked
            await checkbox.uncheck();
            await expect(checkbox).not.toBeChecked();
        }else{
            //onlyone if not checked
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        }  
    }
    await page.waitForTimeout(3000);

    //6) Randomly select check boxes- select checkboxes by index(1,3,6) and assert
    const indexes:number[]=[1,3,6];
    for(const i of indexes){
        await checkBoxes[i].check();
        await expect(checkBoxes[i]).toBeChecked();
    }

    //7) Select te check box based on the label
    const weekname:string="Friday";
    for(const label of days){
        if(label.toLowerCase()===weekname.toLowerCase()){
            const checkbox=page.getByLabel(label);
            checkbox.check();
            await expect(checkbox).toBeChecked();
        }
    }
});





