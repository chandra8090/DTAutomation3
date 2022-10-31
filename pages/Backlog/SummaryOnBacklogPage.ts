import { expect, Locator, Page } from '@playwright/test';


export class SummaryOnBacklogPage{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnprocessorHeader: Locator; 
    readonly bthBacklog:Locator;
    readonly btnManageFilter:Locator
    readonly sum:Locator;
    readonly btnSummary:Locator;
    readonly summaryDropDown:Locator;
    readonly summaryContains:Locator;
    readonly summaryfill:Locator;
    readonly btnApply:Locator;
    readonly ValidatingOnBacklog:Locator;
    readonly userProfileicon:Locator;
    readonly bthLogout:Locator;


    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnprocessorHeader=page.locator('.details-header >> nth=0');
        //this.bthBacklog=page.locator('div#sideMenuDiv>div:first-of-type');
        this.btnManageFilter=page.locator('button:has-text("Manage Filters")');
        this.sum=page.locator('div:nth-child(14) > .ng-untouched > .p-checkbox > .p-checkbox-box');
        this.btnSummary=page.locator('text=Summary');
        this.summaryDropDown=page.locator('text=ContainsAdd Condition >> div[role="button"]');
        this.summaryContains=page.locator('[aria-label="Contains"] >> text=Contains');
        this.summaryfill=page.locator('input[type="text"] >> nth=2')
        this.btnApply=page.locator('button:has-text("Apply")');
        this.ValidatingOnBacklog=page.locator('div.dashboard__header');
        this.userProfileicon=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');


    }

    async VerifySummaryInBacklogPages(){
        await this.clickonHeader();
        //await this.clickonBacklogFeature();
        await this.clickOnManageFilter();
        await this.SelectSummary();
        await this.clickOnSummaryButton();
        await this.clickOnSummaryDropDown();
        await this.EnterContainsInSummary();
        await this.Fillsummary();
        await this.ClickOnApplyButton();
        await this.ValidatingBacklogPage();
        await this.clickonUserProfileicon();
        await this.clickonLogoutButton();
    }
    async ValidatingBacklogPage(){
        await expect(this.page.locator('div.dashboard__header,ValidatingBacklogScreen')).toBeVisible();
    }
    async ClickOnApplyButton(){
        await this.btnApply.click();
    }
    async clickOnManageFilter(){
        await this.btnManageFilter.click();
    }
    async SelectSummary(){
        await this.sum.click();
    }
    async clickOnSummaryButton(){
    await this.btnSummary.click();
    }
    async clickOnSummaryDropDown(){
        await this.summaryDropDown.click();
    }

    async EnterContainsInSummary(){
        await this.summaryContains.click;
    }
    async Fillsummary(){
        await this.summaryfill.fill('go')
    }
    async clickonHeader(){
        await this.btnprocessorHeader.click();
    }
    async clickonBacklogFeature(){
        await this.bthBacklog.click();
    }
    async clickonUserProfileicon(){
        await this.userProfileicon.click();
    }
    async clickonLogoutButton(){
        await this.bthLogout.click();
    }

}

