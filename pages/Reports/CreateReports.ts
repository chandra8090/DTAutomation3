import { expect, Locator, Page } from '@playwright/test';

export class CreateReport{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly clickingOnProcess:Locator;
    readonly Backlog:Locator;
    readonly ReportFeature:Locator;
    readonly AllReportsPage:Locator;
    readonly btnCreate:Locator;
    readonly ReportName:Locator;
    readonly description:Locator;
    readonly AccessDropDown:Locator;
    readonly SelectOnPrivate:Locator;
    readonly btnCreate1:Locator;
    readonly btnProfile:Locator;
    readonly bthLogout:Locator;
    


    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.clickingOnProcess=page.locator('text=Role-1 >> nth=1');
        this.Backlog=page.locator('text=Backlog >> nth=1');
        this.ReportFeature=page.locator('(//em[@class="pi pi-chart-bar ng-star-inserted"])[1]');
        this.AllReportsPage=page.locator('span:has-text("All Reports")');
        this.btnCreate=page.locator('button:has-text("Create Report")');
        this.ReportName=page.locator('input[type="text"] >> nth=1');
        this.description=page.locator('textarea');
        this.AccessDropDown=page.locator('text=AccessSelect >> div[role="button"]');
        this.SelectOnPrivate=page.locator('span:has-text("private")');
        this.btnCreate1=page.locator('div[role="dialog"] button:has-text("Create")');
        this.btnProfile=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');
    }



    async CreateingAReport(){
        await this.ActionOnProcess();
        await this.ValiadtingBacklogPage();
        await this.selectingOnReportIcon();
        await this.clickOnAllReportsButton();
        await this.clickOnCreateButton();
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
    async clickOnCreateButton(){
        await this.btnCreate.click();
        await this.ReportName.fill('TestingQA');
        await this.description.fill('hello');
        await this.AccessDropDown.click();
        await this.SelectOnPrivate.click();
        await this.btnCreate1.click();
    }
    async clickonProfileButton(){
        await this.btnProfile.click();
    }
    async clickonLogoutButton(){
        await this.bthLogout.click();
    }





}