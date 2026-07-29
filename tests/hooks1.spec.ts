import {test,expect} from 'playwright/test';

test.beforeAll('BeforeAll',async()=>{
    console.log("this is Before All ......")
})

test.afterAll('AfterAll',async()=>{
    console.log("this is After All ......")
})

test.beforeEach('BeforeEach',async()=>{
    console.log("this is Before Each ......")
})

test.afterEach('AfterEach',async()=>{
    console.log("this is After Each ......")
})



test('Test1',async()=>{
    console.log("this is test1 ......")
});

test('Test2',async()=>{
    console.log("this is Test2 ......")
});


test('Test3',async()=>{
    console.log("this is Test3 ......")
});

test('Test4',async()=>{
    console.log("this is Test4 ......")
});
