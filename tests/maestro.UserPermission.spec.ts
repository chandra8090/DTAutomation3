import test, { expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage/loginpage";
import { AdduserInUserAndPermission } from "../pages/UsersPermission/AddUser";
import { DeleteingNewRoleInUserAndPermission } from "../pages/UsersPermission/Delete";
import { EditingNewRoleInUserAndPermission } from "../pages/UsersPermission/EditingNewRole";
import { NewRoleInUserAndPermission } from "../pages/UsersPermission/NewRole";
import { SearchInUserAndPermission } from "../pages/UsersPermission/search";

test.beforeEach(async ({ page }) => {
    // await page.goto(options.baseURL);
    const loginpage = new LoginPage(page);
    await page.goto("https://maestro-universal-qa.quantrion.com/secure");
    await loginpage.logintoApp("chandrababu@digitaltaas.com","Chandra@8090");
 });

 test('AddedingUserAndPermission ', async ({ page }) => {     
    const user = new AdduserInUserAndPermission(page);
    await user.AddedingNewUser();
});

test('searchInUserAndPermission ', async ({ page }) => {     
    const sea = new SearchInUserAndPermission(page);
    await sea.searchInuser();
});

test('CreatingNewRoleInUserAndPermission ', async ({ page }) => {     
    const role = new NewRoleInUserAndPermission(page);
    await role.NewRoleInuser();
});
test('EditingNewRoleInUserAndPermission ', async ({ page }) => {     
    const role = new EditingNewRoleInUserAndPermission(page);
    await role.EditingNewRoleInUser();
});

test('DeleteingNewRoleInUserAndPermission ', async ({ page }) => {     
    const role = new DeleteingNewRoleInUserAndPermission(page);
    await role.DeleteingNewRoleInUser();
});