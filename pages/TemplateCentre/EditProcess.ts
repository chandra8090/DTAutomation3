import { expect, Locator, Page } from '@playwright/test';

export class EditProcessInActivity{
    readonly page: Page;
    readonly Group:Locator;
    readonly options:Locator;
    readonly editProcess:Locator;
    readonly ProcessName:Locator;
    readonly des:Locator;
    readonly btnsave:Locator;

    constructor(page: Page){
        this.page=page;
        this.Group=page.locator('text=Role-1 >> nth=1');
        this.options=page.locator('div#options-button-862');
        this.editProcess=page.locator('text=Edit Process');
        this.ProcessName=page.locator('text=Process Name Description >> input[type="text"]');
        this.des=page.locator('textarea');
        this.btnsave=page.locator('button:has-text("Save")');
    }

    async EditProcess1(){
        await this.clickOnGroupActivity();
        await this.selectOnOptionButton();
        await this.selectEditProcess();
        await this.EditProcessName();
        await this.EnterDescription();
        await this.clickOnSave();

    }
    async clickOnGroupActivity(){
        await this.Group.isVisible;
     }
     async selectOnOptionButton(){
        await this.options.click();
     }
     async selectEditProcess(){
        await this.editProcess.click();
     }
     async EditProcessName(){
        await this.ProcessName.fill('Role12');
     }
     async EnterDescription(){
        await this.des.fill('Hello');
     }
     async clickOnSave(){
        await this.btnsave.click();
     }

}
