const {Loginpage}=require('../Pages/Loginpage');
const {Ministatement}=require('../pages/Ministatement');
const {WalletTransfer}=require('../pages/WalletTransfer');
const {Ledgers}=require('../pages/Ledgers');
const {Coupons}=require('../pages/Coupons');
const {Tutionfee}=require('../pages/Tutionfee');
const {FinancialLiteracy}=require('../pages/FinancialLiteracy')
const { Admissionform } = require('../pages/Admissionform');
class POManager
{

    constructor(page){
        this.page=page;
        this.loginpage=new Loginpage(this.page);
        this.ministatement=new Ministatement(this.page);
        this.wallettransfer=new WalletTransfer(this.page);
        this.ledgerspage=new Ledgers(this.page);
        this.couponspage=new Coupons(this.page);
        this.Tutionfeepage=new Tutionfee(this.page);
        this.Financialpage=new FinancialLiteracy(this.page);
        this.admissionform=new Admissionform(this.page);

    }

     getAdmissionform(){
        return this.admissionform;
    }
       getLoginpage()
    {
        return this.loginpage;
    }
       
    getMinistatement(){
        return this.ministatement;
    }
    getWalletTransfer(){
        return this.wallettransfer;
    }
    getLedgerpage(){
        return this.ledgerspage;
    }
    getCouponspage(){
        return this.couponspage;
    }
    getTutionpage(){
        return this.Tutionfeepage;
    }
    getFinancialpage(){
        return this.Financialpage;
    }


}
module.exports={POManager};