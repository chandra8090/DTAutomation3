import { expect, Locator, Page } from '@playwright/test';


export class JoinToMaestroNow{

    readonly joinMaestro:Locator;
    readonly firstName:Locator;
    readonly LastName:Locator;
    readonly Email:Locator;
    readonly password:Locator;
    readonly Accept:Locator;
    readonly createAccount:Locator;

    constructor(page: Page){
        this.joinMaestro=page.locator('text=Join Maestro now!');
        this.firstName=page.locator('input[type="text"] >> nth=0');
        this.LastName=page.locator('input[type="text"] >> nth=1');
        this.Email=page.locator('input[type="text"] >> nth=2');
        this.password=page.locator('input[type="password"]');
        this.Accept=page.locator('p-checkbox div >> nth=2');
        this.createAccount=page.locator('button:has-text("Create Account")');


    }

async RegistrationToMaestro(){
    await this.clickOnMeastro();
    await this.enterFirstName();
    await this.enterLastName();
    await this.enterEmail();
    await this.enterPassword();
    await this.selectAccept();
    await this.clickOncreateAccount();


}
async clickOnMeastro(){
    await this.joinMaestro.click();
}
async enterFirstName(){
    await this.firstName.fill('chandra');
}
async enterLastName(){
    await this.LastName.fill('QA');
}
async enterEmail(){
    await this.Email.fill('chandra234@mailinator.com');
}
async enterPassword(){
    await this.password.fill('123456789');
}
async selectAccept(){
    await this.Accept.click();
}
async clickOncreateAccount(){
    await this.createAccount.click();
}



}