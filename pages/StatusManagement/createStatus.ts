import { expect, Locator, Page } from '@playwright/test';

export class AddingNewFieldInStatusManagement{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnprocessorHeader: Locator;
    readonly configurationicon:Locator;
    readonly StatusIcon:Locator;
    readonly createStatus:Locator;
    readonly createBox:Locator;
    readonly ValidationCreateStatus:Locator;
    readonly btnProfile:Locator;
    readonly bthLogout:Locator;

    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnprocessorHeader=page.locator('text=chandra123 >> nth=1');
        this.configurationicon=page.locator('div:nth-child(6) > div > div > .pi');
        this.StatusIcon=page.locator('text=Status Management');
        this.createStatus=page.locator('button:has-text("Create Status")');
        this.createBox=page.locator('input[type="text"]');
        this.ValidationCreateStatus=page.locator('text=Status Management >> nth=1');
        this.btnProfile=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');
        
    }

    async CreateingNewField(){
        await this.clickonHeader();
        await this.clickOnConfiguration();
        await this.selcetStatusIcon();
        await this.clickOncreateStatus();
        await this.EnterNewCreateStatus();
        await this.ValidationOfCreateStatus();
        await this.clickonProfileButton();
        await this.clickonLogoutButton();

    }

    async clickonHeader(){
        await this.btnprocessorHeader.click();
    }
    async clickOnConfiguration(){
        await this.configurationicon.click();
    }
    async selcetStatusIcon(){
        await this.StatusIcon.click();
    }
    async clickOncreateStatus(){
        await this.createStatus.click();
    }
    async EnterNewCreateStatus(){
        await this.createBox.fill('UAT-1')
    }
    async ValidationOfCreateStatus(){
        await this.ValidationCreateStatus.isVisible();
    }
    async clickonProfileButton(){
        await this.btnProfile.click();
    }
    async clickonLogoutButton(){
        await this.bthLogout.click();
    }

}