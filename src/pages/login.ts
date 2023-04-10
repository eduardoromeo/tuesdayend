import { Driver, driverInstance } from "../core/driver";
import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base-pages";

export class Login extends BasePage{
    // Locators
    private banner: string = '//a[@class="banner" and @href="/blog/2020-04-13-more-from-tracker-when-you-need-it-most" and @target="_blank" and @rel="noopener noreferrer"];    '
    private logintab: string = '//div[@class="header"]//a[@class="header__link header__link-signin" and @href="/signin?source=navbar"]';
    private username: string = '//input[@id="credentials_username"]';
    private password: string = '//input[@id="credentials_password"]';
    private loginButton: string = '//input[@name="action"]';
    private welcomeTab: string = '#nameofuser';
    constructor(){
        super();
    }
    async login(username: string, password: string) {

        await ElementActions.clickElement(this.banner);
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