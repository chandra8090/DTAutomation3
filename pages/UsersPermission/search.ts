import { expect, Locator, Page } from '@playwright/test';

export class SearchInUserAndPermission{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnprocessorHeader: Locator;
    readonly configurationicon:Locator;
    readonly UserAndPermission:Locator;
    readonly searchBox:Locator;
    readonly validation:Locator;
    readonly btnProfile:Locator;
    readonly bthLogout:Locator;

    

    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnprocessorHeader=page.locator('text=chandra123 >> nth=1');
        this.configurationicon=page.locator('div:nth-child(6) > div > div > .pi');
        this.UserAndPermission=page.locator('span:has-text("Users & Permissions")');
        this.searchBox=page.locator('[placeholder="Search"]');
        this.validation=page.locator('text=Users & Permissions >> nth=1');
        this.btnProfile=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');
    }


    async searchInuser(){
        await this.clickonHeader();
        await this.clickOnConfiguration();
        await this.selcetUserAndPermission();
        await this.clickOnseacrhBox();
        await this.validatingOnUserPermissionPage();
        await this.clickonProfileButton();
        await this.clickonLogoutButton();
    }

    async clickonHeader(){
        await this.btnprocessorHeader.click();
    }
    async clickOnConfiguration(){
        await this.configurationicon.click();
    }
    async selcetUserAndPermission(){
        await this.UserAndPermission.click();
    }
    async clickOnseacrhBox(){
        await this.searchBox.fill('revathi');
    }
    async validatingOnUserPermissionPage(){
        await this.validation.isVisible();
    }
    async clickonProfileButton(){
        await this.btnProfile.click();
    }
    async clickonLogoutButton(){
        await this.bthLogout.click();
    }



}