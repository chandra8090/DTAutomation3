import { expect, Locator, Page } from '@playwright/test';

export class StatusInBacklogPage{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnprocessorHeader: Locator; 
    readonly bthBacklog:Locator;
    readonly btnStatus:Locator;
    readonly dropdownStatus:Locator;
    readonly SelectType:Locator;
    readonly StatusDropDown:Locator;
    readonly StatusField:Locator;
    readonly clickOnStatusTop:Locator;
    readonly btnApply:Locator;
    readonly btnProfile:Locator;
    readonly bthLogout:Locator;

  
    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnprocessorHeader=page.locator('.details-header >> nth=0');
        this.bthBacklog=page.locator('div#sideMenuDiv>div:first-of-type');
        this.btnStatus=page.locator('#topDiv >> text=Status');
        this.dropdownStatus=page.locator('div[role="button"]');
        this.SelectType=page.locator('[aria-label="Is"] >> text=Is');
        this.StatusDropDown=page.locator('text=Is Select Status >> span >> nth=3');
        this.StatusField=page.locator('[aria-label="Open"] div >> nth=1');
        this.clickOnStatusTop=page.locator('#topDiv span:has-text("Status")');
        this.btnApply=page.locator('button:has-text("Apply")');
        this.btnProfile=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');
    }

    async VerifyStatusPage(){
        await this.clickonHeader();
        await this.clickonBacklogFeature();
        await this.clickOnStatusButton();
        await this.clickOnDropDown();
        await this.clickOnStatusDropDown();
        await this.SeletedOpen();
        await this.clickOnTopOfStatus();
        await this.clickonApplyButton();
        await this.clickonProfileButton();
        await this.clickonLogoutButton();

    }
    async clickonApplyButton(){
        await this.btnApply.click();
    }
   
    async clickonProfileButton(){
        await this.btnProfile.click();
    }
    async clickonLogoutButton(){
        await this.bthLogout.click();
    }
    async clickOnTopOfStatus(){
        await this.clickOnStatusTop.click();
    }
    async SeletedOpen(){
        await this.StatusField.click();
    }
    async clickOnStatusDropDown(){
        await this.StatusDropDown.click();
    }
    async SelectedField(){
        await this.SelectType.click();
    }
    async clickOnDropDown(){
        await this.dropdownStatus.click();
    }

    async clickonHeader(){
        await this.btnprocessorHeader.click();
    }
    async clickonBacklogFeature(){
        await this.bthBacklog.click();
    }
    async clickOnStatusButton(){
        await this.btnStatus.click();
    }
}