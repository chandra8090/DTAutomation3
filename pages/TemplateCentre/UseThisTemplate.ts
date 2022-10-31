import { expect, Locator, Page } from '@playwright/test';

export class UseThisTemplate{
    readonly page: Page;
    readonly lblprocess: Locator;
    readonly clickTemplateIcon:Locator;
    readonly usethisTemplate:Locator;
    readonly processName:Locator;
    readonly next:Locator;
    readonly email:Locator;
    readonly btnAdd:Locator;
    readonly NewProcessbtnAdd:Locator;
    readonly ValidatingPCPage:Locator;
    readonly btnProfile:Locator;
    readonly bthLogout:Locator;


    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
        this.clickTemplateIcon=page.locator('div.d-flex.processes-page-controls-globe');
        this.usethisTemplate=page.locator('text=Software Development and Extreme programming Show All Extreme Programming Proces >> button >> nth=0');
        this.processName=page.locator('text=Process Name Description >> input[type="text"]');
        this.next=page.locator('button:has-text("Next")');
        this.email=page.locator('#email');
        this.btnAdd=page.locator('button:has-text("Add")');
        this.NewProcessbtnAdd=page.locator('button:has-text("Next")');
        this.ValidatingPCPage=page.locator('text=Process Orchestration >> nth=1');
        this.btnProfile=page.locator('div.avatarProfile');
        this.bthLogout=page.locator('text=Log Out');
    }

    async UseThisTemplateView(){
        await this.clickOnTemplateImage();
        await this.selectUseThisTemplate();
        await this.ProcessNameBox();
        await this.btnNext();
        await this.enteremail();
        await this.clickOnBtnAdd();
        await this.NewprocessPageBtnNext();
        await this.PCPage();
        await this.clickonProfileButton();
        await this.clickonLogoutButton();
        
    }

    async clickOnTemplateImage(){
        await this.clickTemplateIcon.click();
    }
    async selectUseThisTemplate(){
        await this.usethisTemplate.click();
    }
    async ProcessNameBox(){
        await this.processName.fill('testing');
    }
    async btnNext(){
        await this.next.click();
    }
    async enteremail(){
        await this.email.fill('chandraece.413@gmail.com');
    }
    async clickOnBtnAdd(){
        await this.btnAdd.click();
    }
    async NewprocessPageBtnNext(){
        await this.NewProcessbtnAdd.click();
    }
    async PCPage(){
        await this.ValidatingPCPage.isVisible();
    }
    async clickonProfileButton(){
        await this.btnProfile.click();
    }
    async clickonLogoutButton(){
        await this.bthLogout.click();
    }



}