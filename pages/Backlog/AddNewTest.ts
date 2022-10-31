import { expect, Locator, Page } from '@playwright/test';

export class AddingOptionInBacklogPage{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnprocessorHeader: Locator;
    readonly bthBacklog:Locator;
    readonly btnAdd:Locator;
    readonly CandidateName:Locator;
    readonly region:Locator;
    readonly role:Locator;
    readonly Agency:Locator;
    readonly StatusDropDown:Locator;
    readonly statuslevel:Locator;
    readonly AssignedTo:Locator;
    readonly AssignedMember:Locator;
    readonly priority:Locator;
    readonly priortyLevel:Locator;
    readonly btnAdd1:Locator;
    readonly btnProfile:Locator;
    readonly bthLogout:Locator;



    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnprocessorHeader=page.locator('text=chandra123 >> nth=1');
        this.bthBacklog=page.locator('div#sideMenuDiv>div:first-of-type');
        this.btnAdd=page.locator('button:has-text("Add")');
        this.CandidateName=page.locator('.p-inputtextarea >> nth=0');
        this.region=page.locator('div:nth-child(2) > .p-inputtextarea');
        this.role=page.locator('div:nth-child(3) > .p-inputtextarea');
        this.Agency=page.locator('div:nth-child(4) > .p-inputtextarea');
        this.StatusDropDown=page.locator('text=Status Open >> div[role="button"]');
        this.statuslevel=page.locator('[aria-label="Open"] >> text=Open');
        this.AssignedTo=page.locator('text=Assigned To Select >> div[role="button"]');
        this.AssignedMember=page.locator('text=chandra Babu');
        this.priority=page.locator('text=Priority Medium >> div[role="button"]');
        this.priortyLevel=page.locator('[aria-label="Low"]');
        this.btnAdd1=page.locator('div[role="dialog"] button:has-text("Add")');
        this.btnProfile=page.locator('.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');
    }

    async VerifyAddNewTestFilter(){
        await this.clickonHeader();
        await this.clickonBacklogFeature();
        await this.clickOnAddButton();
        await this.enterdatainCandidateName();
        await this.EnterDataInRegion();
        await this.EnterDataInRole();
        await this.EnterDataInAgency();
        await this.selectAssignedMember();
        await this.clickonApplyButton();
        await this.clickonProfileButton();
        await this.clickonLogoutButton();
    }
    async clickonApplyButton(){
        await this.btnAdd1.click();
    }
   
    async clickonProfileButton(){
        await this.btnProfile.click();
    }
    async clickonLogoutButton(){
        await this.bthLogout.click();
    }
    async selectPriortyLevel(){
        await this.priority.click();
        await this.priortyLevel.click();
    }
    async selectAssignedMember(){
        await this.AssignedTo.click();
        await this.AssignedMember.click();
    }
    async SelectStatusLevel(){
        await this.StatusDropDown.click();
        await this.statuslevel.click();
    }
    async EnterDataInAgency(){
    await this.Agency.fill('Linkedin');
    }

    async EnterDataInRole(){
        await this.role.fill('Qa');
    }
    async EnterDataInRegion(){
        await this.region.fill('india');
    }

    async enterdatainCandidateName(){
        await this.CandidateName.fill('chandra');
    }
        async clickonHeader(){
            await this.btnprocessorHeader.click();
        }
        async clickonBacklogFeature(){
            await this.bthBacklog.click();
        }
        async clickOnAddButton(){
            await this.btnAdd.click();
        }

}