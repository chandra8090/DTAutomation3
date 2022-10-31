import { expect, Locator, Page } from '@playwright/test';

export class ChangeProfileImage{
    readonly page: Page;
    readonly Group:Locator;
    readonly profileIcon:Locator;
    readonly profile:Locator;
    readonly changeimage:Locator;
    readonly btnsave:Locator;
    readonly btnBack:Locator;
    readonly ProfileIcon:Locator;
    readonly logout:Locator;


    constructor(page: Page){
        this.page=page;
        this.Group=page.locator('text=Role-1 >> nth=1');
        this.profileIcon=page.locator('.team-box-circle > .ng-star-inserted >> nth=0');
        this.profile=page.locator('text=Profile');
        this.changeimage=page.locator('text=Backchandra Babuchandrababu@digitaltaas.comSign Out >> img');
        this.btnsave=page.locator('button:has-text("Save")');
        this.btnBack=page.locator('button:has-text("Back")');
        this.ProfileIcon=page.locator('.team-box-circle > .ng-star-inserted >> nth=0');
        this.logout=page.locator('i.pi.pi-sign-out');
    }

    async profileImage(){
        await this.clickOnGroupActivity();
        await this.clickOnProfile();
        await this.clickOnProfilebtn();
        await this.AddedImages();
        await this.clickOnSavedButton();
        await this.clickonBack();
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
     async AddedImages(){
      
        const [fileChooser1] = await Promise.all([
           // It is important to call waitForEvent before click to set up waiting.
           this.page.waitForEvent('filechooser'),
           this.changeimage.click()
             ]);
           await fileChooser1.setFiles('C:\\Users\\RAINBOW\\OneDrive - Digital TaaS\\Desktop\\123.jpg');

            }

            async clickOnSavedButton(){
                await this.btnsave.click();
            }
}

