import { expect, Locator, Page } from '@playwright/test';

export class functionalityOfSearchInkanban{
    readonly page: Page;    
    readonly Search:Locator;
    readonly ValidationKanbanPage:Locator;
    readonly ProfileIcon:Locator;
    readonly logout:Locator;
    
    constructor(page: Page){
        this.Search=page.locator('[placeholder="Search"]');
        this.ValidationKanbanPage=page.locator('div.dashboard__header');
        this.ProfileIcon=page.locator('div.avatarProfile');
        this.logout=page.locator('i.pi.pi-sign-out');
        this.ValidationKanbanPage=page.locator('div.dashboard__header');
        this.ProfileIcon=page.locator('div.avatarProfile');
        this.logout=page.locator('i.pi.pi-sign-out');
      
    }

    async FunctionalityOfSearchInNewKanbanPages(){
        await this.EnterTextOnSearchBox();
        await this.ValidationofKanbanPge();
        await this.clickOnProfileicon();
        await this.clickOnLogOut();
        
   
    }

    async EnterTextOnSearchBox(){
       await this.Search.fill('Backlog');
    }
    
    async clickOnLogOut(){
        await this.logout.click();
    }
    async clickOnProfileicon(){
        await this.ProfileIcon.click();
    }
    async ValidationofKanbanPge(){
        await expect(this.page.locator('div.dashboard__header')).toBeVisible();
    }

}