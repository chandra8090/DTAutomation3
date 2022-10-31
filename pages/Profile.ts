import { expect, Locator, Page } from '@playwright/test';

export class ProfileLogOut{
    readonly ProfileIcon:Locator;
    readonly logout:Locator;
constructor(page: Page){
    this.ProfileIcon=page.locator('div.avatarProfile');
    this.logout=page.locator('i.pi.pi-sign-out');
}
async ProfilePages(){
    await this.clickOnProfileicon();
    await this.clickOnLogOut();
   }
async clickOnLogOut(){
    await this.logout.click();
}
async clickOnProfileicon(){
    await this.ProfileIcon.click();
}


}