import { expect, Locator, Page } from '@playwright/test';


export class SummaryOnBacklogPage{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnprocessorHeader: Locator; 
    readonly bthBacklog:Locator;
    readonly Activity:Locator;


    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnprocessorHeader=page.locator('//div[@class="details-header" and text()="chandra"]');
        this.bthBacklog=page.locator('div#sideMenuDiv>div:first-of-type');
        this.Activity=page.locator('div#sideMenuDiv>div:first-of-type');
    }


    async VerifySummaryInBacklogPages(){
        await this.clickonHeader();
        await this.clickonBacklogFeature();
    }

    async clickonHeader(){
        await this.btnprocessorHeader.click();
    }
    async clickonBacklogFeature(){
        await this.bthBacklog.click();
    }
async clickOnFirstActivity(){
    await this.Activity.click();
}



}