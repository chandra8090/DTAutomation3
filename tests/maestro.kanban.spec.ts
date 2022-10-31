import test, { expect } from "@playwright/test";
import { kanbanPlusButtonClass } from "../pages/kanban/addingTicket+icon";
import { ChangeStatusInkanbanClass } from "../pages/kanban/ChangeingStatusInActivity";
import { ExpandOfActivityInKanbanClass } from "../pages/kanban/expand&collapseOfActivity";
import { kanbanFilterClass } from "../pages/kanban/FiltersFromManageFilterDropdown";
import { functionalityOfSearchInkanban } from "../pages/kanban/FunctionalityOfSearch";
import { kanbanClass } from "../pages/kanban/Kanban";
import { ManageFilterInkanbanClass } from "../pages/kanban/ManageFiltersInkanban";
import LoginPage from "../pages/LoginPage/loginpage";


test.beforeEach(async ({ page }) => {
    // await page.goto(options.baseURL);
    const loginpage = new LoginPage(page);
    await page.goto("https://maestro-universal-qa.quantrion.com/secure");
    await loginpage.logintoApp("chandrababu@digitaltaas.com","Chandra@8090");
 });

 test.describe("Kanban page test", () => {
    test('Create new activity in Kanban', async ({ page }) => {     
        const Bp = new kanbanClass(page);
        await Bp.CreatingNewKanbanPages();
      
    });
    test('Test to add a ticket in a status from + icon', async ({ page }) => {     
        const add=new kanbanPlusButtonClass(page);
        await add.ClickingOnKanbanPlusIcon();
      
    });

    test('Test to expand/collapse the statuses in the kanban page', async ({ page }) => {     
        const Bp = new kanbanClass(page);
        await Bp.CreatingNewKanbanPages();
        const add=new ExpandOfActivityInKanbanClass(page);
        await add.ExpandCollapseOfActivityInKanban();
       
    });

    test('Test to verify the functionality of search in the kanban page', async ({ page }) => {     
        const Bp = new kanbanClass(page);
        await Bp.CreatingNewKanbanPages();
        const add=new functionalityOfSearchInkanban(page);
        await add.FunctionalityOfSearchInNewKanbanPages();
       
    });
    test('Test to add a ticket from one manual group to another manual group', async ({ page }) => {     
        const Bp = new kanbanClass(page);
        await Bp.CreatingNewKanbanPages();
        const add=new ChangeStatusInkanbanClass(page);
        await add.ChangeingStatusInKanbanPages();
       
    });
    test('Test to verify manage filters in kanban page ', async ({ page }) => {     
        const Bp = new kanbanClass(page);
        await Bp.CreatingNewKanbanPages();
        const add=new ManageFilterInkanbanClass(page);
        await add.ManageFilterInKanbanPages();
       
    });
    test('Test to select few other filters from manage filter dropdown ', async ({ page }) => {     
        const Bp = new kanbanClass(page);
        await Bp.CreatingNewKanbanPages();
        const add=new kanbanFilterClass(page);
        await add.SelectFilterInKanbanPages();
       
    });


}); 
