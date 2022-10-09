import { getStoredCart } from "../utilities/fakedb";

export const productAndCartLoder = async () => {
    //GetPorducts
    const porductsData = await fetch('products.json');
    const porducts = await porductsData.json();

    //getCart
    const savedCart = getStoredCart();
    const initialCart = []
    // console.log(porducts);
    for (const id in savedCart) {
        const addedProduct = porducts.find(product => product.id === id);
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }

    return { porducts: porducts , initialCart:initialCart };
}