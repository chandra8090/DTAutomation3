import { expect, Locator, Page } from '@playwright/test';

export class ResetFilterInBacklogPage{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnprocessorHeader: Locator; 
    readonly bthBacklog:Locator;
    readonly btnResetfilter:Locator;



    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnprocessorHeader=page.locator('text=chandra123 >> nth=1');
        this.bthBacklog=page.locator('div#sideMenuDiv>div:first-of-type');
        this.btnResetfilter=page.locator('text=Reset Filters');
    }


    async VerifyResetFilter(){
        await this.clickonHeader();
        await this.clickonBacklogFeature();
        await this.ClickOnResetFilter();
    }
    async clickonHeader(){
        await this.btnprocessorHeader.click();
    }
    async clickonBacklogFeature(){
        await this.bthBacklog.click();
    }
    async ClickOnResetFilter(){
        await this.btnResetfilter.click();
    }



}

