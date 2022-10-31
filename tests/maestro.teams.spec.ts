import test, { expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage/loginpage";
import { NewBackLogpage } from "../pages/LoginPage/NewBacklogPage";
import { TeamsPage } from "../pages/Teams/CreateATeams";
import { DevTeams } from "../pages/Teams/DevTeam";
import { EditTeams } from "../pages/Teams/EditTeams";

test.beforeEach(async ({ page }) => {
    // await page.goto(options.baseURL);
    const loginpage = new LoginPage(page);
    await page.goto("https://maestro-universal-qa.quantrion.com/secure");
    await loginpage.logintoApp("chandrababu@digitaltaas.com","Chandra@8090");
 });

 test.describe("Qa Team in Teams", () => {
    test('Create new Qa Group in Teams', async ({ page }) => {     
        const Bp = new TeamsPage(page);
        await Bp.CreatingQAGroupInTeams();
       
    });

    test('Create new Dev Group in Teams', async ({ page }) => {     
        const Bp = new DevTeams(page);
        await Bp.CreatingDevGroupInTeams();
       
    });
    
    test('Editing Teams', async ({ page }) => {     
        const Bp = new EditTeams(page);
        await Bp.EditingTeams();
       
    });

    

});