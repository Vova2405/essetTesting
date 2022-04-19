const wait = require('../pageobjects/waitUntil.page');
const signUpPage = require('../pageobjects/signUp.page')
const userNameInput = '[name="username"]';
const userPasswordInput = '[name="password"]';
const signInButton = '[ng-disabled="disableSubmission"]';
const dropdownMenu = '[class="dropdown-toggle"]';
const dashboardButton = '[href="/dashboard"]';
const mailButton = `//*[text()="phenom2405_ulnwq@mailsac.com"]`; // dont know how to take it from signUpPage
const message = '//strong[contains(text(), "info@assetaccountant.com.au") and @class]';
const unblockButton = '//*[text()="Unblock links and images ↗"]';
const verifyButton = '[href*="https://dev.auth.faktored.com/Account/Authentication/VerifyEmail?"]';
const userNameValue = 'phenom2405@gmail.com';
const passwordValue = 'Noone1234567890';


class MailPage {
    get unblockButton() {
        return $('//*[text()="Unblock links and images ↗"]')    //need for creating URL in Basic.js
    }

    async setUserNameValue() {
        await wait.setValue(userNameInput, userNameValue)
    }

    async setPasswordValue() {
        await wait.setValue(userPasswordInput, passwordValue)
    }

    async clickSignInButton() {
        await wait.click(signInButton)
    }

    async clickDropdownButton() {
        await wait.click(dropdownMenu)
    }

    async clickDashboardButton() {
        await wait.click(dashboardButton)
    }

    async clickMailButton() {
        await wait.click(mailButton)
    }

    async clickMessageButton() {
        await wait.click(message)
    }

    async clickUnblockButton() {
        await wait.click(unblockButton)
    }


    async futureURLForVerify() {                       //dont working
        await wait.futureURL(unblockButton, 'href')
    }

    async clickVerifyButton() {
        await wait.click(verifyButton)
    }



}

module.exports = new MailPage();