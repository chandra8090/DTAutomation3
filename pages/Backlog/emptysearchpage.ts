import { expect, Locator, Page } from '@playwright/test';

export class SearchBacklogpage{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnprocessorHeader: Locator; 
    readonly bthBacklog:Locator;
    readonly lblsearch:Locator;
    readonly lblemptysearch:Locator;
    readonly btnProfile:Locator;
    readonly bthLogout:Locator;

    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnprocessorHeader=page.locator('//div[@class="details-header" and text()="chandra"]');
        this.bthBacklog=page.locator('div#sideMenuDiv>div:first-of-type');
        this.lblsearch=page.locator('[placeholder="Search"]');
        this.lblemptysearch=page.locator('cdk-virtual-scroll-viewport');
        this.btnProfile=page.locator('.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');

    }

    async VerifySearchOptionInBacklogPages(){
        await this.clickonHeader();
        await this.clickonBacklogFeature();
        await this.TextOnSearchLocation();
        await this.clickonProfileButton();
        await this.clickonLogoutButton();

    }

    async clickonHeader(){
        await this.btnprocessorHeader.click();
    }
    async clickonBacklogFeature(){
        await this.bthBacklog.click();
    }
    async TextOnSearchLocation(){
        await this.lblsearch.fill('dwdw');
    }
    async clickonProfileButton(){
        await this.btnProfile.click();
    }
    async clickonLogoutButton(){
        await this.bthLogout.click();
    }
}