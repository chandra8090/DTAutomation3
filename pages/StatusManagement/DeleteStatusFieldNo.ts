import { expect, Locator, Page } from '@playwright/test';

export class DeleteingCreatedFieldInStatusManagementNo{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnprocessorHeader: Locator;
    readonly configurationicon:Locator;
    readonly StatusIcon:Locator;
    readonly createStatus:Locator;
    readonly createBox:Locator;
    readonly ValidationCreateStatus:Locator;
    readonly deleteSymbol:Locator;
    readonly btnNo:Locator;
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
        this.deleteSymbol=page.locator('text=Open Closed Qa UAT UAT-1 done >> button');
        this.btnNo=page.locator('button:has-text("No")');
        this.btnProfile=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');
        
    }

    async DeleteingNewFieldNo(){
        await this.clickonHeader();
        await this.clickOnConfiguration();
        await this.selcetStatusIcon();
        await this.clickOncreateStatus();
        await this.EnterNewCreateStatus();
        await this.ValidationOfCreateStatus();
        await this.ClickOnMinusSymbol();
        await this.clickOnNoButton();
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
    async ClickOnMinusSymbol(){
        await this.deleteSymbol.click();
    }
    async clickOnNoButton(){
        await this.btnNo.click();
    }
    async clickonProfileButton(){
        await this.btnProfile.click();
    }
    async clickonLogoutButton(){
        await this.bthLogout.click();
    }

}