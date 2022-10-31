import { expect, Locator, Page } from '@playwright/test';

export class ChangeStatusInkanbanClass{
    readonly page: Page;
    readonly clickOnActivity:Locator;
    readonly statusDropDown:Locator;
    readonly statusSelect:Locator;
    readonly btnUpdate:Locator;
    readonly ValidationKanbanPage:Locator;
    readonly ProfileIcon:Locator;
    readonly logout:Locator;

    constructor(page: Page){
        this.page=page;
        this.clickOnActivity=page.locator('.issue-container-div > div > div:nth-child(4)');
        this.statusDropDown=page.locator('text=Status Open >> div[role="button"]');
        this.statusSelect=page.locator('[aria-label="QA"] >> text=QA');
        this.btnUpdate=page.locator('button:has-text("Update")');
        this.ValidationKanbanPage=page.locator('div.dashboard__header');
        this.ProfileIcon=page.locator('div.avatarProfile');
        this.logout=page.locator('i.pi.pi-sign-out');
           
    }

    async ChangeingStatusInKanbanPages(){
        await this.ClickOnActivityInKanban();
        await this.ClickOnStatusDropDown();
        await this.selectStatusQA();
        await this.clickOnUpdateButton();
        await this.ValidationofKanbanPge();
        await this.clickOnProfileicon();
        await this.clickOnLogOut();
    
    }
    async ClickOnActivityInKanban(){
       await this.clickOnActivity.click();
    }
    async ClickOnStatusDropDown(){
        await this.statusDropDown.click();
    }
    async selectStatusQA(){
       await  this.statusSelect.click();
    }
    async clickOnUpdateButton(){
        await this.btnUpdate.click();
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