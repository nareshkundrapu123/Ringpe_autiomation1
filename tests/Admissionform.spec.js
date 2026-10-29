import { test,expect } from "@playwright/test";
import { POManager } from "../pageObjectManager/pageObjectManager";
const { admissionFormUrl } = require('../utils/placeholdertestData.json');

test.use({ ignoreHTTPSErrors: true });

test("Admission from open",async({page})=>{

    const pomanager=new POManager(page);
    const admissionform=pomanager.getAdmissionform();
    await admissionform.open();
    await admissionform.validations();

    await expect(page.getByText('A place for your child at vidhyanidhi School',{exact:true})).toBeVisible();
    
});

test("required field validation",async({page})=>{

    const pomanager=new POManager(page);
    const admissionform=pomanager.getAdmissionform();
    await admissionform.formvalidation();

        await expect(page.getByText('Please select a valid admission standard')).toBeVisible();
    
});

test("valid drop down selection",async({page})=>{

    const pomanager=new POManager(page);
    const admissionform=pomanager.getAdmissionform();
    await admissionform.dropdownselection();
    
});

test("requiredfieldvalidation",async({page})=>{
    const pomanager=new POManager(page);
    const admissionform=pomanager.getAdmissionform();
    await admissionform.requriedfieldsvalidation();

    await expect(page.getByLabel('First name *')).toBeVisible();
    await expect(page.getByLabel('Last name *')).toBeVisible();
    await expect(page.getByLabel('Gender *')).toBeVisible();
    await expect(page.getByLabel('Date of birth *')).toBeVisible();
    await expect(page.getByLabel('Category *')).toBeVisible();
    await expect(page.getByLabel('Medium of instruction *')).toBeVisible();
    await expect(page.getByLabel('Blood group *')).toBeVisible();
    await expect(admissionform.passportPhotoButton).toBeVisible();
    
    
} );