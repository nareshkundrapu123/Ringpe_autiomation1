class FinancialLiteracy{


    constructor(page){
        this.page=page;
        this.Financialmodule=page.locator('span:has-text("FinancialLiteracy")');


    }
    async Financialpage(){
        await this.Financialmodule.click();
    }
}
module.exports={FinancialLiteracy};