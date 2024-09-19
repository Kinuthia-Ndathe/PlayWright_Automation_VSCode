const {test, expect} = require('@playwright/test')
//require() is a node js builtin function used to load modules present in separate files
//Here we are loading test and expect modules from playwright package
    //Playwright Test provides test function to declare tests and expect function to write assertions
// this can also be written as: import {test, expect} from '@playwright/test'
test('My First test', async ({page}) => {
    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google')
})
