import { expect, Locator, Page } from '@playwright/test';

export class CandidateNameBacklogPage{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnprocessorHeader: Locator; 
    readonly bthBacklog:Locator;
    readonly btnCandidateName:Locator;
    readonly lblCandidateNamedropdown:Locator;
    readonly lblcontains:Locator;
    readonly lblCandidateNamecontainsfeild:Locator;
    readonly btnbacklogicon:Locator;
    readonly btnApply:Locator;
    readonly ValidatingOnBacklog
    readonly btnProfile:Locator;
    readonly bthLogout:Locator;

    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnprocessorHeader=page.locator('//div[@class="details-header" and text()="chandra123"]');
        this.bthBacklog=page.locator('div#sideMenuDiv>div:first-of-type');
        this.btnCandidateName=page.locator('text=Candidate Name');
        this.lblCandidateNamedropdown=page.locator('text=ContainsAdd Condition >> div[role="button"]');
        this.lblcontains=page.locator('[aria-label="Contains"] >> text=Contains');
        this.lblCandidateNamecontainsfeild=page.locator('input[type="text"] >> nth=2');
       // this.btnbacklogicon=page.locator('text=Backlog >> nth=1');
        this.btnApply=page.locator('button:has-text("Apply")');
        this.ValidatingOnBacklog=page.locator('div.dashboard__header');
        this.btnProfile=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');
    }


    async VerifyCandidateNamePage(){
        await this.clickonHeader();
        await this.clickonBacklogFeature();
        await this.clickonCandidateButton();
        await this.clickonCandidateDropDown();
        await this.clickonCandidateNameContainsfeild();
        await this.clickonApplyButton();
        await this.ValidatingBacklogPage();
        await this.clickonProfileButton();
        await this.clickonLogoutButton();

    }
    async ValidatingBacklogPage(){
        await expect(this.page.locator('div.dashboard__header,ValidatingBacklogScreen')).toBeVisible();
    }
    async clickonHeader(){
        await this.btnprocessorHeader.click();
    }
    async clickonBacklogFeature(){
        await this.bthBacklog.click();
    }
    async clickonCandidateButton(){
        await this.btnCandidateName.click();
    }
    async clickonCandidateDropDown(){
        await this.lblCandidateNamedropdown.click();
    }
    async clickonCandidateNameContainsfeild(){
        await this.lblCandidateNamecontainsfeild.fill('gold123');
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


}