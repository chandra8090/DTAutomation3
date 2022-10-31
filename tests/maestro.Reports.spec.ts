import test, { expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage/loginpage";
import { CreateReport } from "../pages/Reports/CreateReports";
import { CreateLimitedReport } from "../pages/Reports/LimitedReport";
import { PrivateToPublicReport } from "../pages/Reports/PrivateToPublic";
import { CreatePublicReport } from "../pages/Reports/PublicReport";
import { PublicToLimitedReport } from "../pages/Reports/PublicToLimited";
import { SearchReport } from "../pages/Reports/search";
import { ShareAReport } from "../pages/Reports/ShareReport";
import { SortingReportNamr } from "../pages/Reports/SortingREportName";

test.beforeEach(async ({ page }) => {
    // await page.goto(options.baseURL);
    const loginpage = new LoginPage(page);
    await page.goto("https://maestro-universal-qa.quantrion.com/secure");
    await loginpage.logintoApp("chandrababu@digitaltaas.com","Chandra@8090");
 });
 test('AddingNewTemplate ', async ({ page }) => {     
    const Cr = new CreateReport(page);
    await Cr.CreateingAReport();
});
test('CreateingAPublicReport ', async ({ page }) => {     
    const rep = new CreatePublicReport(page);
    await rep.CreateingAPublicReport();
});
test('CreateingALimitedReport ', async ({ page }) => {     
    const lim = new CreateLimitedReport(page);
    await lim.CreateingALimitedReport();
});
test('Shareing the Report to people', async ({ page }) => {     
    const lim = new ShareAReport(page);
    await lim.sharingAReport();
});
test('Searching the Report', async ({ page }) => {     
    const sea = new SearchReport(page);
    await sea.searchingAReport();
});
test('Changeing from PrivateToPublic in Report', async ({ page }) => {     
    const pri = new PrivateToPublicReport(page);
    await pri.ChangeingPrivateToPublicReport();
});
test('Changeing from PublicToLimited in Report', async ({ page }) => {     
    const lim = new PublicToLimitedReport(page);
    await lim.ChangeingPublicToLimitedReport();
});
test('Sorting ReportByName', async ({ page }) => {     
    const sor = new SortingReportNamr(page);
    await sor.SortingNameReport();
});