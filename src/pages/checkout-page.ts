import { driverInstance } from "../core/driver";
import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base-pages";

export class CheckoutPage extends BasePage {
    
    private logoutbutton: string = '#logout2';
    private logintab: string = '#login2';
    constructor() {
        super();
    }
    async checkoutPage() {
        
        await ElementActions.clickElement(this.logoutbutton);
    }
    async validateLoginTab() {

        return driverInstance.Page.isVisible(this.logintab);
    }
}
