import { expect, Locator, Page } from '@playwright/test';

export class BackLogpage{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnNewProcess: Locator;
    readonly createNewProcess:Locator;
    readonly validatingNewProcessPage:Locator;
    readonly lblNewProcessPage:Locator;
    readonly lbldescription:Locator;
    readonly bthNext:Locator;
    readonly validatingNewProcessAttPage:Locator;
    readonly bthSkip:Locator;
    readonly ValidatingSkipPage:Locator;
    readonly btnFinish:Locator;
    readonly bthBacklogScreen:Locator;
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
    readonly bthProfile:Locator;
    readonly btnlogin:Locator;
    readonly validatingLogOutScreen:Locator;
    
    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnNewProcess=page.locator('button:has-text("New Process")');
        this.validatingNewProcessPage=page.locator('text=Create New Process');
        this.createNewProcess=page.locator('text=Create Process from Scratch Start a brand new process');
        //this.validatingNewProcessPage=page.locator('text=Create New Process');
        this.createNewProcess=page.locator('text=Create Process from Scratch Start a brand new process');
        this.lblNewProcessPage=page.locator('text=Process Name Description >> input[type="text"]');
        this.lbldescription=page.locator('textarea');
        this.bthNext=page.locator('button:has-text("Next")');
        this.validatingNewProcessAttPage=page.locator('text=Import Activities from File');
        this.bthSkip=page.locator('button:has-text("Skip")');
        this.ValidatingSkipPage=page.locator('text=Invite Team Members');
        this.btnFinish=page.locator('button:has-text("Finish")');
        this.bthBacklogScreen=page.locator('.pi >> nth=0');
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
        this.bthProfile=page.locator('text=CB');
        this.btnlogin=page.locator('text=Log Out');
        this.validatingLogOutScreen=page.locator('text=Log in to your account');
    
    }
        async CreatingNewBacklogPages(){
            await this.clickonNewProcess();
            await this.clickOnCreateNewProcess();
            await this.ValidatingNewProcessPge();
            await this.CreateNewProcess();
            await this.EnterdataOnDescription()
            await this.ClickOnNextButton();
            await this.validatingOnNewProcessAttPage();
            await this.clickOnSkipButton();
            await this.checkingOnValidatingSkipPage();
            await this.clickOnFinishButton();
            await this.clickOnBacklogButton();
            await this.clickOnCreateActivityButton();
            await this.EnterDataOnSummary();
            await this.EnterDataOnDescription();
            await this.clickonStatusDropDown();
            await this.ClickOnAssignedToDropDown();
            await this.SelectAssignedToMember();
            await this.ClickOnPriorityDropDown();
            await this.SelectPriorityLevel();
            await this.clickOnAddButton();
            await this.clickOnProfileIcon();
            await this.clickonLoginButton();
            await this.LookingLogOutScreen();
             }

        async clickonNewProcess(){
            await this.btnNewProcess.click();
        }
        async clickOnCreateNewProcess(){
            await this.createNewProcess.click();
        }
        async ValidatingNewProcessPge(){
            await expect(this.page.locator('text=Create New Process')).toBeVisible();
                }
         async CreateNewProcess(){
            await this.lblNewProcessPage.fill('Test1234');
         }
         async EnterdataOnDescription(){
            await this.lbldescription.fill('Data');
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
        async clickOnBacklogButton(){
            await this.bthBacklogScreen.click();
        }
        async ValidatingOnCreatePage(){
            await expect(this.page.locator('div[contains(text(),"Backlog")]')).toBeVisible();
        }
        async clickOnCreateActivityButton(){
            await this.bthCreateActivity.click();
        }
        async EnterDataOnSummary(){
            await this.lblSummary.fill('Book');
        }
        async EnterDataOnDescription(){
            await this.lblDataOnDescription.fill('NoteBook');
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
        }
        async SelectPriorityLevel(){
            await this.lblPriorityLevel.click();
        }
        async clickOnAddButton(){
            await this.bthAdd.click();
        }
        async clickOnProfileIcon(){
            await this.bthProfile.click();
        }
        async clickonLoginButton(){
            await this.btnlogin.click();
        }
        async LookingLogOutScreen(){
            await expect(this.page.locator('Log in to your account')).toBeVisible();
        }

    }