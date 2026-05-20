/*
In JS we don't sepcify where in ts we should follow the type inference concept

Locators - used to indentify the  elements on the web
Locators works on based on the DOM structure
DOM -Document Object Model

HTML and DOM are not smae

These are the recommended built-in locators.

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

*/

//https://demo.nopcommerce.com/     ---> url used for verifying the locators

import {test,expect,Locator} from "@playwright/test"
test("Verify Playwright Locators",async({page})=>{
    await page.goto("https://demo.nopcommerce.com/");

    // 1. page.getByAltText() - identifies images (and similar elements) based on the alt attributes
    // use this locator when your element supports alt text as img and area elements.
     const logo:Locator= page.getByAltText("nopCommerce demo store");
     await expect(logo).toBeVisible();




})