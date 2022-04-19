const SignUpPage = require('../pageobjects/signUp.page')
const MainPage = require('../pageobjects/main.page')
const MailPage = require('../pageobjects/mail.page')
const assetHomeUrl = 'https://dev.asset.accountant';
const mailsakPageUrl = 'https://mailsac.com/login';


describe('registration on Asset page', () => {
    it('registration', async () => {
        await browser.url(assetHomeUrl);
        await SignUpPage.clickCreateAccountButton();
        await SignUpPage.setFirstNameValue();
        await SignUpPage.setLastNameValue();
        await SignUpPage.setEmailValue();
        await SignUpPage.setPhoneNumberValue();
        await SignUpPage.setPasswordValue();
        await SignUpPage.setConfirmPasswordValue();
        await SignUpPage.clickRegisterButton();
        await browser.url(mailsakPageUrl);
        await MailPage.setUserNameValue();
        await MailPage.setPasswordValue();
        await MailPage.clickSignInButton();
        await browser.pause(2000); 
        await MailPage.clickMailButton();  //need pause for render
        await MailPage.clickMessageButton();
        await MailPage.clickUnblockButton();
        await browser.url('https://mailsac.com'+await MailPage.unblockButton.getAttribute('href'))
        await MailPage.clickVerifyButton()
        await browser.switchWindow('Loading… - AssetAccountant™');
        await browser.pause(1000);
        // await MainPage.setOrganisationNameValue();
        await MainPage.setOrganisationNameValue();
        await MainPage.clickCreateButton();
        await MainPage.clickAddButton();
        await MainPage.clickAssetGroupButton();
        await MainPage.clickCapitalButton();
        await MainPage.clickSaveButton();
        await MainPage.clickExitButton()
    })
})