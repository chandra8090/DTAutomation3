import { expect, Locator, Page } from '@playwright/test';

export class ViewTemplates{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnTemplate:Locator;
    readonly validatingTemplatesCentrePage:Locator;
    readonly clickOnProcessActivity:Locator;
    readonly editTemplate:Locator;
    readonly TemplateName:Locator;
    readonly btnpublish:Locator;


    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnTemplate=page.locator('em');
        this.validatingTemplatesCentrePage=page.locator('a > img');
        this.clickOnProcessActivity=page.locator('text=Created By: Munta HarshaRetailUse this TemplateOptions >> button >> nth=1');
        this.editTemplate=page.locator('text=Edit Template');
        this.TemplateName=page.locator('textarea >> nth=0');
        this.btnpublish=page.locator('button:has-text("Publish")');
    }


    async CheckingTemplates(){
        await this.clickOnIconTemplate();
        await this.validatingTemplateScreen();
        await this.clickOnOptions();
        await this.SelectEditTemplate();
        await this.EditTemplateName();
        await this.clickOnPublish();
    
    }

    async clickOnIconTemplate(){
        await this.btnTemplate.click();
     }
     async validatingTemplateScreen(){
        await expect(this.page.locator('a > img')).toBeVisible();
     }
        async clickOnOptions(){
            await this.clickOnProcessActivity.click();
        }
    async SelectEditTemplate(){
        await this.editTemplate.click();

    }
    async EditTemplateName(){
        await this.TemplateName.fill('Test123');
    }
    async clickOnPublish(){
        await this.btnpublish.click();

    }
}