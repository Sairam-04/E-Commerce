export function formatINRCurrency(amount) {
    const formatter = new Intl.NumberFormat('en-IN');
    return formatter.format(amount);
}
