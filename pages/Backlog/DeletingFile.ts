import { expect, Locator, Page } from '@playwright/test';

export class DeletingFileInaActivityInBacklogPage{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnprocessorHeader: Locator;
    readonly bthBacklog:Locator;
    readonly clickOnActivity:Locator;
    readonly clickOnAddFile:Locator;
    readonly DeletingFile:Locator;
    readonly AddedFileToActivity:Locator;
    readonly btnUpdate:Locator;
    readonly btnProfile:Locator;
    readonly bthLogout:Locator;

    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnprocessorHeader=page.locator('.details-header >> nth=0');
        this.bthBacklog=page.locator('div#sideMenuDiv>div:first-of-type');
        this.clickOnActivity=page.locator('#treeDiv div[role="treeitem"] >> nth=0');
       //this.clickOnAddFile=page.locator('text=Add Files');
        this.DeletingFile=page.locator('text=Add Files Hr- IST 2.csv >> em')
        this.btnUpdate=page.locator('button:has-text("Update")');
        this.btnProfile=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');
        
    }

    async DeletingfileInaActivity(){
        await this.clickonHeader();
        await this.clickonBacklogFeature();
        await this.ClickOnAnyActivity();
        //await this.ClickOnAddFileInActivity();
        await this.clickOnDeletingButton();
        await this.clickOnUpdate();
        await this.clickonProfileButton();
        await this.clickonLogoutButton();
    }

     async clickOnDeletingButton(){
         await this.DeletingFile.click();
         await this.page.locator('button:has-text("Yes")').click();

        }
    async clickOnUpdate(){
        await this.btnUpdate.click();
    }
    // async ClickOnAddFileInActivity(){
    //     await this.clickOnAddFile.click();
    //     await this.page.locator('span:has-text("Add Files")').first().setInputFiles('Hr- IST 2.csv');

    // }
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