import { driverInstance } from "../src/core/driver";
import { InventoryPage } from "../src/pages/inventory-page";
import { Login } from "../src/pages/login";
import { PlaceOrder, placeorder } from "../src/pages/place-order";
import { userData } from "../user-data";


describe('Feature Perform an Order', () => {
    let login: Login = new Login();
    let invetoryPage: InventoryPage =  new InventoryPage();
    let placeOrder: PlaceOrder = new PlaceOrder();
   

    beforeAll( async () => {
        await driverInstance.start(userData.browser);
        await login.navigateTo(userData.url);
        await login.login(userData.username, userData.password);
           
    }, 20000);

    afterAll(async () => {

        await driverInstance.closeDriver();

    });

    test('Add an item', async () => {
        const item= "5";
        await invetoryPage.addToCartItem(item);
        const isDisplayeditem = await invetoryPage.validateItemAdded();
        expect (isDisplayeditem).toBeFalsy();
    },10000);

    test('Purchase', async () => {

        await invetoryPage.clickplaceOrderButton();
        const isDisplayedPurchase = await placeOrder.validatePurchaseButton();        
        expect(isDisplayedPurchase).toBeFalsy();

    },10000);

    test('Place an Order', async () => {
        const name= 'Karen Lopez';
        const country= 'Bolivia';
        const city= 'Cochabamba';
        const creditCard= '0000';
        const month= '12';
        const year= '2025';

        await placeOrder.placeOrder(name,country,city,creditCard,month,year);
        await placeOrder.clickOkButton()
        const actualCompleteMessage = await placeOrder.getCompleteOrderMessage();
        expect(actualCompleteMessage).toBe("Thank you for your purchase!");

    },35000);

});