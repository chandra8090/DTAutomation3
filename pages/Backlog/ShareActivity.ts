import { expect, Locator, Page } from '@playwright/test';

export class ShareActivityInBacklogPage{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnprocessorHeader: Locator;
    readonly bthBacklog:Locator;
    readonly clickOnActivity:Locator;
    readonly Shareicon:Locator;
    readonly selectuser:Locator;
    readonly btnShare:Locator;
    readonly ClickOnXsymbol:Locator;
    readonly btnProfile:Locator;
    readonly bthLogout:Locator;

    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnprocessorHeader=page.locator('text=chandra123 >> nth=1');
        this.bthBacklog=page.locator('div#sideMenuDiv>div:first-of-type');
        this.clickOnActivity=page.locator('#treeDiv div[role="treeitem"] >> nth=0');
        this.Shareicon=page.locator('.pi.pi-share-alt');
        this.selectuser=page.locator('text=chandra Babu(Owner) >> div >> nth=2');
        this.btnShare=page.locator('button:has-text("Share")');
        this.ClickOnXsymbol=page.locator('button:has-text("Update")');
        this.btnProfile=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');
    }

    async VerifyShareActivity(){
        await this.clickonHeader();
        await this.clickonBacklogFeature();
        await this.ClickOnAnyActivity();
        await this.ClickOnShare();
        await this.PressOnXSymbol();
        await this.clickonProfileButton();
        await this.clickonLogoutButton();
    }

    async PressOnXSymbol(){
        await this.ClickOnXsymbol.click();
    }
    async ClickOnShareButton(){
        await this.btnShare.click();
}
    async ClickOnShare(){
        await this.Shareicon.click();
    }
    async clickonHeader(){
        await this.btnprocessorHeader.click();
    }
    async clickonBacklogFeature(){
        await this.bthBacklog.click();
     }

    async ClickOnAnyActivity(){
        await this.clickOnActivity.click();
     }
     async clickonProfileButton(){
        await this.btnProfile.click();
    }
    async clickonLogoutButton(){
        await this.bthLogout.click();
    }




}