import { expect,test } from "@playwright/test";
const {POManager}=require('../../pageObjectManager/pageObjectManager');
const dataset=JSON.parse(JSON.stringify(require('../../utils/placeholdertestData.json')));

test("@web test the walletTransfer module",async({page})=>{
    const pomanager=new POManager(page);
    const loginpage=pomanager.getLoginpage();
    const Walletmodule=pomanager.getWalletTransfer();
    await loginpage.goTo();
   await loginpage.validlogin(dataset.phoneNumber,dataset.password);
   await page.waitForLoadState('networkidle');
   await Walletmodule.wallettransfer();


});