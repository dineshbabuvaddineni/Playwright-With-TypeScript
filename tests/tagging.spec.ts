/*
test1- sanity
test2- sanity,regression
test3- regression

1. Run all sanity tests:
npx playwright test --grep @sanity
npx playwright test tests/tagging.spec.ts --grep @sanity

2. Run all regression tests:
npx playwright test --grep @regression
npx playwright test tests/tagging.spec.ts --grep @regression

3. Run all sanity and regression tests:
npx playwright test tests/tagging.spec.ts --grep "(?=.*@sanity)(?=.*@regression)"

(?=.*@sanity)
(?=.*@regression)
(?=.*@sanity)(?=.*@regression)

4. Run all sanity or regression tests:
npx playwright test tests/tagging.spec.ts --grep "@sanity|@regression"

5. Run sanity tests which are not belongs to regression:
npx playwright test tests/tagging.spec.ts --grep "@sanity" --grep-invert "@regression"
*/

import  {test,expect} from '@playwright/test';

/*
test('@sanity @regression Check title of the home page',async({page})=>{
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
})
    */

test('Check title of the home page',{tag:'@sanity'},async({page})=>{
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
});

test('Check navigation to store page',{tag:'@regression'},async({page})=>{
    await page.goto('https://www.google.com/');
    await page.locator("text='Store'").click();
    await expect(page).toHaveTitle('Google Store for Google Made Devices & Accessories');
});

test('Check Popular on the Google Store',{tag:['@sanity','@regression']},async({page})=>{
    await page.goto('https://www.google.com/');
    await page.locator("text='Store'").click();
    await expect(page.locator("text='Popular on the Google Store.'")).toHaveText('Popular on the Google Store.');
});



