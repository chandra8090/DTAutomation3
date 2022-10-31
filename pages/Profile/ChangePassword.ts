import { expect, Locator, Page } from '@playwright/test';

export class ChangeProfileImage{
    readonly page: Page;
    readonly Group:Locator;
    readonly profileIcon:Locator;
    readonly profile:Locator;
    readonly changeimage:Locator;
    readonly ProfileIcon:Locator;
    readonly logout:Locator;
    btnBack: any;


    constructor(page: Page){
        this.page=page;
        this.Group=page.locator('text=Role-1 >> nth=1');
        this.profileIcon=page.locator('.team-box-circle > .ng-star-inserted >> nth=0');
        this.profile=page.locator('text=Profile');
        this.changeimage=page.locator('text=Backchandra Babuchandrababu@digitaltaas.comSign Out >> img');
        this.ProfileIcon=page.locator('div.avatarProfile');
        this.logout=page.locator('i.pi.pi-sign-out');
    }

    async profileImage(){
        await this.clickOnGroupActivity();
        await this.clickOnProfile();
        await this.clickOnProfilebtn();
        await this.clickOnProfileicon();
        await this.clickOnLogOut();
    }

    async clickOnGroupActivity(){
        await this.Group.isVisible;
     }
     async clickOnProfile(){
        await this.profileIcon.click();
     }
     async clickOnProfilebtn(){
        await this.profile.click();
     }
     async clickonBack(){
        await this.btnBack.click();
     }

     async clickOnLogOut(){
        await this.logout.click();
    }
    async clickOnProfileicon(){
        await this.ProfileIcon.click();
    }
     
}

