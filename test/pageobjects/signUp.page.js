class SignUpPage{

    get createAccountButton() {
        return $('[class="btn btn-lg btn-block btn-tertiary bold text-dark Login-create"]');
    }

    async createAccountButtonClick() {
        await this.createAccountButton.click()
    }

    get firstNameInput() {
        return $('#FirstName')
    }

    async firstNameInputValue() {
        await this.firstNameInput.addValue('Volodymyr')
    }

    get lastNameInput() {
        return $('#LastName')
    }

    async lastNameInputValue() {
        await this.lastNameInput.addValue('Volodymyriv')
    }

    get emailInput() {
        return $('#Email')
    }

    async emailInputValue() {
        await this.emailInput.addValue('phenom2405_0mtnh@mailsac.com')
    }

    get phoneNumberInput() {
        return $('#PhoneNumber')
    }

    async phoneNumberInputValue() {
        await this.phoneNumberInput.addValue('+3809312312323')
    }

    get passwordInput() {
        return $('#Password')
    }

    async passwordInputValue() {
        await this.passwordInput.addValue('Password123')
    }

    get confirmPasswordInput() {
        return $('#ConfirmPassword')
    }

    async confirmPasswordValue() {
        this.confirmPasswordInput.addValue('Password123')
    }

    get registerButton() {
        return $('[name="button"]')
    }

    async registerButtonClick() {
        await this.registerButton.click()
    }


}

module.exports = new SignUpPage();