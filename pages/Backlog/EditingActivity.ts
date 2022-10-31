import { expect, Locator, Page } from '@playwright/test';

export class EditingActivityInBacklogPage{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnprocessorHeader: Locator;
    readonly bthBacklog:Locator;
    readonly clickonScreen:Locator;
    readonly clickOnActivity:Locator;
    readonly editOnCandidateName:Locator;
    readonly editOnRole:Locator;
    readonly btnupdate:Locator;
    readonly ValidatingBacklog:Locator;
    readonly btnProfile:Locator;
    readonly bthLogout:Locator;

    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnprocessorHeader=page.locator('text=chandra123 >> nth=1');
        this.bthBacklog=page.locator('div#sideMenuDiv>div:first-of-type');
       // this.clickonScreen=page.locator('text=Manual GroupSmart GroupAdd');
        this.clickOnActivity=page.locator('#treeDiv div[role="treeitem"] >> nth=0');
        this.editOnCandidateName=page.locator('.p-inputtextarea >> nth=0');
        this.editOnRole=page.locator('div:nth-child(3) > .p-inputtextarea');
        this.btnupdate=page.locator('button:has-text("Update")');
        this.ValidatingBacklog=page.locator('text=Backlog >> nth=1');
        this.btnProfile=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');
    }

    async VerifyEditOnActivity(){
        await this.clickonHeader();
        await this.clickonBacklogFeature();
        //await this.Buttonclick();
        await this.ClickOnAnyActivity();
        await this.EditingOnCandidateName();
        await this.EditOnRolefield();
        await this.ClickOnUpdate();
        //await this.ValidingBacklogScreen();
        await this.clickonProfileButton();
        await this.clickonLogoutButton();
        

    }
    async Buttonclick(){
        await this.clickonScreen.click();
    }
    async clickonProfileButton(){
        await this.btnProfile.click();
    }
    async clickonLogoutButton(){
        await this.bthLogout.click();
    }
    async ValidingBacklogScreen(){
        await expect(this.page.locator('text=Backlog,successfulyBacklogScreen')).toBeVisible();
    }
    async ClickOnUpdate(){
        await this.btnupdate.click();
    }
    async EditOnRolefield(){
        await this.editOnRole.fill('QA1261')
        }
    async EditingOnCandidateName(){
        await this.editOnCandidateName.fill('role12312')
        }
    async ClickOnAnyActivity(){
        await this.clickOnActivity.click();
        }
    async clickonHeader(){
        await this.btnprocessorHeader.click();
    }
    async clickonBacklogFeature(){
        await this.bthBacklog.click();
        }





}