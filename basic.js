const signUpPage = require('../pageobjects/signUp.page')
const mainPage = require('../pageobjects/main.page')
const mailPage = require('../pageobjects/mail.page')
const assetHomeUrl = 'https://dev.asset.accountant';
const mailsakPageUrl = 'https://mailsac.com/login';


describe('registration on Asset page', () => {
    it('registration', async () => {
        await browser.url(assetHomeUrl);
        await signUpPage.clickCreateAccountButton();
        await signUpPage.setFirstNameValue();
        await signUpPage.setLastNameValue();
        await signUpPage.setEmailValue();
        await signUpPage.setPhoneNumberValue();
        await signUpPage.setPasswordValue();
        await signUpPage.setConfirmPasswordValue();
        await signUpPage.clickRegisterButton();
        await browser.url(mailsakPageUrl);
        await mailPage.setUserNameValue();
        await mailPage.setPasswordValue();
        await mailPage.clickSignInButton();
        await browser.pause(2000); 
        await mailPage.clickMailButton();  //need pause for render
        await mailPage.clickMessageButton();
        await mailPage.clickUnblockButton();
        await browser.url('https://mailsac.com'+await MailPage.unblockButton.getAttribute('href'))
        await mailPage.clickVerifyButton()
        await browser.switchWindow('Loading… - AssetAccountant™');
        await browser.pause(1000);
        // await MainPage.setOrganisationNameValue();
        await mainPage.setOrganisationNameValue();
        await mainPage.clickCreateButton();
        await mainPage.clickAddButton();
        await mainPage.clickAssetGroupButton();
        await mainPage.clickCapitalButton();
        await mainPage.clickSaveButton();
        await mainPage.clickExitButton()
    })
})