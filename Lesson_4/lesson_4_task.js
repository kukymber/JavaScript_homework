// var basket = [[1, "булка", 15, 2],[2, "колач", 45, 1],[3, "хлеб", 25, 3],[4, "печенье", 65, 1],[5, "сырник", 15, 5]];
class PriceBasket{
    constructor(index, items, costs, amount, basket){
        this.index = index;  // сделать автоинкрементом
        this.items = items;
        this.costs = costs;
        this.amount = amount;
        this.basket = basket;
    }
    getBasket(databasket){
        // наполняет массив данными 
         this.basket = {};  // 
         databasket = {'индекс': this.index,
                     'название товара': this.item,
                     ' стоимость товара': this.costs,
                     'количество товара':this.amount};
         this.basket.databasket = databasket;
     }
}

class CountPrice extends PriceBasket{
    constructor(basket){
        super(basket)
    }
    countBasketPrice(){
        alert(this.basket);
}}

// class GetBasket extends PriceBasket{
//     constructor(index, items, costs, amount,basket){
//         super(index, items, costs, amount, basket)
//     }
//     getBasket(databasket){
//        // наполняет массив данными 
//         this.basket = {};  // 
//         databasket = {'индекс': this.index,
//                     'название товара': this.item,
//                     ' стоимость товара': this.costs,
//                     'количество товара':this.amount};
//         this.basket.databasket = databasket;
//     }
// }

// class AskMore extends PriceBasket{
//     // нужно ли продолжать цикл наполнение или вывести результат
//     constructor()
//     askMore(x){
//     if (x === '-1'){
//         CountPrice;// вызвать функцию подсчета 
//     } else{
//         GetBasket;// вызвать функцию запроса товаров
//     }
//     }
// }

const chris = new PriceBasket(+prompt("Введите число"), prompt("Введите название товара"),
    +prompt("Введите цену товара"), +prompt("Введите кол-во товара"))
 const countpr = new CountPrice();

 function askMore(x){
    if (x === '-1'){
        return countpr.countBasketPrice();// вызвать функцию подсчета 
    } else{
        return chris.getBasket();;// вызвать функцию запроса товаров
    }
}

alert(askMore(prompt()));