import { Driver, driverInstance } from "../core/driver";
import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base-pages";

export class Login extends BasePage{
    // Locators
    private logintab: string = '//a[@class="header__link header__link-signin" and @href="/signin?source=navbar"]';
    private username: string = '//input[@id="credentials_username"]';
    private password: string = '//input[@id="credentials_password"]';
    private loginButton: string = '//input[@name="action"]';
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