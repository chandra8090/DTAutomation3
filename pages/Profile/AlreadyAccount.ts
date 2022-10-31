import { expect, Locator, Page } from '@playwright/test';

export class AlreadyAccountInMaestro{
    readonly sigIn:Locator;
    readonly email:Locator;
    readonly password:Locator;
    readonly login:Locator;

    constructor(page: Page){
        this.sigIn=page.locator('text=Sign in!');
        this.email=page.locator('input[type="text"]');
        this.password=page.locator('input[type="password"]');
        this.login=page.locator('button:has-text("Log in")');
        
    }

    async SigInToMaestro(){
        await this.clickOnSigin();
        await this.enterEmail();
        await this.enterPassword();
        await this.clickOnLoginButton();


    }
    async clickOnSigin(){
        await this.sigIn.click();
    }
    async enterEmail(){
        await this.email.fill('chandrababu@digitaltaas.com');
    }
    async enterPassword(){
        await this.password.fill('Chandra@8090');
    }
    async clickOnLoginButton(){
        await this.login.click();
    }

}