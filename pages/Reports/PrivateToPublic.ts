import { expect, Locator, Page } from '@playwright/test';

export class PrivateToPublicReport{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly clickingOnProcess:Locator;
    readonly Backlog:Locator;
    readonly ReportFeature:Locator;
    readonly AllReportsPage:Locator;
    readonly Settings:Locator;
    readonly accessDropDown:Locator;
    readonly public:Locator;
    readonly btnSave:Locator;
    readonly btnProfile:Locator;
    readonly bthLogout:Locator;


    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.clickingOnProcess=page.locator('text=Role-1 >> nth=1');
        this.Backlog=page.locator('text=Backlog >> nth=1');
        this.ReportFeature=page.locator('(//em[@class="pi pi-chart-bar ng-star-inserted"])[1]');
        this.AllReportsPage=page.locator('span:has-text("All Reports")');
        this.Settings=page.locator('text=uuuuuuuuuuuuuuuuuuuuuuuu rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr 09/06/2022 p >> img').nth(3);
        this.accessDropDown=page.locator('text=Accessprivate >> div[role="button"]');
        this.public=page.locator('ul[role="listbox"] div:has-text("public")');
        this.btnSave=page.locator('button:has-text("Save")');
        this.btnProfile=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');
    }

    async ChangeingPrivateToPublicReport(){
        await this.ActionOnProcess();
        await this.ValiadtingBacklogPage();
        await this.selectingOnReportIcon();
        await this.clickOnAllReportsButton();
        await this.clickOnSettingIcon();
        await this.selcetingdropdown();
        await this.selectPublic();
        await this.ButtonSave();
        await this.clickonProfileButton();
        await this.clickonLogoutButton();

    }


    async ActionOnProcess(){
        await this.clickingOnProcess.click();
    }
    async ValiadtingBacklogPage(){
        await this.Backlog.isVisible();
    }
    async selectingOnReportIcon(){
        await this.ReportFeature.click();

    }
    async clickOnAllReportsButton(){
        await this.AllReportsPage.click();
    }
    async clickOnSettingIcon(){
        await this.Settings.click();
    }
    async selcetingdropdown(){
        await this.accessDropDown.click();
    }
    async selectPublic(){
        await this.public.click();
    }
    async ButtonSave(){
        await this.btnSave.click();
    }
    async clickonProfileButton(){
        await this.btnProfile.click();
    }
    async clickonLogoutButton(){
        await this.bthLogout.click();
    }



}
