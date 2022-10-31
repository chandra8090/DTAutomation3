import { expect, Locator, Page } from '@playwright/test';

export class SearchBacklogpage{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnprocessorHeader: Locator; 
    readonly bthBacklog:Locator;
    readonly lblsearch:Locator;
    readonly btnProfile:Locator;
    readonly bthLogout:Locator;
    readonly ValidatingBacklogPage:Locator;
    readonly userProfileicon:Locator;

    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnprocessorHeader=page.locator('.details-header >> nth=0');
        this.bthBacklog=page.locator('div#sideMenuDiv>div:first-of-type');
        this.lblsearch=page.locator('[placeholder="Search"]');
        this.ValidatingBacklogPage=page.locator('div.dashboard__header');
        this.userProfileicon=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');

    }

    async VerifySearchOptionInBacklogPages(){
        await this.clickonHeader();
        await this.clickonBacklogFeature();
        //await this.ValidatingBacklogscreen();
        await this.TextOnSearchLocation();
        await this.ValidatingBacklogscreen();
        await this.clickonUserProfileicon();
        await this.clickonLogoutButton();

    }
    async clickonUserProfileicon(){
        await this.userProfileicon.click();
    }
    async ValidatingBacklogscreen(){
        await expect(this.page.locator('div.dashboard__header,validatedSucessful')).toBeVisible();
    }

    async clickonHeader(){
        await this.btnprocessorHeader.click();
    }
    async clickonBacklogFeature(){
        await this.bthBacklog.click();
    }
    async TextOnSearchLocation(){
        await this.lblsearch.fill('india');
    }

    async clickonProfileButton(){
        await this.btnProfile.click();
    }
    async clickonLogoutButton(){
        await this.bthLogout.click();
    }
}