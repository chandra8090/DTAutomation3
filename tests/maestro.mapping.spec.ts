import test, { expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage/loginpage";
import { AddedingAlVector } from "../pages/Mapping/AddAIVector";
import { AddingNewField } from "../pages/Mapping/NewField";
import { searchingFieldsInMapping } from "../pages/Mapping/SearchInMapping";

test.beforeEach(async ({ page }) => {
    // await page.goto(options.baseURL);
    const loginpage = new LoginPage(page);
    await page.goto("https://maestro-universal-qa.quantrion.com/secure");
    await loginpage.logintoApp("chandrababu@digitaltaas.com","Chandra@8090");
 });

 test('AddingNewField ', async ({ page }) => {     
    const Cr = new AddingNewField(page);
    await Cr.AddedNewFieldInMapping();
});
test('SearchingInMapping ', async ({ page }) => {     
    const Cr = new searchingFieldsInMapping(page);
    await Cr.SearchInMapping();
});
test('AddedingAl/MlVector ', async ({ page }) => {     
    const Cr = new AddedingAlVector(page);
    await Cr.AddingAutomation();
});