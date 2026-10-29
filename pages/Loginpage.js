
class Loginpage{

    constructor(page){
        this.page=page;
        this.mobilenumber=page.locator('#mobilenumber');
        this.password=page.locator('[name="password"]');
        this.submitbutton=page.getByText('Login');
    }
    async goTo(){
        await this.page.goto("https://web.uat-ringpe.com/#/");
    }


async validlogin(mobilenumber,password){

        await this.mobilenumber.fill(mobilenumber);
        await this.password.fill(password);
         await this.page.waitForTimeout(40000);
        await this.submitbutton.click();


    }
}

module.exports= {Loginpage};