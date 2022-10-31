import { expect, Locator, Page } from '@playwright/test';

export class SelectingTagOnTemplateCentre{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly clickTemplateIcon:Locator;
    readonly Sales:Locator;
    readonly validatingSalesPage:Locator;
    readonly TagSearchBox:Locator;
    readonly btnHiring:Locator;
    readonly validatingTag:Locator;
    readonly btnProfile:Locator;
    readonly bthLogout:Locator;


    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.clickTemplateIcon=page.locator('div.d-flex.processes-page-controls-globe');
        this.Sales=page.locator('(//div[@class="m6px ng-star-inserted"])[10]');
        this.validatingSalesPage=page.locator('//span[@class="serch-tag-name"]');
        this.TagSearchBox=page.locator('//input[@class="form-control search-control br20 popular-tag-search-input p-inputtext p-component ng-untouched ng-pristine ng-valid"]');
        this.btnHiring=page.locator('//span[@class="tag-name"]');
        this.validatingTag=page.locator('//span[@class="serch-tag-name"]');
        this.btnProfile=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');
    }

    async TagsInTemplateIcon(){
        await this.clickOnTemplateImage();
        await this.selectingTag();
        await this.ValidatingPageInTag();
        await this.TagsSearch();
        await this.clickonProfileButton();
        await this.clickonLogoutButton();
    }

    async clickOnTemplateImage(){
        await this.clickTemplateIcon.click();
    }
    async selectingTag(){
        await this.Sales.click();
    }
   async ValidatingPageInTag(){
    await this.validatingSalesPage.isVisible();
   }
   async TagsSearch(){
    await this.TagSearchBox.fill('Hiring');
    await this.btnHiring.click();
    await this.validatingTag.isVisible();
   }
   async clickonProfileButton(){
    await this.btnProfile.click();
}
async clickonLogoutButton(){
    await this.bthLogout.click();
}
}