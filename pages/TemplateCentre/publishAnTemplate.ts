import { expect, Locator, Page } from '@playwright/test';

export class AddingTemplate{
    readonly page: Page;
    readonly Group:Locator;
    readonly options:Locator;
    readonly publish:Locator;
    readonly TemplateName:Locator;
    readonly description:Locator;
    readonly tag:Locator;
    readonly agile:Locator;
    readonly category:Locator;
    readonly software:Locator;
    readonly recommendProcess:Locator;
    readonly uploadImage:Locator;
    readonly publish1:Locator;
    readonly AddBrowserFile:Locator;
    readonly AddBrowserImage:Locator;
    readonly AddBrowserFile1:Locator;
   readonly AddBrowserFileSmall: Locator;
   readonly AddBrowserFileMedium: Locator;
   readonly AddBrowserFileLarge: Locator;
   readonly publish123: Locator;
  

    constructor(page: Page){
        this.page=page;
        this.Group=page.locator('text=Role-1 >> nth=1');
        this.options=page.locator('div#options-button-862');
        this.publish=page.locator('text=Publish as Template');
        this.TemplateName=page.locator('textarea >> nth=0');
        this.description=page.locator('.ql-editor');
        this.tag=page.locator('input[role="searchbox"] >> nth=0')
        this.agile=page.locator('li[role="option"]:has-text("Agile")');
        this.category=page.locator('input[role="searchbox"] >> nth=1');
        this.software=page.locator('li[role="option"]:has-text("Software") >> nth=0');
        this.recommendProcess=page.locator('textarea >> nth=1');
        this.uploadImage=page.locator('text=Click to add image');
        this.publish1=page.locator('button:has-text("Publish")');
        this.AddBrowserImage=page.locator('i.pi.pi-plus');
        this.AddBrowserFileSmall=page.locator('text=365x180pxSmall >> div >> nth=1');
        this.AddBrowserFileMedium=page.locator('text=400x200pxMedium >> div >> nth=1');
        this.AddBrowserFileLarge=page.locator('text=630x330pxLarge >> i');
        this.publish123=page.locator('button:has-text("Publish")');
      
    }

    async CreatingTemplate(){
        await this.clickOnGroupActivity();
        await this.selectOnOptionButton();
        await this.clickOnPublishAsTemplete();
        await this.textOnTemplateName();
        await this.enterDescription();
        await this.EnterTextOnTag();
        await this.RecommendProcess();
        await this.AddedImages();
        await this.clickOnPublishButton();
       

    }

    async clickOnGroupActivity(){
        await this.Group.isVisible;
     }
     async selectOnOptionButton(){
        await this.options.click();
     }
     async clickOnPublishAsTemplete(){
        await this.publish.click();
     }
     async textOnTemplateName(){
        await this.TemplateName.fill('Automation1');
     }
     async enterDescription(){
        await this.description.fill('Qa Automation');
     }
     async EnterTextOnTag(){
        await this.tag.fill('a');
        await this.agile.click();
        await this.category.fill('s');
        await this.software.click();
     }
     async RecommendProcess(){
        await this.recommendProcess.fill('xyz');
     }
     async AddedImages(){
      
      const [fileChooser1] = await Promise.all([
         // It is important to call waitForEvent before click to set up waiting.
         this.page.waitForEvent('filechooser'),
         this.AddBrowserFileSmall.click()
           ]);
         await fileChooser1.setFiles('C:\\Users\\RAINBOW\\OneDrive - Digital TaaS\\Desktop\\1q1.jpg');
    
         const [fileChooser2] = await Promise.all([
            // It is important to call waitForEvent before click to set up waiting.
            this.page.waitForEvent('filechooser'),
            this.AddBrowserFileMedium.click()
              ]);
            await fileChooser2.setFiles('C:\\Users\\RAINBOW\\OneDrive - Digital TaaS\\Desktop\\1q1.jpg');


            const [fileChooser3] = await Promise.all([
               // It is important to call waitForEvent before click to set up waiting.
               this.page.waitForEvent('filechooser'),
               this.AddBrowserFileLarge.click()
                 ]);
               await fileChooser3.setFiles('C:\\Users\\RAINBOW\\OneDrive - Digital TaaS\\Desktop\\123.jpg');
     }
     
   async clickOnPublishButton(){
      await this.publish123.click();
   }
  
}
     



