"use strict"


const API = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/"

class ProductList {
    constructor(container=".goods-list"){
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this.render()
            });
        this.render();
    }

    _getProducts(){
        return fetch(`${API}/catalogData.json`)
        .then(result =>  result.json())
        .catch(error => {
            console.log(error);
        });
    }

    getSum(){
        let sum = 0;

        for(let product of this.goods){
            sum += product.price;
        }   
        console.log(sum);
    }

    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
                block.insertAdjacentHTML("beforeend", item.render());
        }
    }    
}


class ProductItem {
    constructor(product, img = 'img/ryba.jpg') {
        this.id = product.id_product;
        this.title = product.product_name;
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


