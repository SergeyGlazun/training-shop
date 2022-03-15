
export default class ShopService {
    constructor() {
        this.cart = [];      
    }

    addProduct(data) {
        const product = {
            id: data.id,
            name: data.name,
            price: data.price,
            image: data.image,
            color: data.color,
            size: data.size,
            quantity: 1,
            Id: data.Id
        };

        this.cart.push(product)
    }
    removeProduct(data) {
     
        this.cart = this.cart.filter((item) => item.Id !== data.Id);
    }

    getArr() {
        return this.cart;
    }
}