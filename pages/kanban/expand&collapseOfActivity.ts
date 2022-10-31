import { expect, Locator, Page } from '@playwright/test';

export class ExpandOfActivityInKanbanClass{

readonly ArrowIcon:Locator;
readonly ArrowIconRightside:Locator;
readonly ProfileIcon:Locator;
readonly logout:Locator;

    constructor(page: Page){
        this.ArrowIcon=page.locator('.pi.pi-chevron-left >> nth=0');
        this.ArrowIconRightside=page.locator('.pi.pi-chevron-right');
        this.ProfileIcon=page.locator('div.avatarProfile');
        this.logout=page.locator('i.pi.pi-sign-out');
    
    
    }

    async ExpandCollapseOfActivityInKanban(){
        await this.clickOnArrowIcon();
        await this.clickOnArrowRightside();
        await this.clickOnProfileicon();
        await this.clickOnLogOut();
    
    
    }
    async clickOnArrowIcon(){
        this.ArrowIcon.click();
    }
    async clickOnArrowRightside(){
        this.ArrowIconRightside.click();
    }
    async clickOnLogOut(){
        await this.logout.click();
    }
    async clickOnProfileicon(){
        await this.ProfileIcon.click();
    }
}