import { expect, Locator, Page } from '@playwright/test';

export class ForgotPasswordInMaestro{

    readonly forgetPassword:Locator;
    readonly Email:Locator;
    readonly Reset:Locator;
    readonly BackToMaestro:Locator;


    constructor(page: Page){
        this.forgetPassword=page.locator('text=Forgot password?');
        this.Email=page.locator('input[type="text"]');
        this.Reset=page.locator('button:has-text("Reset password")');
        this.BackToMaestro=page.locator('text=Back to Login');
    
    
    }

    async ForgetPswToMaestro(){
        await this.clickOnForgotPassword();
        await this.enterEmail();
        await this.ClickOnResetPassword();
        await this.clickOnBackToMaestro();


    }

    async clickOnForgotPassword(){
        await this.forgetPassword.click();
    }
    async enterEmail(){
        await this.Email.fill('chandrababu@digitaltaas.com')
    }
    async ClickOnResetPassword(){
        await this.Reset.click();
    }
    async clickOnBackToMaestro(){
        await this.BackToMaestro.click();
    }


}