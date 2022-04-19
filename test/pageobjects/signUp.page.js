const wait = require('../pageobjects/waitUntil.page');
const createAccountButton = `[class="btn btn-lg btn-block btn-tertiary bold text-dark Login-create"]`;
const firstNameInput = '#FirstName';
const lastNameInput = '#LastName';
const emailInput = '#Email';
const phoneNumberInput = '#PhoneNumber';
const passwordInput = '#Password';
const confirmPasswordInput = '#ConfirmPassword';
const registerButton = '[name="button"]';
const firstName = 'Volodymyr';
const lastName = 'Volodymyriv';
const emailValue = 'phenom2405_ulnwq@mailsac.com';
const phoneNumberValue = '+3809712312311';
const passwordValue = 'Password123';
const confirmPasswordValue = 'Password123';

class SignUpPage{

   
    async clickCreateAccountButton() {
        await wait.click(createAccountButton)
    }

    async setFirstNameValue() {
        await wait.setValue(firstNameInput, firstName)
    }

    async setLastNameValue() {
        await wait.setValue(lastNameInput,lastName)
    }

    async setEmailValue() {
        await wait.setValue(emailInput, emailValue)
    }

    async setPhoneNumberValue() {
        await wait.setValue(phoneNumberInput, phoneNumberValue)
    }

    async setPasswordValue() {
        await wait.setValue(passwordInput, passwordValue)
    }

    async setConfirmPasswordValue() {
        await wait.setValue(confirmPasswordInput, confirmPasswordValue)
    }


    async clickRegisterButton() {
        await wait.click(registerButton)
    }


}

module.exports = new SignUpPage();