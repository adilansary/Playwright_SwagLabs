class InventoryPage {
    constructor(page) {
        this.page = page;
        this.productLink = 'a:has-text("Sauce Labs Backpack")'; 
        this.addToCartButton = 'button.btn_primary.btn_inventory'; 
        this.cartButton = 'a.shopping_cart_link'; 
        this.cartItem = '.inventory_item_name'; 
    }

    async clickProduct() {
        await this.page.click(this.productLink);
    }

    async addProductToCart() {
        await this.page.click(this.addToCartButton);
    }

    async navigateToCart() {
        await this.page.click(this.cartButton);
    }

    async verifyProductInCart(productName) {
        const itemNames = await this.page.$$eval(this.cartItem, items => items.map(item => item.innerText));
        return itemNames.includes(productName);
    }
}

module.exports = InventoryPage;
