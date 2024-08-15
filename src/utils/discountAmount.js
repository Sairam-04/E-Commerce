export function discountAmount(price, discount){
    return Math.round(price - (price * discount / 100));
}


export function calculateAmount(cartItems){
    const total = cartItems.reduce((totalAmount, item )=>{
        const {price, discountPercentage, quantity} = item;
        const amount = discountAmount(price * quantity, discountPercentage)
        totalAmount += amount ;
        return Math.round(totalAmount)
    }, 0)
    return total
}