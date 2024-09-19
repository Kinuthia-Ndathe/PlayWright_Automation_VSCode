import {test, expect} from '@playwright/test'

test('Selectors Demo', async({page}) => {
    await page.goto('https://www.saucedemo.com/')
    await page.pause()
    //using any object property
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('Edison') //this uses CSS locator that is specific to Playwright only
    await page.locator('[id="user-name"]').fill('Kinuthia') //this locator can be used across various environments that use CSS selector
    await page.pause()

    //using CSS Selector
    //#login-button - CSS Selector for the login button
    await page.locator('#login-button').click()
    await page.pause()

    //using XPath
    await page.locator('xpath=//input[@id="user-name"]').fill('Ndathe')
    await page.locator('//input[@id="user-name"]').fill('Alkinu')
    await page.pause()

    //using Text
    await page.locator('text = LOGIN').click() //this finds an element with exactly matching text
    await page.locator(':has-text("LOGIN")') //this finds any element that contains the text "LOGIN"nas part of their content, not necessarily as an exact match
    await page.pause()

});