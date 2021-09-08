"use strict"

const API = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/";

const app = new Vue({
    el: '#app',
    data: {
        userSearch: '',
        showcart: false,
        catalogUrl: '/catalogData.json',
        cartUrl: '/getBasket.json',
        cartItems: [],
        filtered: [],
        imgCart: 'img/ryba.jpg',
        products: [],
        imgProduct: 'img/ryba.jpg',
        error: false
    },

    methods: {
        getJson(url){
            return fetch(url)
                .then(result =>  result.json())
                .catch(error => console.log(error))     
        },

        addProduct(item){
            this.getJson(`${API}/addtoBasket.json`)
                .then(data => {
                    if(data.result === 1){
                        let find = this.cartItems.find(el => el.id_product === item.id_product);
                        if(find){
                            find.quantity++;
                        } else {
                            const prod = Object.assign({quantity: 1}, item);
                            this.cartItems.push(prod)
                        }
                    }
                })
        },

        remove(item){
            this.getJson(`${API}/addtoBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        if(item.quantity > 1){;
                            item.quantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    }    
                })       
        },

        filter(){
            let regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        },
//    },
        mounted(){
            this.getJson(`${API + this.cartUrl}`)
                .then(data => {
                    for (let item of data.contents) {
                        this.cartItems.push(item);
                    }
                });
            this.getJson(`${API + this.catalogUrl}`)   
                .then(data => {
                    for (let item of data) {
                        this.$data.products.push(item);
                        this.$data.filtered.push(item);
                    } 
                });     
            this.getJson(`getProducts.json`)   
                .then(data => {
                    for (let item of data) {
                        this.products.push(item);
                        this.filtered.push(item);    
                    }
                })  
                
        }
    }

});


//     class ProductList {
//     constructor(container=".goods-list"){
//         this.container = container;
//         this.goods = [];
//         this.allProducts = [];
//         this._getProducts()
//             .then(data => {
//                 this.goods = [...data];
//                 this.render()
//             });
//         this.render();
//     }

//     _getProducts(){
//         return fetch(`${API}/catalogData.json`)
//         .then(result =>  result.json())
//         .catch(error => {
//             console.log(error);
//         });
//     }

//     getSum(){
//         let sum = 0;

//         for(let product of this.goods){
//             sum += product.price;
//         }   
//         console.log(sum);
//     }

//     render(){
//         const block = document.querySelector(this.container);
//         for(let product of this.goods){
//             const item = new ProductItem(product);
//                 block.insertAdjacentHTML("beforeend", item.render());
//         }
//     }    
// }


// class ProductItem {
//     constructor(product, img = 'img/ryba.jpg') {
//         this.id = product.id_product;
//         this.title = product.product_name;
//         this.price = product.price;
//         this.img = product.img;
//     }

//     render() {
//         return `<div class="goods-item">
//                 <img src="${this.img}" alt="ryba">
//                 <h3>${this.title}</h3>
//                 <p>${this.price}</p>
//             <button class="buy-btn">Купить рыбки</button>           
//         </div>`;
//     }
// }

// let list = new ProductList();

// list.render();
// list.getSum();