import {test,expect,Locator} from "@playwright/test"

test("Xpath Axes demo",async({page})=>{

    await page.goto("https://www.w3schools.com/html/html_tables.asp");

    //1. self axis - slect <td> element that contains "Germany"

    const germanyCell: Locator=page.locator("//td[text()='Germany']/self::td");
    await expect(germanyCell).toHaveText('Germany');

    //2. Parent axis- get parent <tr> of the "Germany" cell
    const parentRow:Locator=page.locator("//td[text()='Germany']/parent::tr");
    await expect(parentRow).toContainText("Maria Anders");



});