"use strict"

class Basket{
    constructor(container=".products-cart"){
        this.container = container;
        this.goods = [];
//        this.allProducts = [];
        this._clickBasket();
        this._getBasketItem()
            .then(data => {
                this.goods = [...data.contents];
                this.render()
            });
        this.render();        
    }

    _clickBasket(){
        document.querySelector(".cart-button").addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle('invisible');
        });
    }
    

    _getBasketItem(){
        return fetch(`${API}/getBasket.json`)
        .then(result =>  result.json())
        .catch(error => {
            console.log(error);
        });
    }

    deletefromBasket(){

    }

    render(){
        const block = document.querySelector(this.container);
        for (let product of this.goods){
            const basketItem = new BasketItem();
            block.insertAdjacentHTML('beforeend', basketItem.render(product));
        }
        
    }

}

class BasketItem{
         
    render(product){
        return `<div class="basket-item" data-id="${product.id_product}">
                <div class="product-left">
                <img class="product-img" scr="${product.img}" alt="img">
                <div class="prodcut-desc">
                <p class="title">${product.product_name}</p>
                <p class="quantity">Quantity: ${product.quantity}</p>
            <p class="price">$ ${product.price} each</p>
            </div>
            </div>
            <div class="product-right">
                <p class="product-price">$${product.quantity * product.price}</p>
                <button class="delete-button" data-id="${product.id_product}">&times;</button>
            </div>
            </div>`;
    }
}

list.render();
new Basket();
new BasketItem();

