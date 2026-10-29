import { expect,test } from '@playwright/test';
const { POManager } = require('../../pageObjectManager/pageObjectManager');
const dataset=JSON.parse(JSON.stringify( require('../../utils/placeholdertestData.json')));

test.only('@Web login with valid student credentials', async({page})=>{
   const pomanager=new POManager(page);
    const loginpage=pomanager.getLoginpage();

   await loginpage.goTo();
   await loginpage.validlogin(dataset.phoneNumber,dataset.password);
   await page.waitForLoadState('networkidle');
  //expect(await page.screenshot()).toMatchSnapshot('login.png');
   //await page.screenshot({path:'login.png'});
  // await expect(page).toHaveURL('https://web.uat-ringpe.com/#/Home/cug-merchant/*');
  await expect(
    page.getByRole('heading', { name: 'Dashboard' }).first()
).toHaveText('Dashboard');
  

});
test('@Web login with valid parent credentials', async({page})=>{
   const pomanager=new POManager(page);
    const loginpage=pomanager.getLoginpage();

   await loginpage.goTo();
   await loginpage.validlogin(dataset.phoneNumber,dataset.password);
   await page.waitForLoadState('networkidle');
  //expect(await page.screenshot()).toMatchSnapshot('login.png');
   //await page.screenshot({path:'login.png'});
  await expect(page).toHaveURL('https://web.uat-ringpe.com/#/Home/cug-merchant/*');
  await expect(
    page.getByRole('heading', { name: 'Dashboard' }).first()
).toHaveText('Dashboard');
  

});
test('@Web login with valid teacher credentials', async({page})=>{
   const pomanager=new POManager(page);
    const loginpage=pomanager.getLoginpage();

   await loginpage.goTo();
   await loginpage.validlogin(dataset.phoneNumber,dataset.password);
   await page.waitForLoadState('networkidle');
  //expect(await page.screenshot()).toMatchSnapshot('login.png');
   //await page.screenshot({path:'login.png'});
  await expect(page).toHaveURL('https://web.uat-ringpe.com/#/Home/cug-merchant/*');
  await expect(
    page.getByRole('heading', { name: 'Dashboard' }).first()
).toHaveText('Dashboard');
  

});
test('@Web login with valid management credentials', async({page})=>{
   const pomanager=new POManager(page);
    const loginpage=pomanager.getLoginpage();

   await loginpage.goTo();
   await loginpage.validlogin(dataset.phoneNumber,dataset.password);
   await page.waitForLoadState('networkidle');
  //expect(await page.screenshot()).toMatchSnapshot('login.png');
   //await page.screenshot({path:'login.png'});
  await expect(page).toHaveURL('https://web.uat-ringpe.com/#/Home/cug-merchant/*');
  await expect(
    page.getByRole('heading', { name: 'Dashboard' }).first()
).toHaveText('Dashboard');
  

});

