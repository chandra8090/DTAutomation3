import test, { expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage/loginpage";
import { AddingNewFieldInStatusManagement } from "../pages/StatusManagement/createStatus";
import { DeleteingCreatedFieldInStatusManagement } from "../pages/StatusManagement/DeleteStatusField";
import { DeleteingCreatedFieldInStatusManagementNo } from "../pages/StatusManagement/DeleteStatusFieldNo";

test.beforeEach(async ({ page }) => {
    // await page.goto(options.baseURL);
    const loginpage = new LoginPage(page);
    await page.goto("https://maestro-universal-qa.quantrion.com/secure");
    await loginpage.logintoApp("chandrababu@digitaltaas.com","Chandra@8090");
 });

 test('CreateingNewStatusField ', async ({ page }) => {     
    const Cr = new AddingNewFieldInStatusManagement(page);
    await Cr.CreateingNewField();
});
test('DeleteingStatusFieldYes ', async ({ page }) => {     
    const Cr = new DeleteingCreatedFieldInStatusManagement(page);
    await Cr.DeleteingNewField();
});
test('DeleteingStatusFieldNo ', async ({ page }) => {     
    const Cr = new DeleteingCreatedFieldInStatusManagementNo(page);
    await Cr.DeleteingNewFieldNo();
});