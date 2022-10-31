import { expect, Locator, Page } from '@playwright/test';

export class EditingTemplate{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly clickTemplateIcon:Locator;
    readonly clickOnTemplateOptions:Locator;
    readonly selectEditTemplate:Locator;
    readonly TemplateName:Locator;
    readonly Des:Locator;
    readonly Tags:Locator;
    readonly Category:Locator;
    readonly publish:Locator;
    readonly btnProfile:Locator;
    readonly bthLogout:Locator;


    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.clickTemplateIcon=page.locator('div.d-flex.processes-page-controls-globe');
        this.clickOnTemplateOptions=page.locator('text=Software Development and Extreme programming Show All Extreme Programming Proces >> button >> nth=0');
        this.selectEditTemplate=page.locator('text=Edit Template');
        this.TemplateName=page.locator('textarea >> nth=0');
        this.Des=page.locator('text=HeadingSubheadingNormal Sans SerifSerifMonospace ukhfgdh >> div >> nth=2');
        this.Tags=page.locator('text=janc##hasn@@vat69plusuiuatjira >> input[role="searchbox"]');
        this.Category=page.locator('text=CategoryAGILE >> input[role="searchbox"]');
        this.publish=page.locator('button:has-text("Publish")');
        this.btnProfile=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');
    
    
    }

    
    async EditInTemplate(){
        await this.clickOnTemplateImage();
        await this.ClickingOnTemplate();
        await this.SelectingEditButton();
        await this.fillTemplateName();
        await this.BtnPublish();
        await this.clickonProfileButton();
        await this.clickonLogoutButton();
    }


    async clickOnTemplateImage(){
        await this.clickTemplateIcon.click();
    }
    async ClickingOnTemplate(){
        await this.clickOnTemplateOptions.click();
    }
    async SelectingEditButton(){
        await this.selectEditTemplate.click();
    }
    async fillTemplateName(){
        await this.TemplateName.fill('Qa-Automation');
        await this.Des.fill('Hello');
        await this.Tags.fill('software');
        await this.Category.fill('abcdef');
    }
    async BtnPublish(){
    await this.publish.click();

    }
    async clickonProfileButton(){
        await this.btnProfile.click();
    }
    async clickonLogoutButton(){
        await this.bthLogout.click();
    }
    

}