import {test, expect} from '@playwright/test';

test('Single file upload',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#singleFileInput').setInputFiles('uploads/Test1.txt');
    await page.locator("button:has-text('Upload Single File')").click();

    const msg=await page.locator('#singleFileStatus').textContent();
    expect(msg).toContain('Test1.txt');
    console.log("Upload successfull.......");

    await page.waitForTimeout(5000);
})

test.only('Multiple files upload',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#multipleFilesForm').setInputFiles(['uploads/tstFile.pdf','uploads/tstFile2.pdf']);
    await page.locator("button:has-text('Upload Multiple Files')").click();

    const msg=await page.locator('#multipleFilesStatus').textContent();
    expect(msg).toContain('testFile.pdf');
    expect(msg).toContain('testFile2.pdf');

    await page.waitForTimeout(5000);
})

