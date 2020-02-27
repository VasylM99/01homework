const bread = 15.678;
const biscuit = 90.2345;
const candy = 123.965;

let maxPrice = Math.max(bread,biscuit,candy);
console.log("Используя встроенный объект Math – выведите максимальное число -" +maxPrice);
document.write("Используя встроенный объект Math – выведите максимальное число -" +maxPrice +'<br>')

let minPrice = Math.min(bread,biscuit,candy);
console.log("Используя встроенный объект Math – выведите минимальное число -" +minPrice);
document.write("Используя встроенный объект Math – выведите минимальное число -" +minPrice +'<br>' )

let sumCommodity = (bread+biscuit+candy);
console.log("Сложите стоимость всех товаров, поместите её в переменную и выведите эту сумму-" +sumCommodity);
document.write("Сложите стоимость всех товаров, поместите её в переменную и выведите эту сумму-" +sumCommodity +'<br>')

let minSumCommodity = Math.floor(Math.trunc(bread)+Math.trunc(biscuit)+Math.trunc(candy));
console.log("Отбросьте копейки у всех товаров и затем – сложите целую часть стоимости каждого товара между собой. Округление использовать в МЕНЬШУЮ сторону.-" +minSumCommodity );
document.write("Отбросьте копейки у всех товаров и затем – сложите целую часть стоимости каждого товара между собой. Округление использовать в МЕНЬШУЮ сторону.-" +minSumCommodity +'<br>')

let maxSumCommodity = Math.ceil(sumCommodity/100)*100;
console.log('Выведите сумму товаров округленную до сотен. (Например если получилось 260, то выведите 300)-' +maxSumCommodity);
document.write("Выведите сумму товаров округленную до сотен. (Например если получилось 260, то выведите 300)-" +maxSumCommodity +'<br>')

let paritty = Math.floor(sumCommodity);
if (paritty % 2 === 0 ){
    let result = true;
} else {
    result = false;
}
console.log('Выведите булевое значение: является сумма всех товаров (округленная в меньшую сторону) четным или нечетным числом?-' +result)
document.write('Выведите булевое значение: является сумма всех товаров (округленная в меньшую сторону) четным или нечетным числом?-' +result +'<br>')

let remainder = (500-sumCommodity);
console.log('Выведите сумму сдачи, при оплате всех товаров (без округления), если клиент платит 500 грн.-' +remainder +'грн');
document.write('Выведите сумму сдачи, при оплате всех товаров (без округления), если клиент платит 500 грн.-' +remainder +'грн' +'<br>')

let averageValue = sumCommodity/3;
console.log('Выведите среднее значение цен, округленное до второго знака после запятой-' +averageValue.toFixed(2) );
document.write('Выведите среднее значение цен, округленное до второго знака после запятой-' +averageValue.toFixed(2) +'<br>')

let discount = Math.random();
let sumDiscount = (sumCommodity*discount);
let discountPay = sumCommodity - sumDiscount;
console.log('Сделайте клиенту случайную скидку и выведите сумму к оплате округленную до 2 знака после запятой-' +discountPay.toFixed(2));
document.write('Сделайте клиенту случайную скидку и выведите сумму к оплате округленную до 2 знака после запятой-' +discountPay.toFixed(2) +'<br>')
let income = (sumCommodity/2) - sumDiscount;
console.log("Выведите чистую прибыль, если клиент заплатил со скидкой и себестоиомсть товаров ровно в два раза ниже их цены-" +income);
document.write("Выведите чистую прибыль, если клиент заплатил со скидкой и себестоиомсть товаров ровно в два раза ниже их цены-" +income +'<br>')