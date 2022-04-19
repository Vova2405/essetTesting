const wait = require('../pageobjects/waitUntil.page');
const organizationInput = '[formcontrolname="name"]';
const createButton = '[name="plus"]';
const addButton = '//*[text()=" Add "]';
const assetGroupButton = '//*[text()=" Asset Group (from template) "]';
const capitalContainer = '//*[text()=" Capital works "]';
const saveButton = '//*[text()=" Save "]';
const exitButton = '//*[text()=" Exit "]';
const organizationName = 'Home';




class MainPage {

    async setOrganisationNameValue() {
        await wait.setValue(organizationInput, 'home')  //dont wokr with variable organizationName
    };

    async clickCreateButton() {
        await wait.click(createButton)
    }

    async clickAddButton() {
        await wait.click(addButton)
    }

    async clickAssetGroupButton() {
        await wait.click(assetGroupButton)
    }

    async clickCapitalButton() {
        await wait.click(capitalContainer)
    }

    async clickSaveButton() {
        await wait.click(saveButton)
    }

    async clickExitButton() {
        await wait.click(exitButton)
    }

}
module.exports = new MainPage();