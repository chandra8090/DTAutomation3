import { expect, Locator, Page } from '@playwright/test';

export class ShareAReport{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly clickingOnProcess:Locator;
    readonly Backlog:Locator;
    readonly ReportFeature:Locator;
    readonly AllReportsPage:Locator;
    readonly ReportNameTest1:Locator;
    readonly BookMark:Locator;
    readonly Share:Locator;
    readonly People:Locator;
    readonly shareReport:Locator;
    readonly btnProfile:Locator;
    readonly bthLogout:Locator;


    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.clickingOnProcess=page.locator('text=Role-1 >> nth=1');
        this.Backlog=page.locator('text=Backlog >> nth=1');
        this.ReportFeature=page.locator('(//em[@class="pi pi-chart-bar ng-star-inserted"])[1]');
        this.AllReportsPage=page.locator('span:has-text("All Reports")');
        this.ReportNameTest1=page.locator('text=tttttttest123');
        this.BookMark=page.locator('text=All Reports Export Share Add Chart Publish >> img >> nth=1');
        this.Share=page.locator('text=Share');
        this.People=page.locator('div:nth-child(4) > .list > .ng-untouched > .p-checkbox > .p-checkbox-box');
        this.shareReport=page.locator('button:has-text("Share")');
        this.btnProfile=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');
    
    
    }

    async sharingAReport(){
        await this.ActionOnProcess();
        await this.ValiadtingBacklogPage();
        await this.selectingOnReportIcon();
        await this.clickOnAllReportsButton();
        await this.clickOnAnyReport();
        await this.selectBookMark();
        await this.ShareAReportToPeople();
        await this.clickOnShareButton();
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
    async clickOnAnyReport(){
        await this.ReportNameTest1.click();
    }
    async selectBookMark(){
        await this.BookMark.click();
    }
    async ShareAReportToPeople(){
        await this.People.click();
    }
    async clickOnShareButton(){
        await this.shareReport.click();
    }
    async clickonProfileButton(){
        await this.btnProfile.click();
    }
    async clickonLogoutButton(){
        await this.bthLogout.click();
    }

}