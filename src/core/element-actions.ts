import { text } from "stream/consumers";
import { Driver, driverInstance } from "./driver";

export class ElementActions {
    static async clickElement(locator: string) {
        await driverInstance.Page.click(locator);
    }
    static async isLocatorVisible(locator: string) {
        await driverInstance.Page.isVisible(locator);
    }
    static async getText(locator: string) {
        await driverInstance.Page.innerText(locator);
    }
    static async setTex(locator: string, value: string) {
        await driverInstance.Page.fill(locator, value);
    }
    static async wait() {

    await driverInstance.Page.waitForTimeout(5000)
}

}

