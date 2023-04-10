import { Browser, BrowserContext, BrowserType, chromium, firefox, Page, webkit } from "playwright";

export class Driver {
    //context: Promise<BrowserContext>;
    private page!: Page;
    private browser!: Browser;
    private context!:BrowserContext;
    private static driver: Driver;
    static Page: any;

    private constructor(){}

    async start(browserName: string = 'chrome') {
        const browserInstance: BrowserType<{}> = await this.browserFactory(browserName);;
        this.browser = await browserInstance.launch(
        {
            headless: false,
        }
        );
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    }

    get Page(): Page {
        return this.page;
    }
    static getInstance() {
        if(typeof this.driver === 'undefined') {
            this.driver = new Driver();
        }
        return this.driver;
    }
    async isElementDisplayed(locator: string) {
        return await this.page.isVisible(locator, {
            timeout: 5000
        });
    }
    async closeDriver(){
        await this.context.close();
        await this.browser.close();      
    }

    private async browserFactory(browserName: string): Promise<BrowserType<{}>>{
        const browsers: {[key: string]: BrowserType<{}>} = {
            chrome: chromium,
            firefox: firefox,
            webkit: webkit
        }
        if(!browsers.hasOwnProperty(browserName)) {
            throw new Error(`Browser "${browserName}" is not a valid input`);
        }
        return browsers[browserName];
    }
}
export const driverInstance =  Driver.getInstance();

