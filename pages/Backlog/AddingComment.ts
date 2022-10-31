import { expect, Locator, Page } from '@playwright/test';

export class AddingCommentToaActivityInBacklogPage{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnprocessorHeader: Locator;
    readonly bthBacklog:Locator;
    readonly clickonScreen:Locator;
    readonly clickOnActivity:Locator;
    readonly addedComment:Locator;
    readonly SaveComment:Locator;
    readonly closeActivity:Locator;
    readonly btnProfile:Locator;
    readonly bthLogout:Locator;

    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnprocessorHeader=page.locator('text=chandra123 >> nth=1');
        this.bthBacklog=page.locator('div#sideMenuDiv>div:first-of-type');
        this.clickonScreen=page.locator('text=Manual GroupSmart GroupAdd');
        this.clickOnActivity=page.locator('#treeDiv div[role="treeitem"] >> nth=0');
        this.addedComment=page.locator('div.ql-editor.ql-blank');
        this.SaveComment=page.locator('(//app-maestro-button[@maestrobuttonclass="border-0 bg-transparent"])[1]');
        this.closeActivity=page.locator('button:has-text("Update")');
        this.btnProfile=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');
   
    }

    async VerifyAddCommentOnActivity(){
        await this.clickonHeader();
        await this.clickonBacklogFeature();
        await this.Buttonclick();
        await this.ClickOnAnyActivity();
        await this.CommentOntheActivity();
        await this.SaveCommentInActivity();
        await this.clickOnXSymbol();
        await this.clickonProfileButton();
        await this.clickonLogoutButton();
    }
    async Buttonclick(){
        await this.clickonScreen.click();
    }

    async clickonProfileButton(){
        await this.btnProfile.click();
    }
    async clickonLogoutButton(){
        await this.bthLogout.click();
    }
    async clickOnXSymbol(){
        await this.closeActivity.click();
    }
    async SaveCommentInActivity(){
        await this.SaveComment.click();
    }
    async CommentOntheActivity(){
        await this.addedComment.fill('Working Fine');
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


}
