import { expect, Locator, Page } from '@playwright/test';

export class SortingReportNamr{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly clickingOnProcess:Locator;
    readonly Backlog:Locator;
    readonly ReportFeature:Locator;
    readonly AllReportsPage:Locator;
    readonly ReportNameSortingIcon:Locator;
    readonly btnProfile:Locator;
    readonly bthLogout:Locator;


    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.clickingOnProcess=page.locator('text=Role-1 >> nth=1');
        this.Backlog=page.locator('text=Backlog >> nth=1');
        this.ReportFeature=page.locator('(//em[@class="pi pi-chart-bar ng-star-inserted"])[1]');
        this.AllReportsPage=page.locator('span:has-text("All Reports")');
        this.ReportNameSortingIcon=page.locator('text=Report Name >> i');
        this.btnProfile=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');
    
    
    }

    async SortingNameReport(){
        await this.ActionOnProcess();
        await this.ValiadtingBacklogPage();
        await this.selectingOnReportIcon();
        await this.clickOnAllReportsButton();
        await this.clickOnSortingIcon();
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
    async clickOnSortingIcon(){
        await this.ReportNameSortingIcon.click();
    }
    async clickonProfileButton(){
        await this.btnProfile.click();
    }
    async clickonLogoutButton(){
        await this.bthLogout.click();
    }



}
