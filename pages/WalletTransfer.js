class WalletTransfer{

    constructor(page){
        this.page=page;
        this.Walletmodule=page.locator('span:has-text("Wallet to Wallet Transfer")');

    }

    async wallettransfer(){

        await this.Walletmodule.click();

    }

}
module.exports={WalletTransfer};