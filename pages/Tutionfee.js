class Tutionfee{

    constructor(page){

        this.page=page;
        this.tutionfeemodule=page.locator('span:has-text("Tuition Due")');
    }
    async tutionfeepage(){
        await this.tutionfeemodule.click();
    }
}
module.exports={Tutionfee};