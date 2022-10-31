import { expect, Locator, Page } from '@playwright/test';
import { ProcessesPage } from '../processespage';

export default class LoginPage{
    readonly page: Page;
    readonly txtusername: Locator;
    readonly txtpassword: Locator;
    readonly btlogin: Locator;
    readonly processespage: ProcessesPage;

constructor(page: Page){
        this.page = page;
        this.txtusername = page.locator('input[type="text"]');
        this.txtpassword = page.locator('input[type="password"]');
        this.btlogin = page.locator('button:has-text("Log in")');
        this.processespage = new ProcessesPage(page);
}

async enterUsername(username: string){
    await this.txtusername.fill(username);
}

async enterPassword(password: string){
    await this.txtpassword.fill(password);
}

async clickLogin(){
    await this.btlogin.click();
}

async verifyLoginButtonEnabled(){
    await this.btlogin.isEnabled();
}

async verifyProcessesPageIsDisplayedAfterLogin(){
    await this.processespage.lblprocess.isVisible();
}

async logintoApp(username: string, password: string){
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.verifyLoginButtonEnabled();
    await Promise.all([
        this.page.waitForNavigation(/*{ url: 'http://maestro-qa.quantrion.com/#/secure' }*/),
        this.clickLogin()
    ]);
    await this.verifyProcessesPageIsDisplayedAfterLogin();
    await this.page.waitForLoadState();
}

}