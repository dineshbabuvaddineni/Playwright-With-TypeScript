import {test,expect} from '@playwright/test';
import fs from 'fs';

test('download text file',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html");

    await page.locator("#inputText").fill("welcome"); //Filling the text in input box
    await page.locator('#generateTxt').click(); //Clicking on the 'Generate and download text file' button

    // start waiting for the download before clicking
    const [download] =
    await Promise.all([
    page.waitForEvent('download'),
    page.locator('#txtDownloadLink').click()
    ])
    
    //Save the file to custom path
    const downloadpath='downloads/testfile.txt';
    await  download.saveAs(downloadpath);

    //Check if file exists in the path
    const fileexist=fs.existsSync(downloadpath); //returns true if file exists, not if file not exists
    expect(fileexist).toBeTruthy();

    //Cleanup downloaded files
    if(fileexist){
        fs.unlinkSync(downloadpath);
    }

    await page.waitForTimeout(5000);
});

test.only('download pdf file',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html");

    await page.locator("#inputText").fill("welcome"); //Filling the text in input box
    await page.locator('#generatePdf').click(); //Clicking on the 'Generate and download pdf file' button

    // start waiting for the download before clicking
    const [download] =
    await Promise.all([
    page.waitForEvent('download'),
    page.locator('#pdfDownloadLink').click()
    ])
    
    //Save the file to custom path
    const downloadpath='downloads/testfile.pdf';
    await  download.saveAs(downloadpath);

    //Check if file exists in the path
    const fileexist=fs.existsSync(downloadpath); //returns true if file exists, not if file not exists
    expect(fileexist).toBeTruthy();

    //Cleanup downloaded files
    if(fileexist){
        fs.unlinkSync(downloadpath);
    }

    await page.waitForTimeout(5000);
});


