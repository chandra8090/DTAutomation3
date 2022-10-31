import test, { expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage/loginpage";
import { ActivityInTemplatesCentre } from "../pages/TemplateCentre/ActivityInTemplatesCentre";
import { ViewTemplates } from "../pages/TemplateCentre/EditOnTemplates";


test.beforeEach(async ({ page }) => {
    // await page.goto(options.baseURL);
    const loginpage = new LoginPage(page);
    await page.goto("https://maestro-universal-qa.quantrion.com/secure");
    await loginpage.logintoApp("chandrababu@digitaltaas.com","Chandra@8090");
 });
 test('EditOnTemplateCentre', async ({ page }) => {     
    const vt = new ViewTemplates(page);
    await vt.CheckingTemplates();
});
test('EditingActivityInTemplateCentre', async ({ page }) => {     
    const vt = new ActivityInTemplatesCentre(page);
    await vt.ViewingActivityInTemplates();
});