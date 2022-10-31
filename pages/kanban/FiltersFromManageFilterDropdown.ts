import { expect, Locator, Page } from '@playwright/test';

export class kanbanFilterClass{
    readonly page: Page;
    readonly ManageFilter:Locator;
    readonly team:Locator;
    readonly kanban:Locator;
    readonly btnteam:Locator;
    readonly teamISDropDown:Locator;
    readonly IsSelect:Locator;
    readonly selectTeam1:Locator;
    readonly selectQaTeam:Locator;
    readonly space:Locator;
    readonly btnApply:Locator;
    readonly ValidationKanbanPage:Locator;
    readonly ProfileIcon:Locator;
    readonly logout:Locator;



    constructor(page: Page){
        this.page=page;
        this.ManageFilter=page.locator('button:has-text("Manage Filters")');
        this.team=page.locator('.ng-star-inserted > div:nth-child(5) > .ng-untouched > .p-checkbox > .p-checkbox-box');
        this.kanban=page.locator('text=Kanban >> nth=1');
        this.btnteam=page.locator('#topDiv >> text=Team');
        this.teamISDropDown=page.locator('div[role="button"]');
        this.IsSelect=page.locator('[aria-label="Is"] >> text=Is');
        this.selectTeam1=page.locator('text=Is Select Team >> span >> nth=3');
        this.selectQaTeam=page.locator('[aria-label="Qa"] div >> nth=1');
        this.space=page.locator('.p-input-icon-right > div:nth-child(3) > div');
        this.btnApply=page.locator('button:has-text("Apply")');
        this.ValidationKanbanPage=page.locator('div.dashboard__header');
        this.ProfileIcon=page.locator('div.avatarProfile');
        this.logout=page.locator('i.pi.pi-sign-out');
        
    
    
    }
    async SelectFilterInKanbanPages(){
        await this.clickOnManageFilter();
        await this.selectTeam();
        await this.clickOnKanban();
        await this.clickOnTeamButton();
        await this.clickOnTeamIsDropDown();
        await this.selectIsInTeam();
        await this.clickOnSpace();
        await this.clickOnbtnApply();
        await this.ValidationofKanbanPge();
        await this.clickOnProfileicon();
        await this.clickOnLogOut();
    
    
    }
    async clickOnManageFilter(){
        await this.ManageFilter.click();
    }
    async selectTeam(){
        await this.team.click();
    }
    async clickOnKanban(){
        await this.kanban.click();
    }
    async clickOnTeamButton(){
        await this.btnteam.click();
    }
    async clickOnTeamIsDropDown(){
        await this.teamISDropDown.click();
    }
    async selectIsInTeam(){
        await this.IsSelect.click();
    }
    async clickOnQaTeam(){
        await this.selectQaTeam.click();
    }
    async clickOnSpace(){
        await this.space.click();
    }
    async clickOnbtnApply(){
        await this.btnApply.click();
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