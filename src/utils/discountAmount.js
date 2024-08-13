export function discountAmount(price, discount){
    return price - (price * discount / 100);
}