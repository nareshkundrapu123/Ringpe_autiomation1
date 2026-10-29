

class Coupons{

  constructor(page){
    this.page=page;
    this.couponmodule=page.locator('span:has-text("Coupons Redeemed")');

  }
  async couponspage(){

    await this.couponmodule.click();

  }

}
module.exports={Coupons};