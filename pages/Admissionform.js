
const { expect } = require('@playwright/test');
const { admissionFormUrl } = require('../utils/placeholdertestData.json');

class Admissionform {
    constructor(page) {
        this.page = page;
         this.Startapplication = page.getByRole('button', { name: 'Start an application' });
         this.Continuebutton= page.getByRole('button',{name: 'Continue'});
         this.chooseclass= page.getByPlaceholder('Choose a class');
         this.cancelbutton=page.getByRole('button',{name: 'Cancel'});
         this.radiobutton2026 = page.getByRole('radio', {name: '2026–27 Mid-term · joining during the year' });
         this.passportPhotoButton = page.getByRole('button', { name: 'Choose a photo' });
    }

    async open() {
        await this.page.goto(admissionFormUrl);
    }
    async validations(){
       
        await this.Startapplication.click();
        await this.radiobutton2026.check();
        await this.cancelbutton.click();

    }
    async formvalidation(){

          await this.page.goto(admissionFormUrl);
           await this.Startapplication.click();
        await this.Continuebutton.click();
        
    }
    async dropdownselection(){

 await this.page.goto(admissionFormUrl);
           await this.Startapplication.click();
           await this.chooseclass.click();
          await this.page.getByRole('option', { name: 'UKG'}).click();
        // await this.chooseclass.selectOption({label:'UKG'}).click();
             await this.Continuebutton.click();


    }
    async requriedfieldsvalidation(){

            await this.page.goto(admissionFormUrl);
           await this.Startapplication.click();
           await this.chooseclass.click();
          await this.page.getByRole('option', { name: 'UKG'}).click();
        // await this.chooseclass.selectOption({label:'UKG'}).click();
             await this.Continuebutton.click();
             

    }    
    
}

module.exports = { Admissionform };