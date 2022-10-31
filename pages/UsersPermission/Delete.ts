import { expect, Locator, Page } from '@playwright/test';

export class DeleteingNewRoleInUserAndPermission{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnprocessorHeader: Locator;
    readonly configurationicon:Locator;
    readonly UserAndPermission:Locator;
    readonly NewRoleGroup:Locator;
    readonly RoleName:Locator;
    readonly des:Locator;
    readonly create:Locator;
    readonly threeDots:Locator;
    readonly selectDelete:Locator;
    readonly validation:Locator;
    readonly btnProfile:Locator;
    readonly bthLogout:Locator;

    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnprocessorHeader=page.locator('text=chandra123 >> nth=1');
        this.configurationicon=page.locator('div:nth-child(6) > div > div > .pi');
        this.UserAndPermission=page.locator('span:has-text("Users & Permissions")');
        this.NewRoleGroup=page.locator('button:has-text("New Role")');
        this.RoleName=page.locator('text=Role NameDescription >> input[type="text"]');
        this.des=page.locator('textarea');
        this.create=page.locator('button:has-text("Create")');
        this.threeDots=page.locator('text=qa hello >> i');
        this.selectDelete=page.locator('text=Delete');
        this.validation=page.locator('text=Users & Permissions >> nth=1');
        this.btnProfile=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');
    
    
    }


    async DeleteingNewRoleInUser(){
        await this.clickonHeader();
        await this.clickOnConfiguration();
        await this.selcetUserAndPermission();
        await this.clickOnNewRole();
        await this.clickOnRoleName();
        await this.EnterDescription();
        await this.clickOnCreatebtn();
        await this.clickOnThreeDot();
        await this.selectingDelete();
        await this.validatingPage();
        await this.clickonProfileButton();
        await this.clickonLogoutButton();
        
    }

    async clickonHeader(){
        await this.btnprocessorHeader.click();
    }
    async clickOnConfiguration(){
        await this.configurationicon.click();
    }
    async selcetUserAndPermission(){
        await this.UserAndPermission.click();
    }
    async clickOnNewRole(){
        await this.NewRoleGroup.click();
    }
    async clickOnRoleName(){
        await this.RoleName.fill('QA-1');
    }
    async EnterDescription(){
        await this.des.fill('Testing');
    }
    async clickOnCreatebtn(){
        await this.create.click();
    }
    async clickOnThreeDot(){
        await this.threeDots.click();
    }
    async validatingPage(){
        await this.validation.isVisible();
    }
    async clickonProfileButton(){
        await this.btnProfile.click();
    }
    async clickonLogoutButton(){
        await this.bthLogout.click();
    }
    async selectingDelete(){
        await this.selectDelete.click();
    }


}