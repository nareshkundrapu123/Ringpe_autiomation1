class Ledgers{

    constructor(page){
        this.page=page;
        this.ledgermodule=page.locator('span:has-text("Ledger")');

    }
    async ledgerpage(){
        await this.ledgermodule.click();
    }
}

module.exports={Ledgers};