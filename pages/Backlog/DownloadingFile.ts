import { expect, Locator, Page } from '@playwright/test';

export class DownloadingFileInaActivityInBacklogPage{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnprocessorHeader: Locator;
    readonly bthBacklog:Locator;
    readonly clickOnActivity:Locator;
    readonly clickOnAddFile:Locator;
    readonly Downloading:Locator;
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
       // this.clickOnAddFile=page.locator('text=Add Files');
        //this.Downloading=page.locator('text=Add Files Hr- IST 2.csv >> i')
        this.btnUpdate=page.locator('button:has-text("Update")');
        this.btnProfile=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');
        
    }

    async VerifyDownloadingAnActivity(){
        await this.clickonHeader();
        await this.clickonBacklogFeature();
        await this.ClickOnAnyActivity();
        //await this.ClickOnAddFileInActivity();
        await this.clickOnDownLoadingButton();
        await this.clickOnUpdate();
        await this.clickonProfileButton();
        await this.clickonLogoutButton();
    }

        async clickOnDownLoadingButton(){
            const [page1] = await Promise.all([
               this.page.waitForEvent('popup'),
                this.page.waitForEvent('download'),
               this.page.locator('text=Add Files Hr- IST 2.csv >> i').click()
              ]);

        }
    async clickOnUpdate(){
        await this.btnUpdate.click();
    }
    // async ClickOnAddFileInActivity(){
    //     const [fileChooser] = await Promise.all([
    //         // It is important to call waitForEvent before click to set up waiting.
    //         this.page.waitForEvent('filechooser'),
    //         this.clickOnAddFile.click()
    //           ]);
    //         await fileChooser.setFiles('C:\\Users\\RAINBOW\\OneDrive - Digital TaaS\\Documents\\Hr- IST 2.csv');

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