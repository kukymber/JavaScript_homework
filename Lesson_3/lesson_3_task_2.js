var basket = [[1, "булка", 15, 2],[2, "колач", 45, 1],[3, "хлеб", 25, 3],[4, "печенье", 65, 1],[5, "сырник", 15, 5]];
function countBasketPrice(){
var countAll = 0;
for (let items of basket){
    alert(items[1]);  // выводит название товара
    alert(items[2] * items[3]);  // выводит сумму одного товара * кол-во
    countAll+=items[2] * items[3]  // считает всю корзину 
}
alert(countAll);}
countBasketPrice();