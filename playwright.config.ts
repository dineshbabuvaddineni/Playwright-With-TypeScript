import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  // grep:/@sanity/, //added by Dinesh to run only sanity tests
  // grepInvert:/@regression/, //added by Dinesh to skip regression tests

  //To change the timeout globally for all tests (default is 30000 ms/30 secs) - by pavan
  //timeout:60000,

  //To apply a longer wait for all expect conditions (default is 5000 ms/ 5 secs) by pavan
  //expect:{timeout:10000},

  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
   //retries:3, added by Dinesh
  /* Opt out of parallel tests on CI. */
  //workers: process.env.CI ? 1 : undefined,
  workers:3, //added by Dinesh
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter: '[html',
  reporter:[['html',{open:'always','outputFolder':'html-report'}],
               ['list'],
              // ['line'],
              // ['dot'],
              // ['junit',{outputFile:'junit-report.xml'}],
              // ['json',{outputFile:'results.json'}],
              // ['allure-playwright'],
              ['./my-custom-report.ts']
            ], //added by dinesh
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    screenshot:'only-on-failure', //sreenshot code added by Dinesh
    video:'retain-on-failure', //video code added by Dinesh 
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',
    //viewport: { width: 1280, height: 720 },
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */

    trace: 'off', //trace code added by Dinesh
    testIdAttribute: 'data-ms' //configures -data tested


  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      //fullyParallel: true
    },

    /*{
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },*/
    
    /*{
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }, */

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
