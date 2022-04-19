class WaitUntill{

    async getElement(element) {
        return await $(element);
    }
async waitUntilClickable(element, timeout) {
        await browser.waitUntil(async () => {
            return (await this.getElement(element)).isClickable();
        }, {timeout: timeout});
    }

    async futureURL(element){
        await (await this.getElement(element)).getAttribute('href'); //dont working!!!!!!!!!!!
    }

async waitUntilDisplayed(element, timeout) {
        await browser.waitUntil(async () => {
            return (await this.getElement(element)).isDisplayed();
        }, {timeout: timeout});
    }
async click(element) {
        await this.waitUntilClickable(element);
        await (await this.getElement(element)).click();
    }
async setValue(element, value) {
        await this.waitUntilDisplayed(element);
        await (await this.getElement(element)).setValue(value);
    }

    async waitUntillSetValue(element, value) {
        await (await this.getElement(element)).setValue(value);
    }

}
module.exports = new WaitUntill();