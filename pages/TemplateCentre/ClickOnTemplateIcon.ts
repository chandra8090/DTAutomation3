import { expect, Locator, Page } from '@playwright/test';

export class clickOnTemplateCentreIcon{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly clickTemplateIcon:Locator;
    readonly searchBar:Locator;
    readonly Validation:Locator;
    readonly btnProfile:Locator;
    readonly bthLogout:Locator;

    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.clickTemplateIcon=page.locator('div.d-flex.processes-page-controls-globe');
        this.searchBar=page.locator('text=Template Center Get a head start on your next process >> input[type="text"]'); 
        this.Validation=page.locator('div.logo-container')
        this.btnProfile=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');
    }

    async TemplateIcon(){
        await this.clickOnTemplateImage();
        await this.clickOnSearchBar();
        //await this.CheckingPage();
        await this.clickonProfileButton();
        await this.clickonLogoutButton();


    }
    async clickOnTemplateImage(){
        await this.clickTemplateIcon.click();
    }
    async clickOnSearchBar(){
     await this.searchBar.fill('hr');
    }
    async CheckingPage(){
        await this.Validation.isChecked();
    }
    async clickonProfileButton(){
        await this.btnProfile.click();
    }
    async clickonLogoutButton(){
        await this.bthLogout.click();
    }

}