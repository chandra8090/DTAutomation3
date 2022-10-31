import { expect, Locator, Page } from '@playwright/test';

export class TeamsPage{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnNewProcess: Locator;
    readonly ValidatingNewProcessPage:Locator;
    readonly clickOnCreateProcess:Locator;
    readonly ValidatingProcessPage:Locator;
    readonly ProcessName:Locator;
    readonly lbldescription:Locator;
    readonly bthNext:Locator;
    readonly BtnNext:Locator;
    readonly btnSkip:Locator;
    readonly btnFinish:Locator;
    readonly btnConfiguration:Locator;
    readonly btnTeams:Locator;
    readonly btnAddTeams:Locator;
    readonly TeamName:Locator;
    readonly colour:Locator;
    readonly selectColour:Locator;
    readonly des:Locator;
    readonly AddMembers:Locator;
    readonly selectMember:Locator;
    readonly btnAddTeam:Locator;



    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnNewProcess=page.locator('button:has-text("New Process")');
        this.ValidatingNewProcessPage=page.locator('span:has-text("Create New Process")');
        this.clickOnCreateProcess=page.locator('text=Create Process from Scratch Start a brand new process');
        this.ProcessName=page.locator('text=Process Name Description >> input[type="text"]');
        this.lbldescription=page.locator('textarea');
        this.bthNext=page.locator('button:has-text("Next")');
        this.btnSkip=page.locator('button:has-text("Skip")');
        this.btnFinish=page.locator('button:has-text("Finish")');
        this.btnConfiguration=page.locator('div:nth-child(6) > div > div > .pi');
        this.btnTeams=page.locator('text=Teams');
        this.btnAddTeams=page.locator('button:has-text("Add Team")');
        this.TeamName=page.locator('[placeholder="Required"]');
        this.colour=page.locator('text=Team Name Use short words or abbreviations to identify the Team. Maximum 15 char >> div >> nth=2');
        this.selectColour=page.locator('div:nth-child(2) > div:nth-child(3) > .color-palette');
        this.des=page.locator('textarea');
        this.AddMembers=page.locator('button:has-text("Add Users/Roles")');
        this.selectMember=page.locator('text=chandra Babu (Admin)');
        this.btnAddTeam=page.locator('div[role="dialog"] button:has-text("Add Team")');
    }



    
    async CreatingQAGroupInTeams(){
        await this.clickonNewProcess();
        await this.validatingNewprocessPage();
        await this.clickOnCreateProcessFromScratch();
        await this.EnterDataOnProcessName();
        await this.EnterdataOnDescription()
        await this.ClickOnNextButton();
        await this.clickOnSkipButton();
        await this.clickOnFinish();
        await this.clickOnConfiguration();
        
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
    async EnterDataOnProcessName(){
        await this.ProcessName.fill('QaRole123')
        }
        async EnterdataOnDescription(){
        await this.lbldescription.fill('Data1');
       }
       async ClickOnNextButton(){
        await this.bthNext.click();
       }
       async clickOnSkipButton(){
        await this.btnSkip.click();
       }
       async clickOnFinish(){
        await this.btnFinish.click();
       }
       async clickOnConfiguration(){
        await this.btnConfiguration.click();
        await this.btnTeams.click();
        await this.btnAddTeams.click();
        await this.TeamName.fill('QA');
        await this.colour.click();
        await this.selectColour.click();
        await this.des.fill('Testing');
        await this.AddMembers.click();
        await this.selectMember.click();
        await this.btnAddTeam.click();
       }
      

}