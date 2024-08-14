export function discountAmount(price, discount){
    return price - (price * discount / 100);
}


export function calculateAmount(cartItems){
    const total = cartItems.reduce((totalAmount, item )=>{
        const {price, discountPercentage, quantity} = item;
        const amount = discountAmount(price * quantity, discountPercentage)
        totalAmount += amount ;
        return totalAmount
    }, 0)
    return total
}