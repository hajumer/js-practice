//Project: Shopping Basket Calculator
const laptopPrice = 650;
const mousePrice = 25;
const keyBoardPrice = 45;

const total = laptopPrice + mousePrice + keyBoardPrice;
const discountPrice = total * 0.1;
const FinalPrice = total - discountPrice;

console.log(`Original Price :£${total}`);
console.log(`Discount Price :£${discountPrice}`);
console.log(`Final Price :£${FinalPrice}`);
