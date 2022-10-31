import test, { expect } from "@playwright/test";
import { AddingCommentToaActivityInBacklogPage } from "../pages/Backlog/AddingComment";
import { AddingCsvFileToBacklog } from "../pages/Backlog/Addingcsvfile";
import { AddingFileToaActivityInBacklogPage } from "../pages/Backlog/AddingFile";
import { AgencyInBacklogPage } from "../pages/Backlog/Agency";
import { CandidateNameBacklogPage } from "../pages/Backlog/candidateName";
import { StatusclosedInBacklogPage } from "../pages/Backlog/ClosedActivity";
import { DeletingFileInaActivityInBacklogPage } from "../pages/Backlog/DeletingFile";
import { DescriptionInBacklogpage } from "../pages/Backlog/DescriptionBacklog";
import { DownloadingFileInaActivityInBacklogPage } from "../pages/Backlog/DownloadingFile";
import { BacklogDragAndDRopClass } from "../pages/Backlog/DragAndDrop";
import { EditingActivityInBacklogPage } from "../pages/Backlog/EditingActivity";
import { FollowActivityInBacklogPage } from "../pages/Backlog/FollowActivity";
import { BacklogHoldAndDropClass } from "../pages/Backlog/HoldAndDrop";
import { OpenBacklogPage } from "../pages/Backlog/openingBacklogPage";
import { PriorityInBacklogPage } from "../pages/Backlog/Priority";
import { RegionBacklogPage } from "../pages/Backlog/RegionBacklog";
import { ResetFilterInBacklogPage } from "../pages/Backlog/ResetFilters";
import { RolesBacklogPage } from "../pages/Backlog/RoleBacklog";
import { SearchBacklogpage } from "../pages/Backlog/searchOption";
import { ShareActivityInBacklogPage } from "../pages/Backlog/ShareActivity";
import { StatusInBacklogPage } from "../pages/Backlog/Status";
import { SummaryOnBacklogPage } from "../pages/Backlog/SummaryOnBacklogPage";
import { BacklogUngroupActivityClass } from "../pages/Backlog/UnGroupingActivity";
import LoginPage from "../pages/LoginPage/loginpage";
import { NewBackLogpage } from "../pages/LoginPage/NewBacklogPage";



test.beforeEach(async ({ page }) => {
    // await page.goto(options.baseURL);
    const loginpage = new LoginPage(page);
    await page.goto("https://maestro-universal-qa.quantrion.com/secure");
    await loginpage.logintoApp("chandrababu@digitaltaas.com","Chandra@8090");
 });

test.describe("Backlog Demo", () => {
   test('Create new activity in backlog', async ({ page }) => {     
      const Bp = new NewBackLogpage(page);
      await Bp.CreatingNewBacklogPages();
     
  });
  test('Adding Csv File To the backlog', async ({ page }) => {     
    const Bp = new AddingCsvFileToBacklog(page);
    await Bp.CreatingNewBacklogPagesWithCsvFile();
   
});
test(' To verify the DragAndDRop In BackLog Page. ', async ({ page }) => {
   const priorty=new BacklogDragAndDRopClass(page);
   await priorty.CreatingDragAndDropInBacklog();

});

  test('TC001To verify the opening of Backlog page.', async ({ page }) => {
      const bl=new OpenBacklogPage(page);
      await bl.VerifyingBacklogPages();

  });

  test('TC005 To verify the Search filter functionality.', async ({ page }) => {
    const search=new SearchBacklogpage(page);
    await search.VerifySearchOptionInBacklogPages();
     
  });

  test('TC009 To verify the add condition functionality by selecting both OR and AND expression.', async ({ page }) => {
      const summary=new SummaryOnBacklogPage(page);
      await summary.VerifySummaryInBacklogPages();
     
  });

  test('TC008 To verify the add condition functionality by selecting OR expression.', async ({ page }) => {
       const Desc = new DescriptionInBacklogpage(page);
      await Desc.VerifyDescriptionInBacklogPages();

  });
 
  test('TC007 To verify the add condition functionality by selecting AND expression.', async ({ page }) => {
      const Status=new StatusInBacklogPage(page);
      await Status.VerifyStatusPage();

   });
   test('To Verify the CandidateName in backlog page.', async ({ page }) => {
      const CN=new CandidateNameBacklogPage(page);
      await CN.VerifyCandidateNamePage();

   });
   test('To Verify the Region in backlog page.', async ({ page }) => {
      const region=new RegionBacklogPage(page);
      await region.VerifyRegionBacklogPage();

   });
   test('To Verify the Role in backlog page.', async ({ page }) => {
    const role=new RolesBacklogPage(page);
   await role.VerifyRolesBacklogPage();

    });

  test('To Verify the Agency in backlog page.', async ({ page }) => {
      const agency=new AgencyInBacklogPage(page);
      await agency.VerifyAgencyPage();

   });
  
   test('TC017 To verify edit the funtionaity of the activities which were already added.', async ({ page }) => {
      const Edit=new EditingActivityInBacklogPage(page);
      await Edit.VerifyEditOnActivity();

   });
   test('TC021 To verify add comment in the activity page.', async ({ page }) => {
      const comment=new AddingCommentToaActivityInBacklogPage(page);
      await comment.VerifyAddCommentOnActivity();

   });
   test('TC014 To Verify the add option on backlog page', async ({ page }) => {
      const File=new AddingFileToaActivityInBacklogPage(page);
      await File.VerifyAddingFileOnActivity();

   });
   test('TC024 To verify the share option in the activity detail page.', async ({ page }) => {
      const share=new ShareActivityInBacklogPage(page);
      await share.VerifyShareActivity();

   });

   test('To Verify the Follow Activity in backlog page.', async ({ page }) => {
      const follow=new FollowActivityInBacklogPage(page);
      await follow.VerifyFollowActivity();

   });
});

 test.describe("Backlog page test", () => {
    test('TC022 To verify the close option in the activity detail page.', async ({ page }) => {
        const closed=new StatusclosedInBacklogPage(page);
        await closed.VerifyStatusclosedPage();
 
     });
     test('To verify the funtionaity of downloading a file which is already added in the activities.', async ({ page }) => {
      const download=new DownloadingFileInaActivityInBacklogPage(page);
      await download.VerifyDownloadingAnActivity();

   });
   test('TC 019 To verify the funtionaity of deleting a file which is already added in the activities.', async ({ page }) => {
      const delete1=new DeletingFileInaActivityInBacklogPage(page);
      await delete1.DeletingfileInaActivity();

   });

   test('TC012 To verify the search functionality in manage filter. ', async ({ page }) => {
      const priorty=new PriorityInBacklogPage(page);
      await priorty.VerifyProrityPage();

   });
   test(' To verify the DragAndDRop In BackLog Page. ', async ({ page }) => {
      const priorty=new BacklogDragAndDRopClass(page);
      await priorty.CreatingDragAndDropInBacklog();

   });
   test(' To verify the Ungroup an Activity In BackLog Page. ', async ({ page }) => {
      const priorty=new BacklogUngroupActivityClass(page);
      await priorty.CreatingUngroupActivityInBacklog();

   });

   test(' To verify the HoldAndDrop an Activity In BackLog Page. ', async ({ page }) => {
      const priorty=new BacklogHoldAndDropClass(page);
      await priorty.CreatingHoldAndDropInBacklog();

   });
   test('TC013 To verify the reset button in the manage filter.', async ({ page }) => {
      const Reset=new ResetFilterInBacklogPage(page);
      await Reset.VerifyResetFilter();

   });

 


}); 