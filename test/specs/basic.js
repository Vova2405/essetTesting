const SignUpPage = require('../pageobjects/signUp.page')
const MainPage = require('../pageobjects/main.page')
const MailPage = require('../pageobjects/mail.page')

describe('registration on Asset page', () => {
    it('registration', async () => {
        await browser.url('https://dev.asset.accountant');
        await SignUpPage.createAccountButton.waitForDisplayed({timeout: 15000});
        await browser.pause(2000);
        await SignUpPage.createAccountButtonClick();
        await browser.pause(500);
        await SignUpPage.firstNameInputValue();
        await browser.pause(500);
        await SignUpPage.lastNameInputValue();
        await browser.pause(500);
        await SignUpPage.emailInputValue();
        await browser.pause(500);
        await SignUpPage.phoneNumberInputValue();
        await browser.pause(500);
        await SignUpPage.passwordInputValue();
        await browser.pause(500);
        await SignUpPage.confirmPasswordValue();
        await browser.pause(500);
        await SignUpPage.registerButtonClick();
        await browser.pause(4000);
        await browser.url('https://mailsac.com/login');
        await browser.pause(3000);
        await MailPage.userNameInputValue();
        await browser.pause(500);
        await MailPage.userPasswordInputValue();
        await browser.pause(500);
        await MailPage.signInButtonClick();
        await browser.pause(3000);
        await MailPage.dropdownMenuClick();
        await browser.pause(500);
        await MailPage.mailButtonClick();
        await browser.pause(2000);
        await MailPage.messageClick();
        await browser.pause(2000);
        await MailPage.unblockButtonClick();
        await browser.pause(2000);
        await browser.url('https://mailsac.com'+await MailPage.unblockButton.getAttribute('href'))
        await MailPage.verifyButtonClick()
        await browser.pause(2000);
        await browser.switchWindow('Loading… - AssetAccountant™');
        await browser.waitUntil(()=> {
            return MainPage.organizationInput.isDisplayed()
        }, 30000)
        await MainPage.organisationNameValue();
        await browser.pause(2000);
        await MainPage.createButtonClick();
        await browser.waitUntil(()=> {
            return MainPage.addButton.isDisplayed();

        }, 30000);
        await MainPage.addButtonClick();
        await browser.pause(3000);
        await MainPage.assetGroupButtonClick();
        await browser.pause(2000);
        await MainPage.capitalContainerClick();
        await browser.pause(2000);
        await MainPage.saveButtonClick();
        await browser.pause(2000);
        await MainPage.exitButtonClick()
        await browser.pause(2000);
    })
})