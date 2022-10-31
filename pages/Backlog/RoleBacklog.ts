import { expect, Locator, Page } from '@playwright/test';

export class RolesBacklogPage{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnprocessorHeader: Locator; 
    readonly bthBacklog:Locator;
    readonly btnRole:Locator;
    readonly lblRoledropdown:Locator;
    readonly lblcontains:Locator;
    readonly lblrolecontainsfeild:Locator;
    readonly btnApply:Locator;
    readonly btnbacklogicon:Locator;
    readonly btnProfile:Locator;
    readonly bthLogout:Locator;

    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnprocessorHeader=page.locator('//div[@class="details-header" and text()="chandra123"]');
        this.bthBacklog=page.locator('div#sideMenuDiv>div:first-of-type');
        this.btnRole=page.locator('//div[contains(text(),"Role")]');
        this.lblRoledropdown=page.locator('text=ContainsAdd Condition >> div[role="button"]');
        this.lblcontains=page.locator('[aria-label="Contains"] >> text=Contains');
        this.lblrolecontainsfeild=page.locator('input[type="text"] >> nth=2');
        this.btnApply=page.locator('button:has-text("Apply")');
        this.btnbacklogicon=page.locator('div.dashboard__header');
        this.btnProfile=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');
    }


    async VerifyRolesBacklogPage(){
        await this.clickonHeader();
        await this.clickonBacklogFeature();
        await this.clickonRoleButton();
        await this.clickonContains();
        await this.clickonrolecontainsfeild();
        await this.clickonApplyButton();
        await this.ValidatingBacklogPage();
        await this.clickonProfileButton();
        await this.clickonLogoutButton();

    }
    async ValidatingBacklogPage(){
        await expect(this.page.locator('div.dashboard__header,ValidatingBacklogScreen')).toBeVisible();
    }
    async clickonHeader(){
        await this.btnprocessorHeader.click();
    }
    async clickonBacklogFeature(){
        await this.bthBacklog.click();
    }
    async clickonRoleButton(){
        await this.btnRole.click();
    }
    async clickonContains(){
        await this.lblRoledropdown.click();
    }
    async clickonrolecontainsfeild(){
        await this.lblrolecontainsfeild.fill('Qa');
    }
    
    async clickonApplyButton(){
        await this.btnApply.click();
    }
    // //async clickonbacklogicon(){
    //     await this.btnbacklogicon.isChecked();
    // }
    async clickonProfileButton(){
        await this.btnProfile.click();
    }
    async clickonLogoutButton(){
        await this.bthLogout.click();
    }


}