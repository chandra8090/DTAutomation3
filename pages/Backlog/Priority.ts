import { expect, Locator, Page } from '@playwright/test';

export class PriorityInBacklogPage{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnprocessorHeader: Locator; 
    readonly bthBacklog:Locator;
    readonly btnPriority:Locator;
    readonly btnManageFilter:Locator;
    readonly searchfield:Locator;
    readonly selectOnPriorityCheckBox:Locator;
    readonly clickonbacklogscreen:Locator;
    readonly btnPrority:Locator;
    readonly lblproritydropdown:Locator;
    readonly lblcontains:Locator;
    readonly lblprorityLevel:Locator;
    readonly lblproritycontainsfieldLevel:Locator;
    //readonly btnbacklogicon:Locator;
    readonly btnApply:Locator;
    readonly btnProfile:Locator;
    readonly bthLogout:Locator;

    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnprocessorHeader=page.locator('text=chandra123 >> nth=1');
        this.bthBacklog=page.locator('div#sideMenuDiv>div:first-of-type');
        this.btnPriority=page.locator('text=Priority');
        this.btnManageFilter=page.locator('button:has-text("Manage Filters")');
        this.searchfield=page.locator('text=FiltersSelectedReset Candidate Name Status 1 Agency Region Role Unselected Prior >> [placeholder="Search"]');
        this.selectOnPriorityCheckBox=page.locator('text=Priority >> nth=1');
        this.clickonbacklogscreen=page.locator('text=Backlog chandra CB');
        this.btnPrority=page.locator('text=Priority >> nth=1');
        this.lblproritydropdown=page.locator('div[role="button"]');
        this.lblcontains=page.locator('[aria-label="Is"] >> text=Is');
        this.lblprorityLevel=page.locator('text=Is Select Priority >> span >> nth=3');
        this.lblproritycontainsfieldLevel=page.locator('[aria-label="Medium"] div >> nth=1');
        //this.btnbacklogicon=page.locator('text=Backlog >> nth=1');
        this.btnApply=page.locator('button:has-text("Apply")');
        this.btnProfile=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');
    }


    async VerifyProrityPage(){
        await this.clickonHeader();
        await this.clickonBacklogFeature();
        //await this.clickOnPriority();
       await this.clickonManageFilter();
        await this.TypeOnSearchField();
        await this.clickOnBacklogScreenPage();
        await this.clickonbtnPrority();
        await this.clickonProrityDropDown();
        await this.clickOnProrityLevel();
        await this.clickonApplyButton();
        await this.clickonProfileButton();
        await this.clickonLogoutButton();

    }

    async clickOnPriority(){
        await this.btnPriority.click();
    }
    async clickonHeader(){
        await this.btnprocessorHeader.click();
    }
    async clickonBacklogFeature(){
        await this.bthBacklog.click();
    }
    async clickonbtnManageFilter(){
        await this.btnManageFilter.click();
    }
    async clickonManageFilter(){
        await this.btnManageFilter.click();
    }
    async TypeOnSearchField(){
        await this.searchfield.fill('priority');
    }
    async clickOnPriortyCheckBokPage(){
        await this.selectOnPriorityCheckBox.click();
    }
    async clickOnBacklogScreenPage(){
        await this.clickonbacklogscreen.click()
    }
    async clickonbtnPrority(){
        await this.btnPrority.click();
    }
    async clickonProrityDropDown(){
        await this.lblproritydropdown.click();
    }
    async clickOnProrityLevel(){
        await this.lblproritycontainsfieldLevel.click();
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