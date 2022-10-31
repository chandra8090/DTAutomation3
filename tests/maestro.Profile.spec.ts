import test, { expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage/loginpage";
import { ChangeProfileImage } from "../pages/Profile/AddProfileImage";
import { AlreadyAccountInMaestro } from "../pages/Profile/AlreadyAccount";
import { ForgotPasswordInMaestro } from "../pages/Profile/ForgetEmail";
import { JoinToMaestroNow } from "../pages/Profile/NewUser";


test.beforeEach(async ({ page }) => {
    // await page.goto(options.baseURL);
    const loginpage = new LoginPage(page);
    await page.goto("https://maestro-universal-qa.quantrion.com/secure");
    await loginpage.logintoApp("chandrababu@digitaltaas.com","Chandra@8090");
 });

 test('AddProfileImage ', async ({ page }) => {     
    const cp = new ChangeProfileImage(page);
    await cp.profileImage();
});

test('RegistrationToMaestro ', async ({ page }) => {     
    const reg = new JoinToMaestroNow(page);
    await reg.RegistrationToMaestro();
    const loginpage = new LoginPage(page);
    await loginpage.logintoApp("chandrababu@digitaltaas.com","Chandra@8090");
});

test('AlreadySigInUser ', async ({ page }) => {     
    const sig = new AlreadyAccountInMaestro(page);
    await sig.SigInToMaestro();
});

test('ForgetPassword ', async ({ page }) => {     
    const fp = new ForgotPasswordInMaestro(page);
    await fp.ForgetPswToMaestro();
});