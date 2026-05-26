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
});