import { expect, Locator, Page } from '@playwright/test';

export class BacklogDragAndDRopClass{
    readonly page: Page;
    readonly Group:Locator;
    readonly btnBacklog:Locator;
    readonly Activity1:Locator;
    readonly Activity2:Locator;
    readonly ValidatingBacklogScreen:Locator;
    readonly ProfileIcon:Locator;
    readonly logout:Locator;

    constructor(page: Page){
        this.page=page;
        this.Group=page.locator('text=cf >> nth=1');
        this.btnBacklog=page.locator('div#sideMenuDiv>div:first-of-type');
        this.Activity1=page.locator('#treeDiv div[role="treeitem"]').nth(1);
        this.Activity2=page.locator('#treeDiv div[role="treeitem"]').nth(2);
        this.ValidatingBacklogScreen=page.locator('div.dashboard__header');
        this.ProfileIcon=page.locator('div.avatarProfile');
        this.logout=page.locator('i.pi.pi-sign-out');
       
    }
    async CreatingDragAndDropInBacklog(){
        await this.clickOnGroupActivity();
        await this.clickOnBacklog();
       // await this.clickOnActivity();
        await this.DragAndDrop();
        await this.ValidatingScreen();
        await this.clickOnProfileicon();
        await this.clickOnLogOut();
        
     }
     async clickOnGroupActivity(){
        await this.Group.click();
     }
     async ValidatingScreen(){
        await expect(this.page.locator('div.dashboard__header')).toBeVisible();
     }
     async clickOnBacklog(){
        await this.btnBacklog.click();
     }
     async DragAndDrop(){
           if(await this.Activity1.elementHandle() && await this.Activity2.elementHandle()){
            await this.Activity1.dragTo(this.Activity2,{force: true, noWaitAfter: false});
        
            }
     }
     async clickOnLogOut(){
        await this.logout.click();
    }
    async clickOnProfileicon(){
        await this.ProfileIcon.click();
    }

}