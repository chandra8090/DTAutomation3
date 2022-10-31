import { expect, Locator, Page } from '@playwright/test';

export class InviteMember{
    readonly page: Page;
    readonly Group:Locator;
    readonly options:Locator;
    readonly InviteMember:Locator;
    readonly email:Locator;
    readonly RollDropDown:Locator;
    readonly selectUser:Locator;
    readonly btnAdd:Locator;
    readonly btnSentInvite:Locator;


    constructor(page: Page){
        this.page=page;
        this.Group=page.locator('text=Role-1 >> nth=1');
        this.options=page.locator('div#options-button-862');
        this.InviteMember=page.locator('text=Invite Members');
        this.email=page.locator('#email');
        this.RollDropDown=page.locator('text=Role Admin >> div[role="button"]');
        this.selectUser=page.locator('text=User');
        this.btnAdd=page.locator('button:has-text("Add")');
        this.btnSentInvite=page.locator('button:has-text("Send Invite")');
    }

    async InviteMembersEmail(){
        await this.clickOnGroupActivity();
        await this.selectOnOptionButton();
        await this.clickOnInviteMembers();
        await this.EnterEmailId();
        await this.SelectRoleDropDown();
        await this.clickOnAddButton();
        await this.clickOnSendInviteBtn();
    }
    async clickOnGroupActivity(){
        await this.Group.isVisible;
     }
     async selectOnOptionButton(){
        await this.options.click();
     }
     async clickOnInviteMembers(){
        await this.InviteMember.click();
    
    }
    async EnterEmailId(){
        await this.email.fill('ababu123@mailinator.com');
    }
     async SelectRoleDropDown(){
        await this.RollDropDown.click();
        await this.selectUser.click();
     }

async clickOnAddButton(){
    await this.btnAdd.click();
}
async clickOnSendInviteBtn(){
    await this.btnSentInvite.click();
}
}