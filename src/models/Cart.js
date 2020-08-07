class Cart {
    constructor() {
        this.items = {};

       
    }
    addItem(id) {
        if (this.items[id] !== undefined){
            this.items[id] += 1;
        }
        else {
            this.items[id] = 1;
        }
        return true
    }
}

export default Cart;