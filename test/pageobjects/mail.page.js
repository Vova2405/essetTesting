class MailPage {

    get userNameInput() {
        return $('[name="username"]')
    }
    async userNameInputValue() {
        await this.userNameInput.addValue('phenom2405@gmail.com')
    }

    get userPasswordInput() {
        return $('[name="password"]')
    }

    async userPasswordInputValue() {
        await this.userPasswordInput.addValue('Noone1234567890')
    }

    get signInButton() {
        return $('[ng-disabled="disableSubmission"]')
    }

    async signInButtonClick() {
        await this.signInButton.click()
    }

    get dropdownMenu() {
        return $('[class="dropdown-toggle"]')
    }

    async dropdownMenuClick() {
        await this.dropdownMenu.click()
    }

    get dashboardButton() {
        return $('[href="/dashboard"]')
    }

    async dashboardButtonClick() {
        await this.dashboardButton.click()
    }



    get mailButton() {
        return $('//*[text()="phenom2405_0mtnh@mailsac.com"]')
    }

    async mailButtonClick() {
        await this.mailButton.click()
    }

    get message() {
        return $('//strong[contains(text(), "info@assetaccountant.com.au") and @class]')
    }

    async messageClick() {
        await this.message.click()
    }

    get unblockButton() {
        return $('//*[text()="Unblock links and images ↗"]')
    }

    async unblockButtonClick() {
        await this.unblockButton.click()
    }

    async futureURL() {
        await this.unblockButton.getAttribute('href')
    }


    get verifyButton() {
        return $('[href*="https://dev.auth.faktored.com/Account/Authentication/VerifyEmail?"]')
    }

    async verifyButtonClick() {
        await this.verifyButton.click()
    }

}

module.exports = new MailPage();