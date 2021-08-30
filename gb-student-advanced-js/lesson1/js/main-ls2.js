"use strict"

/**
 * Создаем класс для товаров.

 * Метод возращает div.
 * @param {render} ProductItem.render
 * Метод высчитывает сумму товара
 * @see getSum()
 */

class ProductList {
    constructor(container=".goods-list"){
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();
    }

    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Вобла', price: 900, img: 'img/ryba.jpg'},
            {id: 2, title: 'Чехонь', price: 900, img: 'img/ryba.jpg'},
            {id: 3, title: 'Лещ', price: 550, img: 'img/ryba.jpg'},
            {id: 4, title: 'Сопа', price: 700, img: 'img/ryba.jpg'},
        ];
    }

    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
                block.insertAdjacentHTML("beforeend", item.render());
        }
    }

    getSum(){
        let sum = 0;

        for(let product of this.goods){
            sum += product.price;
        }   
        console.log(sum);
    }
}

/**
 * @param {img} string как указать путь на картинку в локальной папке? В примере была ссылка !
 */

class ProductItem {
    constructor(product, img = 'img/ryba.jpg') {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.img = product.img;
    }

    render() {
        return `<div class="goods-item">
                <img src="${this.img}" alt="ryba">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
            <button class="buy-btn">Купить рыбки</button>           
        </div>`;
    }
}

let list = new ProductList();

list.render();
list.getSum();


