import { expect, Locator, Page } from '@playwright/test';

export class EditTeams{
    readonly page: Page;
    readonly lblprocess: Locator;



    constructor(page: Page){
        this.page=page;
        this.lblprocess=page.locator('div:hastext("Processes")');
    }

    async EditingTeams(){
    }




}