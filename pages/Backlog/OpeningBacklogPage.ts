import { expect, Locator, Page } from '@playwright/test';


export class OpenBacklogPage{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnprocessorHeader: Locator; 
    readonly bthBacklog:Locator;
    readonly ValidatingOnBacklog:Locator;
    readonly userProfileicon:Locator;
    readonly bthLogout:Locator;

    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnprocessorHeader=page.locator('text=cf >> nth=1');
        this.bthBacklog=page.locator('div#sideMenuDiv>div:first-of-type');
        this.ValidatingOnBacklog=page.locator('div.dashboard__header');
        this.userProfileicon=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');
    
        }

    async VerifyingBacklogPages(){
        await this.clickonHeader();
        await this.clickonBacklogFeature();
        await this.ValidatingBacklogPage();
        await this.clickonUserProfileicon();
        await this.clickonLogoutButton();
    }

    async clickonHeader(){
        await this.btnprocessorHeader.click();
    }
    async clickonBacklogFeature(){
        await this.bthBacklog.click();
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

}