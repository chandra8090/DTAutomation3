import { expect, Locator, Page } from '@playwright/test';

export class ManageFilterInkanbanClass{
    readonly page: Page;
    readonly summary:Locator;
    readonly summaryDropDown:Locator;
    readonly summaryContains:Locator;
    readonly summaryFill:Locator;
    readonly btnApply:Locator;
    readonly ValidationKanbanPage:Locator;
    readonly ProfileIcon:Locator;
    readonly logout:Locator;


    constructor(page: Page){
        this.page=page;
        this.summary=page.locator('div.chip-fitler-item-div-content');
        this.summaryDropDown=page.locator('div[role="button"]');
        this.summaryContains=page.locator('[aria-label="Contains"] >> text=Contains');
        this.summaryFill=page.locator('input[type="text"] >> nth=2');
        this.btnApply=page.locator('button:has-text("Apply")');
        this.ValidationKanbanPage=page.locator('div.dashboard__header');
        this.ProfileIcon=page.locator('div.avatarProfile');
        this.logout=page.locator('i.pi.pi-sign-out');

    }


    async ManageFilterInKanbanPages(){
        await this.clickOnSummary();
        await this.clickOnSummaryDropDown();
        await this.SelectSummaryContains();
        await this.FillSummaryContains();
        await this.clickOnApplyButton();
        await this.ValidationofKanbanPge();
        await this.clickOnProfileicon();
        await this.clickOnLogOut();
    
    
    
    }
    async clickOnSummary(){
        await this.summary.click();
    }
    async clickOnSummaryDropDown(){
        await this.summaryDropDown.click();
    }
    async SelectSummaryContains(){
        await this.summaryContains.click();
    }
    async FillSummaryContains(){
        await this.summaryFill.fill('test');
    }
    async clickOnApplyButton(){
        await this.btnApply.click();
    }
    async clickOnLogOut(){
        await this.logout.click();
    }
    async clickOnProfileicon(){
        await this.ProfileIcon.click();
    }
    async ValidationofKanbanPge(){
        await expect(this.page.locator('div.dashboard__header')).toBeVisible();
    }
    
}

