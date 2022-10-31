import { expect, Locator, Page } from '@playwright/test';

export class AddedingAlVector{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnprocessorHeader: Locator;
    readonly AutomationIcon:Locator;
    readonly MappingIcon:Locator;
    readonly Agency:Locator;
    readonly dropdown:Locator;
    readonly Text:Locator;
    readonly format:Locator;
    readonly fieldAutomatio:Locator;
    readonly ApplyAutomation:Locator;
    readonly btnSave:Locator;
    readonly btnProfile:Locator;
    readonly bthLogout:Locator;



    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnprocessorHeader=page.locator('text=chandra123 >> nth=1');
        this.AutomationIcon=page.locator('.automationIcon');
        this.MappingIcon=page.locator('span:has-text("Mappings")');
        this.Agency=page.locator('text=Agency');
        this.dropdown=page.locator('p-dropdown div:has-text("Text")');
        this.Text=page.locator('[aria-label="Text"] >> text=Text');
        this.format=page.locator('p-radiobutton:nth-child(3) > .p-radiobutton > .p-radiobutton-box');
        this.fieldAutomatio=page.locator('text=Contains AI/ML Patterns DataFields that contain information that could be useful >> div >> nth=2');
        this.ApplyAutomation=page.locator('text=Apply AutomationIf you would like to use the AI/ML Patterns Engine to Automatica >> div >> nth=2');
        this.btnSave=page.locator('button:has-text("Save")');
        this.btnProfile=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');
    }

    
    async AddingAutomation(){
        await this.clickonHeader();
        await this.clickOnAutomationIcon();
        await this.clickOnMapping();
        await this.clickOnAnyField();
        await this.clickOndropdownButton();
        await this.SelectedText();
        await this.selectingFormat();
        await this.clickOnfieldAutomatio();
        await this.selectingApplyAutomation();
        await this.clickOnBtnSave();
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
    async clickOnAnyField(){
        await this.Agency.click();
    }
    async clickOndropdownButton(){
        await this.dropdown.click();
    }
    async SelectedText(){
        await this.Text.click();
    }
    async selectingFormat(){
        await this.format.click();
    }
    async clickOnfieldAutomatio(){
        await this.fieldAutomatio.click();
    }

    async selectingApplyAutomation(){
        await this.ApplyAutomation.click();
    }
    async clickOnBtnSave(){
        await this.btnSave.click();
    }
    async clickonProfileButton(){
        await this.btnProfile.click();
    }
    async clickonLogoutButton(){
        await this.bthLogout.click();
    }


}