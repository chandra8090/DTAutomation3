import { expect, Locator, Page } from '@playwright/test';

export class ActivityInTemplatesCentre{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly btnTemplate:Locator;
    readonly Activity:Locator;
    readonly btnKanban:Locator;
    readonly btnOpen:Locator;
    readonly btnclosed:Locator;
    readonly btnActivityForm:Locator;
    readonly btnUseThisTemplate:Locator;
    readonly btnNext:Locator;
    readonly valiatingNewProcessPage:Locator;
    readonly valiatingProcessOrch:Locator;
    readonly btnStatusMangement:Locator;
    readonly btnstatusMan:Locator;
    readonly validatingStatusManagement:Locator;
    readonly btnBackLog:Locator;
    readonly btnCreateActivity:Locator;
    readonly btnAutomation:Locator;
    readonly btnMapping:Locator;
    readonly ValidingMapping:Locator;


    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.btnTemplate=page.locator('em');
        this.Activity=page.locator('text=Test123');
        this.btnKanban=page.locator('span:has-text("Kanban")');
        this.btnOpen=page.locator('text=Open');
        this.btnclosed=page.locator('text=Closed');
        this.btnActivityForm=page.locator('text=Activity Form');
        this.btnUseThisTemplate=page.locator('div[role="dialog"] button:has-text("Use this Template")');
        this.btnNext=page.locator('button:has-text("Next")');
        this.valiatingNewProcessPage=page.locator('text=New Process');
        this.valiatingProcessOrch=page.locator('text=Process Orchestration >> nth=1');
        this.btnStatusMangement=page.locator('div:nth-child(6) > div > div > .pi');
        this.btnstatusMan=page.locator('text=Status Management');
        this.validatingStatusManagement=page.locator('text=Status Management >> nth=1');
        this.btnBackLog=page.locator('div#sideMenuDiv>div:first-of-type');
        this.btnCreateActivity=page.locator('button:has-text("Create Activity")');
        this.btnAutomation=page.locator('.automationIcon');
        this.btnMapping=page.locator('span:has-text("Mappings")');
        this.ValidingMapping=page.locator('text=Mappings >> nth=1');
    
    
    }

    async ViewingActivityInTemplates(){
        await this.clickOnIconTemplate();
        await this.validatingTemplateScreen();
        await this.clickOnActivity();
        await this.clickOnKanban();
        await this.viewOnKanbanBoard();
        await this.ViewActivityForm();
        await this.ClickOnUseThisTemplate();
        await this.clickOnNext();
        await this.validatingNewProcessPage();
        await this.ValidatingProcessOrchPage();
        await this.clickOnProcessManagement();
        await this.selectProcessManagement();
        await this.ValidatingStatusPage();
        //await this.ClickOnBackLog();
        //await this.clickOnCreateActivity();
        await this.clickOnAutomationIcon();
   
   
    }

    async clickOnIconTemplate(){
        await this.btnTemplate.click();
     }
     async validatingTemplateScreen(){
        await expect(this.page.locator('a > img')).toBeVisible();
     }

    async clickOnActivity(){
    await this.Activity.click();
            }
    async clickOnKanban(){
    await this.btnKanban.nth(2).click();
    }

    async viewOnKanbanBoard(){
        await expect(this.page.locator('text=Open')).toBeVisible();
        await expect(this.page.locator('text=Closed')).toBeVisible();
    }

    async ViewActivityForm(){
        await this.btnActivityForm.click();
    }
    async ClickOnUseThisTemplate(){
        await this.btnUseThisTemplate.click();
    }
    async clickOnNext(){
        await this.btnNext.click();
    }
    async validatingNewProcessPage(){
        await expect(this.page.locator('text=New Process')).toBeVisible();
        await this.btnNext.click();
    }
    async ValidatingProcessOrchPage(){
        await expect(this.page.locator('text=Process Orchestration >> nth=1')).toBeVisible();
    }
    async clickOnProcessManagement(){
        await this.btnStatusMangement.click();
    }
    async selectProcessManagement(){
        await this.btnstatusMan.click();
    }
    async ValidatingStatusPage(){
        await expect(this.page.locator('text=Status Management >> nth=1')).toBeVisible();
    }
    async ClickOnBackLog(){
        await this.btnBackLog.click();
    }
    async clickOnCreateActivity(){
        await this.btnCreateActivity.click();
    }
    async clickOnAutomationIcon(){
        await this.btnAutomation.click();
    }
    async clickOnMappingIcon(){
        await this.btnMapping.click();
    }
}