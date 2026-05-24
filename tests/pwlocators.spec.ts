/*
In JS we don't sepcify where in ts we should follow the type inference concept

Locators - used to indentify the  elements on the web
Locators works on based on the DOM structure
DOM -Document Object Model

HTML and DOM are not same.

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
    await page.goto("https://demo.nopcommerce.com");

    // 1. page.getByAltText() - identifies images (and similar elements) based on the alt attributes
    // use this locator when your element supports alt text as img and area elements.
     const logo:Locator= page.getByAltText("nopCommerce demo store");
     await expect(logo).toBeVisible();

     //2. page.getByText() - Find an element by the text it contains. You can match by a substring , exact string or a regular expression.
     //Locate by visible text
     //Use this locator to find non interactive elements like div, span, p, etc.
     //For interactive elements like button , a, input, etc use role locators
/*
     <p>welcome</p>     --Inner text(element with no attributes
     <div>hello</div>   --Inner text(element with no attributes
*/
    /*  const text:Locator=page.getByText("welcome to our store");
     await expect(text).toBeVisible(); */

     await expect(page.getByText("Welcome to our store")).toBeVisible(); //full string /full text
     await expect(page.getByText("Welcome to")).toBeVisible(); //provided substring
     await expect(page.getByText(/Welcome\s+To\s+Our\s+Store/i)).toBeVisible(); //Regular Expression

     //3. page.getByRole() - Locating by Role (role is not an attribute)
     /* Role locators include buttons, checkboxes, headings,links,lists,tables,and many more and follow w3c specifications for ARIA Role.
     prefer for interactive elements like buttons,checkboxes,links,lists,headings,tables,etc.,
     
     we have two types of rules implicitly defined role and explicitly defined role.
     */

     //await page.getByRole("link",{name:'Register'}).click();
     // Wait for navigation
     //await page.waitForURL("**/register");
     //await expect(page.getByRole("heading",{name:'Register'})).toBeVisible(); //you can also use by getText()
     //await expect(page.getByText("Register")).toBeVisible();

     //4)page.getByLabel() to locate a form control by associated
     //when to use: Ideal for form fields with visible labels.

     //Page.getByLabel('First name:').type("John"); //type deprecated

     // await page.getByLabel("First name:").fill("John");
     // await page.getByLabel('Last name:').fill("kennedy");
     // await page.getByLabel('Email:').fill("abc@gmail.com");

     //5. page.getByPlaceholder() - Finds element with a given placeholder text.
     //Best for inputs without a label but having a placeholder

     await page.getByPlaceholder("Search store").fill('Apple MacBook Pro');

     //6. page.getByTitle() to locate an element by its title attribute.
     // when to use: when your element has a meaningful title attribute.

     await page.goto("file:///C:/Users/Lenovo%20Laptop/Downloads/app.html");
     // const link:Locator=page.getByTitle("Home page link");
     // expect(link).toHaveText("Home");

     await expect(page.getByTitle("Home page link")).toHaveText("Home");
     await expect(page.getByTitle("HyperText Markup Language")).toHaveText("HTML");

     // 7) page.getByTestId() to locate element based on its data-testid attribute(other attributes can be configured).
     // when to use when text or role based locators are unstable or not suitable
     //This property is customizable.

     await expect(page.getByTestId("profile-email")).toHaveText("john.doe@example.com");
     await expect(page.getByTestId("profile-name")).toHaveText("John Doe");






      

     


})