import { expect, Locator, Page } from '@playwright/test';

export class NewBackLogpage{
    CreatingQAGroupInTeams() {
        throw new Error("Method not implemented.");
    }
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
    readonly bthSkip:Locator;
    readonly ValidatingSkipPage:Locator;
    readonly btnFinish:Locator;
    readonly ValidatingProceeOrc:Locator;
    readonly clickOnActivity:Locator;
    readonly  bthBacklogScreen:Locator;
    readonly ValidatingOnBacklogCreateActivityPage:Locator;
    readonly bthCreateActivity:Locator;
    readonly lblSummary:Locator;
    readonly lblDataOnDescription:Locator;
    readonly lblStatus:Locator;
    readonly lblStatusAction:Locator;
    readonly lblAssignedDropDown:Locator;
    readonly lblAssignedTo:Locator;
    readonly lblPriorityDropDown:Locator;
    readonly lblPriorityLevel:Locator;
    readonly bthAdd:Locator;
    readonly ValidatingNewActivityAdded:Locator;
    readonly bthProfile:Locator;
    readonly btnlogout:Locator;
   
   
    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnNewProcess=page.locator('button:has-text("New Process")');
        this.ValidatingNewProcessPage=page.locator('span:has-text("Create New Process")');
        this.clickOnCreateProcess=page.locator('text=Create Process from Scratch Start a brand new process');
        this.ValidatingProcessPage=page.locator('div:has-text("Process Details")');
        this.ProcessName=page.locator('text=Process Name Description >> input[type="text"]');
        this.lbldescription=page.locator('textarea');
        this.bthNext=page.locator('button:has-text("Next")');
        this.validatingNewProcessAttPage=page.locator('text=Import Activities from File');
        this.bthSkip=page.locator('button:has-text("Skip")');
        this.ValidatingSkipPage=page.locator('text=Invite Team Members');
        this.btnFinish=page.locator('button:has-text("Finish")');
        this.clickOnActivity=page.locator('//div[contains(text(),"QaRole1223") and @class="details-header"]');
        this.ValidatingProceeOrc=page.locator('div[text()="Process Orchestration"]');
        this.bthBacklogScreen=page.locator('div#sideMenuDiv>div:first-of-type');
        this.ValidatingOnBacklogCreateActivityPage=page.locator('text=Backlog >> nth=1');
        this.bthCreateActivity=page.locator('button:has-text("Create Activity")');
        this.lblSummary=page.locator('textarea');
        this.lblDataOnDescription=page.locator('.ql-editor');
        this.lblStatus=page.locator('text=Status Open >> div[role="button"]');
        this.lblStatusAction=page.locator('[aria-label="Open"] >> text=Open');
        this.lblAssignedDropDown=page.locator('text=Assigned To Select >> div[role="button"]');
        this.lblAssignedTo=page.locator('text=chandra Babu');
        this.lblPriorityDropDown=page.locator('text=Priority Medium >> div[role="button"]');
        this.lblPriorityLevel=page.locator('[aria-label="Medium"] >> text=Medium');
        this.bthAdd=page.locator('button:has-text("Add")');
        this.ValidatingNewActivityAdded=page.locator('div[class="dashboard__header"],[style="background-image"]');
        this.bthProfile=page.locator('div.avatarProfile');
        this.btnlogout=page.locator('//span[contains(text(),"Log Out")]');
        
       
      }


    async CreatingNewBacklogPages(){
        await this.clickonNewProcess();
        await this.validatingNewprocessPage();
        await this.clickOnCreateProcessFromScratch();
       // await this.ValidatingProcessScreenPage();
        await this.EnterDataOnProcessName();
        await this.EnterdataOnDescription()
        await this.ClickOnNextButton();
        //await this.validatingOnNewProcessAttPage();
        await this.clickOnSkipButton();
        await this.checkingOnValidatingSkipPage();
        await this.clickOnFinishButton();
        //await this.clickOnActivityHeader();
        //await this.ValidatingProcessorPage();
        await this.clickOnBacklogButton();
       // await this.ValidatingOnCreatePage();
        await this.clickOnCreateActivityButton();
        await this.EnterDataOnSummary();
        await this.EnterDataOnDescription();
        await this.clickonStatusDropDown();
        await this.SelectOnStatusAction();
        await this.ClickOnAssignedToDropDown();
        await this.SelectAssignedToMember();
        await this.ClickOnPriorityDropDown();
       // await this.SelectPriorityLevel();
        await this.clickOnAddButton();
        //await this.ValidatingNewProcessActivityScreen();
        await this.clickOnProfileIcon();
        await this.clickonLogOutButton();
        
      }
    
   async clickOnActivityHeader(){
    await this.clickOnActivity.click();
   }
    async clickonNewProcess(){
        await this.btnNewProcess.click();
    }
    async validatingNewprocessPage()
    { 
       await expect(this.page.locator('span:has-text("Create New Process")')).toBeVisible();

    }
    async clickOnCreateProcessFromScratch(){
        await this.clickOnCreateProcess.click();
    }
    async ValidatingProcessScreenPage(){
        await expect(this.page.locator('div:has-text(" Process Details ")')).toBeVisible();
    }
    
    async EnterDataOnProcessName(){
    await this.ProcessName.fill('QaRole1223')
    }
    async EnterdataOnDescription(){
    await this.lbldescription.fill('Data12');
   }
   async ClickOnNextButton(){
    await this.bthNext.click();
   }
  async validatingOnNewProcessAttPage(){
    await expect(this.page.locator('text=Import Activities from File')).toBeVisible();
  }
  async clickOnSkipButton(){
    await this.bthSkip.click();
  }
  async checkingOnValidatingSkipPage(){
    await expect(this.page.locator('text=Invite Team Members')).toBeVisible();
  }
  async clickOnFinishButton(){
    await this.btnFinish.click();
  }
  async ValidatingProcessorPage(){
    await expect(this.page.locator('div[text()="Process Orchestration"],sucessfully Validated')).toBeVisible();
  }
  async clickOnBacklogButton(){
    await this.bthBacklogScreen.click();
  }
 async ValidatingOnCreatePage(){
     await expect(this.page.locator('text=Backlog >> nth=1')).toBeVisible();
   }
 async clickOnCreateActivityButton(){
    await this.bthCreateActivity.click();
  }
 async EnterDataOnSummary(){
    await this.lblSummary.fill('Book');
  }
 async EnterDataOnDescription(){
    await this.lblDataOnDescription.fill('NoteBook',{noWaitAfter:false});
 }
 async clickonStatusDropDown(){
    await this.lblStatus.click();
 }
 async SelectOnStatusAction(){
    await this.lblStatusAction.click();
 }
 async ClickOnAssignedToDropDown(){
    await this.lblAssignedDropDown.click();
 }
async SelectAssignedToMember(){
    await this.lblAssignedTo.click();
 }
async ClickOnPriorityDropDown(){
    await this.lblPriorityDropDown.click();
    await this.lblPriorityLevel.click();
}

async clickOnAddButton(){
    await this.bthAdd.click();
}
async ValidatingNewProcessActivityScreen(){
    await expect(this.page.locator('div.dashboard__header')).toBeVisible();
}
async clickOnProfileIcon(){
    await this.bthProfile.click();
}
async clickonLogOutButton(){
    await this.btnlogout.click();
}


}

