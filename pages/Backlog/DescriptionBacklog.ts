import { expect, Locator, Page } from '@playwright/test';

export class DescriptionInBacklogpage{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnprocessorHeader: Locator; 
    readonly bthBacklog:Locator;
    readonly btnDescription:Locator;
    readonly dropdown:Locator;
    readonly lblContains:Locator;
    readonly SearchText:Locator;
    readonly btnApply:Locator;
    readonly ValidatingOnBacklog:Locator;
    readonly userProfileicon:Locator;
    readonly bthLogout:Locator;

    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnprocessorHeader=page.locator('.details-header >> nth=0');
        this.bthBacklog=page.locator('div#sideMenuDiv>div:first-of-type');
        this.btnDescription=page.locator('text=Description');
        this.dropdown=page.locator('div[role="button"]');
        this.lblContains=page.locator('[aria-label="Contains"] >> text=Contains');
        this.SearchText=page.locator('input[type="text"] >> nth=2');
        this.btnApply=page.locator('button:has-text("Apply")');
        this.ValidatingOnBacklog=page.locator('div.dashboard__header');
        this.userProfileicon=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');
     
    }
    async VerifyDescriptionInBacklogPages(){
        await this.clickonHeader();
        await this.clickonBacklogFeature();
        await this.ClickOnDescription();
        await this.clickOnDropDown();
        await this.SelectContains();
        await this.EnterText();
        await this.ClickOnApplyButton();
        await this.ValidatingBacklogPage();
        await this.clickonUserProfileicon();
        await this.clickonLogoutButton();
    }
    async ValidatingBacklogPage(){
        await expect(this.page.locator('div.dashboard__header,ValidatingBacklogScreen')).toBeVisible();
    }
    async clickonUserProfileicon(){
        await this.userProfileicon.click();
    }
    async clickonLogoutButton(){
        await this.bthLogout.click();
    }
    
    async ClickOnApplyButton(){
        await this.btnApply.click();
    }
    async EnterText(){
        await this.SearchText.fill('hello');
    }
    async SelectContains(){
        await this.lblContains.click();
    }

    async clickonHeader(){
        await this.btnprocessorHeader.click();
    }
    async clickonBacklogFeature(){
        await this.bthBacklog.click();
    }
    async ClickOnDescription(){
        await this.btnDescription.click();
    }
    async clickOnDropDown(){
    await this.dropdown.click();
    }

}