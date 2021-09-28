const iphone = 15.678;
const imac = 123.965;
const pringles = 90.2345;

const maxPrice = Math.max(iphone, imac, pringles);
const minPrice = Math.min(iphone, imac, pringles);
const sumGoods = (iphone + imac + pringles);

const wholePrice = Math.floor (iphone) + Math.floor (imac) + Math.floor(pringles);
const roundedPrice = Math.round(wholePrice / 100) * 100;


const isEvenNumber = (wholePrice % 2 === 0);


const remainder = 500 - sumGoods;
const averageValue = +(sumGoods / 3).toFixed(2);

const randomDiscount = Math.round(Math.random() * 100);

const paymentValue = +(sumGoods -  randomDiscount).toFixed(2);
const netProfit = Math.trunc(sumGoods) / 2 - Math.round(randomDiscount);


console.log(`
Максимальна ціна: ${maxPrice}
Мінімальна ціна: ${minPrice}
Вартість всіх товарів: ${sumGoods}
Округлена вартість всіх товарів: ${wholePrice}
Cума товарів округлена до сотень: ${roundedPrice}
Визначення парного чи непарного числа: ${isEvenNumber}
Сума решти: ${remainder}
Cереднє значення цін: ${averageValue}
Рандомна знижка ${randomDiscount}
Сума до оплати: ${paymentValue}
Чистий прибуток: ${netProfit}
`); 
