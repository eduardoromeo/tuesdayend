import { Driver, driverInstance } from "../core/driver";
import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base-pages";

export class Login extends BasePage{
    // Locators
    private logintab: string = '#login2';
    private username: string = '#loginusername';
    private password: string = '#loginpassword';
    private loginButton: string = '//button[@class="btn btn-primary"][text()="Log in"]';
    private welcomeTab: string = '#nameofuser';
    constructor(){
        super();
    }
    async login(username: string, password: string) {

        await ElementActions.clickElement(this.logintab);
        await ElementActions.setTex(this.username, username);
        await ElementActions.setTex(this.password, password );
        await ElementActions.clickElement(this.loginButton);
        await ElementActions.wait();
        
    }

    async validatelogin() {

        return driverInstance.Page.isVisible(this.welcomeTab);
    }
}
export const login = new Login ();