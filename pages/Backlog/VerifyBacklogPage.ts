import { expect, Locator, Page } from '@playwright/test';

export class Backlogpage{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnprocessorHeader: Locator; 
    readonly bthBacklog:Locator;
    readonly btnProfile:Locator;
    readonly bthLogout:Locator;


    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnprocessorHeader=page.locator('//div[@class="details-header" and text()="chandra"]');
        this.bthBacklog=page.locator('div#sideMenuDiv>div:first-of-type');
        this.btnProfile=page.locator('.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');

    }

    async VerifyBacklogPages(){
        await this.clickonHeader();
        await this.clickonBacklogFeature();
        await this.clickonProfileButton();
        await this.clickonLogoutButton();
    }

    async clickonHeader(){
        await this.btnprocessorHeader.click();
    }
    async clickonBacklogFeature(){
        await this.bthBacklog.click();
    }
    async clickonProfileButton(){
        await this.btnProfile.click();
    }
    async clickonLogoutButton(){
        await this.bthLogout.click();
    }
}
