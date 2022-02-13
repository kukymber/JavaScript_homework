class PriceBasket{
    constructor(index, items, costs, amount, basket){
        this.index = index;
        this.items = items;
        this.costs = costs;
        this.amount = amount;
        this.basket = basket;
    }
    getBasket(){
        // наполняет массив данными 
         this.basket = {'индекс': this.index,
                     'название товара': this.item,
                     ' стоимость товара': this.costs,
                     'количество товара':this.amount};
    }
    countBasketPrice(){
        return alert(this.basket);
}}

let drug = new PriceBasket();
drug.getBasket(+prompt("Введите число"), prompt("Введите название товара"),
+prompt("Введите цену товара"), +prompt("Введите кол-во товара"));
alert(drug.countBasketPrice());
