// + - * / %

var num1 = 20;
var num2 = 10;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

var answer = num1 > num2;
console.log(answer);
var answer = num1 < num2;
console.log(answer);

var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;
console.log("Discount percentage is :", discountPercent);
displayDiscountPercentage = Math.round(discountPercent);
console.log(displayDiscountPercentage + "% off");

var result = listingPrice > sellingPrice;
console.log(result);
console.log(typeof result);
