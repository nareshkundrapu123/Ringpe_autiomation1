class Ministatement{

constructor(page){
    this.page=page;
    this.ministatementmodule=page.locator('span:has-text("Mini Statement")');

}

async ministatement(){
    await this.ministatementmodule.click();
}

}

module.exports={Ministatement};