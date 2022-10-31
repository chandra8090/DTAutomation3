import { expect, Locator, Page } from '@playwright/test';

export class AddingNewField{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnprocessorHeader: Locator;
    readonly AutomationIcon:Locator;
    readonly MappingIcon:Locator;
    readonly NewField:Locator;
    readonly DisplayName:Locator;
    readonly FieldDetails:Locator;
    readonly Text:Locator;
    readonly LongText:Locator;
    readonly save:Locator;
    readonly btnProfile:Locator;
    readonly bthLogout:Locator;


    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnprocessorHeader=page.locator('text=chandra123 >> nth=1');
        this.AutomationIcon=page.locator('.automationIcon');
        this.MappingIcon=page.locator('span:has-text("Mappings")');
        this.NewField=page.locator('button:has-text("New Field")');
        this.DisplayName=page.locator('input[type="text"] >> nth=1');
        this.FieldDetails=page.locator('text=Data TypeSelect... >> div[role="button"]');
        this.Text=page.locator('[aria-label="Text"] >> text=Text');
        this.LongText=page.locator('p-radiobutton:nth-child(3) > .p-radiobutton > .p-radiobutton-box');
        this.save=page.locator('button:has-text("Save")');
        this.btnProfile=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');
    }

    async AddedNewFieldInMapping(){
        await this.clickonHeader();
        await this.clickOnAutomationIcon();
        await this.clickOnMapping();
        await this.clickOnNewField();
        await this.EnterDisplayName();
        await this.DropDownField();
        await this.selectingText();
        await this.selectingLongText();
        await this.ClickOnSaveButton();
        await this.clickonProfileButton();
        await this.clickonLogoutButton();
    }

    async clickonHeader(){
        await this.btnprocessorHeader.click();
    }
    async clickOnAutomationIcon(){
        await this.AutomationIcon.click();
    }
    async clickOnMapping(){
        await this.MappingIcon.click();
    }
    async clickOnNewField(){
        await this.NewField.click();
    }
    async EnterDisplayName(){
        await this.DisplayName.fill('testing');
    }
    async DropDownField(){
        await this.FieldDetails.click();
    }
    async selectingText(){
        await this.Text.click();
    }
    async selectingLongText(){
        await this.LongText.click();
    }
    async ClickOnSaveButton(){
        await this.save.click();
    }
    async clickonProfileButton(){
        await this.btnProfile.click();
    }
    async clickonLogoutButton(){
        await this.bthLogout.click();
    }
}