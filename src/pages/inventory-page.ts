import { driverInstance } from "../core/driver";
import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base-pages";

export class InventoryPage extends BasePage {

    private shoppingCartBadge: string = '#cartur';    
    
    constructor() {
        super();
    }

    private itemNameButton = (item: string) => `//h4[@class="card-title"]//a[@href="prod.html?idp_=${item}"]`;
    private itemAddCartButton = (item: string) => `//a[@onclick="addToCart(${item})"]`;
    private itemCartButton =   '#tbodyid';
    private placeOrderButton: string = '//button[@class="btn btn-success"]';
    private totalButton: string= '//h3[@class="panel-title"]';
    

    async addToCartItem(item: string) {

        await ElementActions.clickElement(this.itemNameButton(item));
        await ElementActions.clickElement(this.itemAddCartButton(item));
        await ElementActions.clickElement(this.shoppingCartBadge);
    } 

    async getTotalshopping() {
        
        return await ElementActions.getText(this.totalButton);

    }    

    async deleteItem() {
        
        return await ElementActions.clickElement(this.itemCartButton);
    }

    async clickplaceOrderButton() {
       return await ElementActions.clickElement(this.placeOrderButton);
    }  
    
    async validateItemAdded() {

        return driverInstance.Page.isVisible(this.itemCartButton);
    }
}
