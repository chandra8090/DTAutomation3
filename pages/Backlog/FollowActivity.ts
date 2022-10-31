import { expect, Locator, Page } from '@playwright/test';

export class FollowActivityInBacklogPage{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnprocessorHeader: Locator;
    readonly bthBacklog:Locator;
    readonly clickOnActivity:Locator;
    readonly clickOnFollowActivity:Locator;
    readonly ClickOnXsymbol:Locator;
    readonly btnProfile:Locator;
    readonly bthLogout:Locator;

    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnprocessorHeader=page.locator('text=chandra123 >> nth=1');
        this.bthBacklog=page.locator('div#sideMenuDiv>div:first-of-type');
        this.clickOnActivity=page.locator('#treeDiv div[role="treeitem"] >> nth=0');
        this.clickOnFollowActivity=page.locator('em.icons.pi.pi-share-alt');
        this.ClickOnXsymbol=page.locator('button:has-text("Update")');
        this.btnProfile=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');
    }
    
    async VerifyFollowActivity(){
        await this.clickonHeader();
        await this.clickonBacklogFeature();
        await this.ClickOnAnyActivity();
        await this.ClickOnFollowActivity();
        await this.PressOnXSymbol();
        await this.clickonProfileButton();
        await this.clickonLogoutButton();
    }

    async PressOnXSymbol(){
        await this.ClickOnXsymbol.click();
    }
    async ClickOnFollowActivity(){
     await this.clickOnFollowActivity.click();
    }
    async ClickOnAnyActivity(){
        await this.clickOnActivity.click();
     }
     async clickonHeader(){
        await this.btnprocessorHeader.click();
    }
    async clickonBacklogFeature(){
        await this.bthBacklog.click();
     }
     async clickonProfileButton(){
        await this.btnProfile.click();
    }
    async clickonLogoutButton(){
        await this.bthLogout.click();
    }
    



}