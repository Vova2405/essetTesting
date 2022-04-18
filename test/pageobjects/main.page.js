class MainPage {

    get organizationInput() {
        return $('[formcontrolname="name"]')
    }

    async organisationNameValue() {
        await this.organizationInput.addValue("home");
    };
    
    get createButton() {
        return $('[name="plus"]')
    }

    async createButtonClick() {
        await this.createButton.click()
    }

    get addButton() {
        return $('//*[text()=" Add "]')
    }

    async addButtonClick() {
        await this.addButton.click()
    }

    get assetGroupButton() {
        return $('//*[text()=" Asset Group (from template) "]')
    }

    async assetGroupButtonClick() {
        await this.assetGroupButton.click()
    }

    get capitalContainer() {
        return $('//*[text()=" Capital works "]')
    }

    async capitalContainerClick() {
        await this.capitalContainer.click()
    }

    get saveButton() {
        return $('//*[text()=" Save "]')
    }

    async saveButtonClick() {
        await this.saveButton.click()
    }

    get exitButton() {
        return $('//*[text()=" Exit "]')
    }

    async exitButtonClick() {
        await this.exitButton.click()
    }

    
}
module.exports = new MainPage();