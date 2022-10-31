import { test, expect, type Page } from '@playwright/test';
import { OpenBacklogPage } from "../pages/Backlog/openingBacklogPage";
import LoginPage from "../pages/LoginPage/loginpage";
import options from '../playwright.options';

test.beforeEach(async ({ page }) => {
    await page.goto(options.baseURL?'https://maestro-qa.quantrion.com/#/secure'
    :'https://maestro-qa.quantrion.com/#/secure');
    const loginpage = new LoginPage(page);
    await page.goto("https://maestro-qa.quantrion.com/#/secure");
    await loginpage.logintoApp("chandrababu@digitaltaas.com","Chandra@8090");
 });

test('TC001To verify the opening of Backlog page.', async ({ page }) => {
    const bl=new OpenBacklogPage(page);
    await bl.VerifyingBacklogPages();

});