import test, { expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage/loginpage";
import { ActivityInTemplatesCentre } from "../pages/TemplateCentre/ActivityInTemplatesCentre";
import { CategoryInTemplate } from "../pages/TemplateCentre/category";
import { clickOnTemplateCentreIcon } from "../pages/TemplateCentre/ClickOnTemplateIcon";
import { DeleteingTemplate } from "../pages/TemplateCentre/DeleteTemplate";
import { EditProcessInActivity } from "../pages/TemplateCentre/EditProcess";
import { EditingTemplate } from "../pages/TemplateCentre/EditTemplate";
import { InviteMember } from "../pages/TemplateCentre/InviteMember";
import { AddingTemplate } from "../pages/TemplateCentre/publishAnTemplate";
import { SelectingTagOnTemplateCentre } from "../pages/TemplateCentre/Tags";
import { UseThisTemplate } from "../pages/TemplateCentre/UseThisTemplate";


test.beforeEach(async ({ page }) => {
    // await page.goto(options.baseURL);
    const loginpage = new LoginPage(page);
    await page.goto("https://maestro-universal-qa.quantrion.com/secure");
    await loginpage.logintoApp("chandrababu@digitaltaas.com","Chandra@8090");
 });
 test('AddingNewTemplate ', async ({ page }) => {     
    const Bp = new AddingTemplate(page);
    await Bp.CreatingTemplate();
});
test('InviteMember', async ({ page }) => {     
    const IM = new InviteMember(page);
    await IM.InviteMembersEmail();
});
test('EditProcess', async ({ page }) => {     
    const EP = new EditProcessInActivity(page);
    await EP.EditProcess1();
});
test('clickOnTemplateCentreIconInProcessPage', async ({ page }) => {     
    const EP = new clickOnTemplateCentreIcon(page);
    await EP.TemplateIcon();
});
test('useThisTemplate', async ({ page }) => {     
    const UT = new UseThisTemplate(page);
    await UT.UseThisTemplateView();
});
test('DeleteingTheTemplate', async ({ page }) => {     
    const DT = new DeleteingTemplate(page);
    await DT.DeleteTheTemplate();
});
test('EditingTheTemplate', async ({ page }) => {     
    const ET = new EditingTemplate(page);
    await ET.EditInTemplate();
});
test('selecting The Tag In Template', async ({ page }) => {     
    const tag = new SelectingTagOnTemplateCentre(page);
    await tag.TagsInTemplateIcon();
});
test('Clicking on Category In TemplateCentre', async ({ page }) => {     
    const ct = new CategoryInTemplate(page);
    await ct.selectingCategoryInTemplatesCentre();
});
test('Clicking on TemplateCentre Icon', async ({ page }) => {     
    const Icon = new clickOnTemplateCentreIcon(page);
    await Icon.TemplateIcon();
});
test('Activity In TemplateCentre ', async ({ page }) => {     
    const act = new ActivityInTemplatesCentre(page);
    await act.ViewingActivityInTemplates();
});