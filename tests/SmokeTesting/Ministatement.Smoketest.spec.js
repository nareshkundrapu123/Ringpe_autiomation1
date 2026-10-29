import { expect,test } from "@playwright/test";
import { REFUSED } from "node:dns";
const {POManager}=require('../../pageObjectManager/pageObjectManager');
const dataset=JSON.parse(JSON.stringify(require('../../utils/placeholdertestData.json')));

test("@web test the ministatement module",async({page})=>{
    const pomanager=new POManager(page);
    const loginpage=pomanager.getLoginpage();
    const ministatementpage=pomanager.getMinistatement();
    await loginpage.goTo();
   await loginpage.validlogin(dataset.phoneNumber,dataset.password);
   await page.waitForLoadState('networkidle');
   await ministatementpage.ministatement();

});