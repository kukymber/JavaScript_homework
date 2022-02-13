// var basket = [[1, "булка", 15, 2],[2, "колач", 45, 1],[3, "хлеб", 25, 3],[4, "печенье", 65, 1],[5, "сырник", 15, 5]];
class PriceBasket{
    constructor(index, items, costs, amount, x){
        this.index = index;  // сделать автоинкрементом
        this.items = items;
        this.costs = costs;
        this.amount = amount;
        this.x = x;
    }
    askMore(x){
        if (x === '-1'){
            CountPrice.countBasketPrice;// вызвать функцию подсчета 
        } else{
            GetBasket();// вызвать функцию запроса товаров
        }
        }
}

class CountPrice extends PriceBasket{
    constructor(index, items, costs, amount){
        super(index, items, costs, amount)
    }
    countBasketPrice(){
    var countAll = 0;
    for (let item of basket){
        alert(item[1]);  // выводит название товара
        alert(item[2] * item[3]);  // выводит сумму одного товара * кол-во
        countAll += item[2] * item[3];
        alert(countAll);  // считает всю корзину 
        }
    }
}

class GetBasket extends PriceBasket{
    constructor(index, items, costs, amount){
        super(index, items, costs, amount)
    }
    getBasket(index, items, costs, amount){
       // наполняет массив данными 
        basket = {};  // 
        databasket = {};
        databasket.push(index), databasket.push(items), databasket.push(costs), databasket.push(amount);
        basket.push(databasket);
    }
}

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
    +prompt("Введите цену товара"), +prompt("Введите кол-во товара"), prompt())
 const getbask = new GetBasket();
  alert(chris.askMore());
 alert(chris);
 alert(getbask.getBasket());