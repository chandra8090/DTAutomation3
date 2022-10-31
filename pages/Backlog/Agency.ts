import { expect, Locator, Page } from '@playwright/test';

export class AgencyInBacklogPage{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnprocessorHeader: Locator; 
    readonly bthBacklog:Locator;
    readonly btnAgency:Locator;
    readonly dropdown:Locator;
    readonly containsSelected:Locator;
    readonly fillAgencyContains:Locator;
    readonly btnApply:Locator;
    readonly btnProfile:Locator;
    readonly bthLogout:Locator;


    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnprocessorHeader=page.locator('text=chandra123 >> nth=1');
        this.bthBacklog=page.locator('div#sideMenuDiv>div:first-of-type');
        this.btnAgency=page.locator('text=Agency');
        this.dropdown=page.locator('text=ContainsAdd Condition >> div[role="button"]');
        this.containsSelected=page.locator('[aria-label="Contains"] >> text=Contains');
        this.fillAgencyContains=page.locator('input[type="text"] >> nth=2');
        this.btnApply=page.locator('button:has-text("Apply")');
        this.btnProfile=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');
    }

    async VerifyAgencyPage(){
        await this.clickonHeader();
        await this.clickonBacklogFeature();
        await this.clickOnAgencyButton();
        await this.ClickonDropDown();
        await this.ClickOnAgentContains();
        await this.fillAgency();
        await this.clickonApplyButton();
        await this.clickonProfileButton();
        await this.clickonLogoutButton();
    }

    async clickonApplyButton(){
        await this.btnApply.click();
    }
   
    async clickonProfileButton(){
        await this.btnProfile.click();
    }
    async clickonLogoutButton(){
        await this.bthLogout.click();
    }
    async fillAgency(){
        await this.fillAgencyContains.fill('testing');
    }
    async ClickOnAgentContains(){
        await this.containsSelected.click();
    }

    async ClickonDropDown(){
        await this.dropdown.click();
    }
    async clickOnAgencyButton(){
        await this.btnAgency.click();
    }

    async clickonHeader(){
        await this.btnprocessorHeader.click();
    }
    async clickonBacklogFeature(){
        await this.bthBacklog.click();
    }



}