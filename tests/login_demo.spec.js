import { test, expect } from '@playwright/test'

test('Demo Login Test 1', async ({ page }) => {

    await page.goto('https://demo.applitools.com/')
    await page.pause()

    await page.getByPlaceholder('Enter your username').fill('Kinuthia Alex');
    await page.getByPlaceholder('Enter your password').fill('Password');
    //await page.getByText('Sign in').click();
    await page.getByRole('link', { name: 'Sign in' }).click()
    await page.isVisible('text = ACME');
    await page.pause()
    await page.getByRole('link', { name: ' Make Payment' }).click();
})

test('Demo Login Test 2', async ({ page }) => {
    //test.only tells playwright to run only this test.

    await page.goto('https://opensource-demo.orangehrmlive.com/')
    await page.pause()

    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button', { name: 'Login' }).click()
    await page.pause()
    await page.getByText('Monkey Luffy').click()
    await page.getByRole('menuitem', { name: 'Logout' }).click()
    await page.pause()

})

test.only('Demo Login Test 3', async ({ page }) => {

    await page.pause()
    await page.goto('https://www.nopcommerce.com/demo.aspx')
    await page.getByLabel('Email:').click();
    await page.getByLabel('Email:').press('ControlOrMeta+a');
    await page.getByLabel('Email:').fill('admin@yourstore.com');
    await page.getByLabel('Password:').click();
    await page.getByLabel('Password:').click();
    await page.getByLabel('Password:').fill('admin');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.waitForURL('https://admin-demo.nopcommerce.com/admin/')
    await page.getByRole('button', { name: 'Logout' }).click()
    await browser.close();  

})