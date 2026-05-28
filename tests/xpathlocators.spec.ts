import { test, expect, Locator } from "@playwright/test";

test("Xpath demo in playwright", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");

    // 1. Absolute xpath - logo
    const absoluteLogo: Locator = page.locator(
        "xpath=/html/body/div[4]/div[1]/div[1]/div[1]/a/img"
    );
    await expect(absoluteLogo).toBeVisible();

    // 2. Relative xpath - logo
    const relativeLogo: Locator = page.locator(
        "xpath=//img[@alt='Tricentis Demo Web Shop']"
    );
    await expect(relativeLogo).toBeVisible();

    // 3. contains()
    const products:Locator=page.locator("//h2/a[contains(@href,'computer')]");
    const productsCount:number=await products.count();
    console.log("No of computer related products:",productsCount); //4
    expect(productsCount).toBeGreaterThan(0);

    //console.log(await products.textContent()); //Error:strict mode violation
    console.log("First computer related product:", await products.first().textContent());
    console.log("Last computer related product:", await products.last().textContent());
    console.log("Nth computer related product:", await products.nth(3).textContent());  //Index is starting from 0(zero)

    let productTitles:string[]=await products.allTextContents(); //getting all the matched products in to array
    console.log("All commputer related products titles:",productTitles);

    for(let pt of productTitles){
        console.log(pt);
    }


    //4. start-wth()
    const buildingProducts:Locator=page.locator("//h2/a[starts-with(@href,'/build')]");
    const count:number=await buildingProducts.count();
    expect(count).toBeGreaterThan(0);

    //5. text()
    const reglink:Locator=page.locator("//a[text()='Register']");
    await expect(reglink).toBeVisible();

    //6. last()
    const lastitem:Locator=page.locator("//div[@class='column follow-us']//li[last()]");
    expect(lastitem).toBeVisible();
    console.log("Text content of last element: ",await lastitem.textContent());

    //7. position()
    const positionitem:Locator=page.locator("//div[@class='column follow-us']//li[position()=3]");
    expect(positionitem).toBeVisible();
    console.log("Text content of positional element: ",await positionitem.textContent());

});