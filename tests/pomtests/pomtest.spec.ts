import {test,expect} from '@playwright/test';
import { LoginPage } from '../../PageObjects/LoginPage';
import {HomePage} from '../../PageObjects/HomePage';
import {CartPage} from '../../PageObjects/CartPage';

test('User can login, add a product to the cart',async({page})=>{
    await page.goto("https://demoblaze.com/index.html")

    //Login Page
    const loginPage=new LoginPage(page);

    // await loginPage.clickLoginLink();
    // await loginPage.enterUserName("pavan01");
    // await loginPage.enterPassword("test@123");
    // await loginPage.clickOnLoginButton();

    await loginPage.performLogin("pavan01","test@123");

    //HomePage
    const homePage=new HomePage(page);
    await page.waitForTimeout(2000);
    await homePage.addProductToCart("Samsung galaxy s6");
    await page.waitForTimeout(2000);
    await homePage.gotoCart();
    await page.waitForTimeout(2000);

    //Cart Page
    const cartPage=new CartPage(page);
    const isProductInCart= await cartPage.checkProductInCart("Samsung galaxy s6");
    expect(isProductInCart).toBe(true);

})