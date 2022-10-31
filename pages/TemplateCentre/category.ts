import { expect, Locator, Page } from '@playwright/test';

export class CategoryInTemplate{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly clickTemplateIcon:Locator;
    readonly selectAgile:Locator;
    readonly ValidationOfAgile:Locator;
    readonly ShowAll:Locator;
    readonly btnProfile:Locator;
    readonly bthLogout:Locator;

    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.clickTemplateIcon=page.locator('div.d-flex.processes-page-controls-globe');
        this.selectAgile=page.locator('//div[@class="mt14 d-flex align-items-center ng-star-inserted"][2]');
        this.ValidationOfAgile=page.locator('(//div[contains(text(),"AGILE")])[1]');
        this.ShowAll=page.locator('//div[@class="p-radiobutton-box p-highlight"]');
        this.btnProfile=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');
    }


    async selectingCategoryInTemplatesCentre(){
        await this.clickOnTemplateImage();
        await this.clickOnAgile();
        await this.ValidationOfAgilePage();
        await this.clickOnShowAll();
        await this.clickonProfileButton();
        await this.clickonLogoutButton();
    }

    async clickOnTemplateImage(){
        await this.clickTemplateIcon.click();
    }

    async clickOnAgile(){
        await this.selectAgile.click();
    }
    async ValidationOfAgilePage(){
        await this.ValidationOfAgile.isVisible();
    }
    async clickOnShowAll(){
        await this.ShowAll.click();
    }
    async clickonProfileButton(){
        await this.btnProfile.click();
    }
    async clickonLogoutButton(){
        await this.bthLogout.click();
    }


}