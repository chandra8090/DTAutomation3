import { expect, Locator, Page } from '@playwright/test';

export class searchingFieldsInMapping{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnprocessorHeader: Locator;
    readonly AutomationIcon:Locator;
    readonly MappingIcon:Locator;
    readonly searchBox:Locator;
    readonly validatingSearchField:Locator;
    readonly btnProfile:Locator;
    readonly bthLogout:Locator;


    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnprocessorHeader=page.locator('text=chandra123 >> nth=1');
        this.AutomationIcon=page.locator('.automationIcon');
        this.MappingIcon=page.locator('span:has-text("Mappings")');
        this.searchBox=page.locator('[placeholder="Search"]');
        this.validatingSearchField=page.locator('button:has-text("New Field")');
        this.btnProfile=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');
    }




    async SearchInMapping(){
        await this.clickonHeader();
        await this.clickOnAutomationIcon();
        await this.clickOnMapping();
        await this.clickingOnSearchBox();
        await this.validatingField();
        await this.clickonProfileButton();
        await this.clickonLogoutButton();
    }



    async clickonHeader(){
        await this.btnprocessorHeader.click();
    }
    async clickOnAutomationIcon(){
        await this.AutomationIcon.click();
    }
    async clickOnMapping(){
        await this.MappingIcon.click();
    }
    async clickingOnSearchBox(){
        await this.searchBox.fill('summary');
    }
    async validatingField(){
        await this.validatingSearchField.isVisible();
    }
    async clickonProfileButton(){
        await this.btnProfile.click();
    }
    async clickonLogoutButton(){
        await this.bthLogout.click();
    }

}