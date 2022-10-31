import { expect, Locator, Page } from '@playwright/test';

export class AddingCsvFileToBacklog{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnNewProcess: Locator;
    readonly ValidatingNewProcessPage:Locator;
    readonly clickOnCreateProcess:Locator;
    readonly ValidatingProcessPage:Locator;
    readonly ProcessName:Locator;
    readonly lbldescription:Locator;
    readonly bthNext:Locator;
    readonly validatingNewProcessAttPage:Locator;
    readonly AddBrowserFile:Locator;
    readonly uploadingcsvfile:Locator;
    readonly BtnNext:Locator;
    readonly btnFinish:Locator;
    readonly  bthBacklogScreen:Locator;
    readonly ValidatingBacklogPage:Locator;
    readonly ProfileIcon:Locator;
    readonly logout:Locator;



    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnNewProcess=page.locator('button:has-text("New Process")');
        this.ValidatingNewProcessPage=page.locator('text=Create New Process');
        this.clickOnCreateProcess=page.locator('text=Create Process from Scratch Start a brand new process');
        this.ValidatingProcessPage=page.locator('#pr_id_14-label');
        this.ProcessName=page.locator('text=Process Name Description >> input[type="text"]');
        this.lbldescription=page.locator('textarea');
        this.bthNext=page.locator('button:has-text("Next")');
        this.validatingNewProcessAttPage=page.locator('text=Import Activities from File');
        this.AddBrowserFile=page.locator('text=Browse File');
        this.BtnNext=page.locator('button:has-text("Next")');
        this.btnFinish=page.locator('button:has-text("Finish")');
        this.bthBacklogScreen=page.locator('div#sideMenuDiv>div:first-of-type');
        this.ValidatingBacklogPage=page.locator('div.dashboard__header');
        this.ProfileIcon=page.locator('div.avatarProfile');
        this.logout=page.locator('i.pi.pi-sign-out');
    }



    async CreatingNewBacklogPagesWithCsvFile(){
        await this.clickonNewProcess();
        await this.validatingNewprocessPage();
        await this.clickOnCreateProcessFromScratch();
        await this.ValidatingProcessScreenPage();
        await this.EnterDataOnProcessName();
        await this.EnterdataOnDescription()
        await this.ClickOnNextButton();
        await this.validatingOnNewProcessAttPage();
        await this.uploadCSVFile();
        await this.ClickOnNext();
        await this.clickOnFinishButton();
        await this.clickOnBacklogIcon();
        await this.ValidatingTheBacklogPage();
        await this.clickOnProfileicon();
        await this.clickOnLogOut();

    }


    async clickonNewProcess(){
        await this.btnNewProcess.click();
    }
    async validatingNewprocessPage(){
        await expect(this.page.locator('text=Create New Process')).toBeVisible();
    }
    async clickOnCreateProcessFromScratch(){
        await this.clickOnCreateProcess.click();
    }

    async ValidatingProcessScreenPage(){
        await expect(this.page.locator('(//span[text()="New Process"])[2]')).toBeVisible();
    }
    
    async EnterDataOnProcessName(){
    await this.ProcessName.fill('QaRole123')
    }
    async EnterdataOnDescription(){
    await this.lbldescription.fill('Data1');
   }
   async ClickOnNextButton(){
    await this.bthNext.click();
   }
   async validatingOnNewProcessAttPage(){
    await expect(this.page.locator('text=Import Activities from File')).toBeVisible();
  }
//   async ClickOnBrowserFile(){
//     await this.AddBrowserFile.click();
//     await this.mdlnewprocess.waitFor();
//   }
  async uploadCSVFile(){
    const [fileChooser] = await Promise.all([
    // It is important to call waitForEvent before click to set up waiting.
    this.page.waitForEvent('filechooser'),
    this.AddBrowserFile.click()
      ]);
    await fileChooser.setFiles('C:\\Users\\RAINBOW\\OneDrive - Digital TaaS\\Desktop\\Hr- IST 2.csv');
    }

    async clickOnFinishButton(){
    await this.btnFinish.click();
    }
    async ClickOnNext(){
    await this.BtnNext.click();
    }
    async clickOnBacklogIcon(){
        await this.bthBacklogScreen.click();
    }
    async ValidatingTheBacklogPage(){
        await expect(this.page.locator('div.dashboard__header')).toBeVisible();

    }

    async clickOnLogOut(){
        await this.logout.click();
    }
    async clickOnProfileicon(){
        await this.ProfileIcon.click();
    }

}