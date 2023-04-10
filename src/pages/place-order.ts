import { Driver, driverInstance } from "../core/driver";
import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base-pages";

export class PlaceOrder extends BasePage{
    // Locators
    private name: string = '#name';
    private country: string = '#country';
    private city: string = '#city';
    private creditCard: string = '#card';
    private month: string = '#month';
    private year: string = '#year';
    private purchaseButton: string = '//button[@onclick="purchaseOrder()"]';
    private mesaggePurchase: string = '//h2[text()="Thank you for your purchase!"]';
    private okButton: string= '//button[@class="confirm btn btn-lg btn-primary"]';
    
    constructor(){
        super();
    }
    async placeOrder(name: string, country: string, city: string, creditCard: string, month: string, year: string) {

        await ElementActions.setTex(this.name, name);
        await ElementActions.setTex(this.country, country );
        await ElementActions.setTex(this.city, city );
        await ElementActions.setTex(this.creditCard, creditCard );
        await ElementActions.setTex(this.month, month );
        await ElementActions.setTex(this.year, year );
        await ElementActions.clickElement(this.purchaseButton);    
    }

    async clickOkButton() {

        return await ElementActions.clickElement(this.okButton);
    }

    async validatePurchaseButton() {

        return driverInstance.Page.isVisible(this.purchaseButton);
    }

    async getCompleteOrderMessage() {

        return await driverInstance.Page.innerText(this.mesaggePurchase);
    }
}
export const placeorder = new PlaceOrder();