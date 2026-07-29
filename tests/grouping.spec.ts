import {test, expect} from '@playwright/test';
 test.describe('Group1',async()=>{
    test('Test1',async()=>{
        console.log("this is test1 ......")
    });

    test('Test2',async()=>{
        console.log("this is Test2 ......")
    });
});

test.describe('Group2',async()=>{
    test('Test3',async()=>{
        console.log("this is Test3 ......")
    });

    test('Test4',async()=>{
        console.log("this is Test4 ......")
    });
});


//By default playwright executes all the test in parallel
//We have an option playwright .config.ts

/* Run tests in files in parallel 
fullyParallel: true --> if we make it false the tests execute in serial manner
by default this feature is true */


