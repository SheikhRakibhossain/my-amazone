import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {

const loadedProducts = await fetch('products.json');
const products = await loadedProducts.json();
// console.log(products);

const storedCart = getShoppingCart();
// console.log(storedCart)
const saveCart = [];
for( const id in storedCart){

    const addedProduct = products.find( pd => pd.id === id );
    if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct)
    }

}
// if you need to send 2/more thing from cart
// return[products, saveCart]
// another options
// return {products, cart: saveCart}


return saveCart;
}

export default cartProductsLoader;