import { expect, Locator, Page } from '@playwright/test';

export class AdduserInUserAndPermission{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnprocessorHeader: Locator;
    readonly configurationicon:Locator;
    readonly UserAndPermission:Locator;
    readonly AddedUser:Locator;
    readonly Email:Locator;
    readonly RolesDropDown:Locator;
    readonly Admin:Locator;
    readonly Add:Locator;
    readonly SendInvite:Locator;
    readonly btnProfile:Locator;
    readonly bthLogout:Locator;


    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnprocessorHeader=page.locator('text=chandra123 >> nth=1');
        this.configurationicon=page.locator('div:nth-child(6) > div > div > .pi');
        this.UserAndPermission=page.locator('span:has-text("Users & Permissions")');
        this.AddedUser=page.locator('button:has-text("Add User")');
        this.Email=page.locator('#email');
        this.RolesDropDown=page.locator('text=Role User >> div[role="button"]');
        this.Admin=page.locator('[aria-label="Admin"] >> text=Admin');
        this.Add=page.locator('div[role="dialog"] button:has-text("Add")');
        this.SendInvite=page.locator('button:has-text("Send Invite")');
        this.btnProfile=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');
    }


    async AddedingNewUser(){
        await this.clickonHeader();
        await this.clickOnConfiguration();
        await this.selcetUserAndPermission();
        await this.clickOnAddedUser();
        await this.EnterEmail();
        await this.clickOnRolesDropDown();
        await this.selectAdmin();
        await this.clickOnAdd();
        await this.btnSentInvite();
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
    async clickOnAddedUser(){
        await this.AddedUser.click();
    }
    async EnterEmail(){
        await this.Email.fill('chandraA@mailinator.com');
    }
    async clickOnRolesDropDown(){
        await this.RolesDropDown.click();
    }
    async selectAdmin(){
        await this.Admin.click();
    }
    async clickOnAdd(){
        await this.Add.click();
    }
    async btnSentInvite(){
        await this.SendInvite.click();
    }
    async clickonProfileButton(){
        await this.btnProfile.click();
    }
    async clickonLogoutButton(){
        await this.bthLogout.click();
    }


}