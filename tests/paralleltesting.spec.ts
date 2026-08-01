import {test} from '@playwright/test';

//In searial mode by default one worker assigned to run the tests, so the tests will run in serial mode.
// even if we have multiple workers assigned in playwright.config.ts, the tests will run in serial mode because of the below line of code.

//for parallel testing 5 workers will be assigned if we have 5 tests in the file, so all the tests will run in parallel mode.
//It will not conside the the workers mentioned by us in playwright.config.ts file, it will assign the workers based on the number of tests in the file.

// I we give workers as 1, then all the tests will run in serial mode, even if isparallel is set to true in playwright.config.ts file.
//test.describe.configure({mode:'parallel'}); //parallel mode
//test.describe.configure({mode:'serial'}); //serial mode

test.describe('group1',()=>{
    test('Test1',async({page})=>{
        console.log('this is Test1 .......');
    });

    test('Test2',async({page})=>{
        console.log('this is Test2 .......')
    });

     test('Test3',async({page})=>{
        console.log('this is Test3 .......')
    });

     test('Test4',async({page})=>{
        console.log('this is Test4 .......')
    });

     test('Test5',async({page})=>{
        console.log('this is Test5 .......')
    });
});