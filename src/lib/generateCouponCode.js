export const generateCouponCode = (title, expiryDate) => {

    // Convert title to uppercase and removing spaces
    const uppercaseTitle = title.toUpperCase().replace(/\s+/g, "");

    // Format the expiry date to DDMMYYYY
    const formattedDate = expiryDate.split('-').reverse().join('');

    // Format the coupon code as "TITLE-EXPIRYDATE"
    const couponCode = `${uppercaseTitle}-${formattedDate}`;

    return couponCode;
}