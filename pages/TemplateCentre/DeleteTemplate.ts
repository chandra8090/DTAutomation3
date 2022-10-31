import { expect, Locator, Page } from '@playwright/test';

export class DeleteingTemplate{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly clickTemplateIcon:Locator;
    readonly clickOnTemplateOptions:Locator;
    readonly btnDelete:Locator;
    readonly btnYes:Locator;
    readonly btnProfile:Locator;
    readonly bthLogout:Locator;



    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.clickTemplateIcon=page.locator('div.d-flex.processes-page-controls-globe');
        this.clickOnTemplateOptions=page.locator('text=Created By: Iron Man, QA Engineerjanc##hasn@@vat69Use this TemplateOptions >> button >> nth=1');
        this.btnDelete=page.locator('text=Delete Template');
        this.btnYes=page.locator('button:has-text("Yes")');
        this.btnProfile=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');

    }


    async DeleteTheTemplate(){
        await this.clickOnTemplateImage();
        await this.ClickingOnTemplate();
        await this.buttonDelete();
        await this.clickOnBtnYes();
        await this.clickonProfileButton();
        await this.clickonLogoutButton();

    }
    async clickOnTemplateImage(){
        await this.clickTemplateIcon.click();
    }
    async ClickingOnTemplate(){
        await this.clickOnTemplateOptions.click();
    }
    async buttonDelete(){
        await this.btnDelete.click();
    }
    async clickOnBtnYes(){
        await this.btnYes.click();
    }
    async clickonProfileButton(){
        await this.btnProfile.click();
    }
    async clickonLogoutButton(){
        await this.bthLogout.click();
    }
    
    


}