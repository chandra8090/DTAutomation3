import { expect, Locator, Page } from '@playwright/test';
import fs from 'fs';
// import { parse } from 'csv-parse/sync';
import path from 'path';

export class ProcessesPage{
    readonly page: Page; 
    readonly lblprocess: Locator;
    readonly btnnewprocess: Locator;
    readonly mdlnewprocess: Locator;
    readonly txtprocessname: Locator;
    readonly txtdescription: Locator;
    readonly btnnext: Locator;
    readonly btncancel: Locator;
    readonly lnkbrowsefile: Locator;
    readonly btnskip: Locator;
    readonly btnback: Locator;
    readonly lbluploadnoerrors: Locator;
    readonly lblsuccessmessage: Locator;
    readonly btnfinish: Locator;

    constructor(page: Page){
        this.page = page;
        this.lblprocess = page.locator('text=Processes');
        this.btnnewprocess = page.locator('button:has-text("New Process")');
        this.mdlnewprocess = page.locator('div[role="dialog"] div:has-text("New Process")');
        this.txtprocessname = page.locator('text=Process Name Description >> input[type="text"]');
        this.txtdescription = page.locator('textarea');
        this.btnnext = page.locator('button:has-text("Next")');
        this.btncancel = page.locator('button:has-text("Cancel")');
        this.lnkbrowsefile = page.locator('text=Browse File');
        this.btnskip = page.locator('button:has-text("Skip")');
        this.btnback = page.locator('button:has-text("Back")');
        this.lbluploadnoerrors = page.locator('text=0 Errors');
        this.lblsuccessmessage = page.locator('text=/.*Activities successfully imported!.*/')
        this.btnfinish = page.locator('button:has-text("Finish")');


    }


    async createNewProcessUploadCSV(){
        await this.clickNewProcess()
        await this.waitForNewProcessModal();
        await this.enterProcessName();
        await this.enterProcessDesc();
        await this.clickonNextProcessDetailsPage();
        await this.uploadCSVFile();
        // await this.verifyUploadSuccess();
    }

    async clickNewProcess(){
        await this.btnnewprocess.click();
    }

    async waitForNewProcessModal(){
        await this.mdlnewprocess.waitFor();
    }

    async enterProcessName(){
        await this.txtprocessname.fill("autoprocess " + new Date().toString());
    }

    async enterProcessDesc(){
        await this.txtdescription.fill("auto process:");
    }

    async clickonNextProcessDetailsPage(){
        await this.btnnext.click();
        await this.mdlnewprocess.waitFor();
    }

    async clickonNextUploadPage(){
        await this.btnnext.click();
        await this.mdlnewprocess.waitFor();
    }

    async uploadCSVFile(){
        const [fileChooser] = await Promise.all([
        // It is important to call waitForEvent before click to set up waiting.
        this.page.waitForEvent('filechooser'),
        this.lnkbrowsefile.click()
          ]);
        await fileChooser.setFiles('C:\\Users\\DTSuman\\Downloads\\Hr- IST 2.csv');
    }

    // async verifyUploadSuccess(){
    //     this.lbluploadnoerrors.isVisible();
    //     let records = [];
    //     records = parse(fs.readFileSync(path.join('C:\\Users\\DTSuman\\Downloads', 'Hr- IST 2.csv')), {
    //         columns: true,
    //         skip_empty_lines: false
    //       });
    //      var count = records.length;
    //     expect((await this.lblsuccessmessage.textContent()),'Count of records').toContain(count + " of " + count);
    // }

}

