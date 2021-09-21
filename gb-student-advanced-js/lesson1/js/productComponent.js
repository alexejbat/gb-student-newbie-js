"use strict"

Vue.component('products', {
    props: ['products', 'img'],
    template: `<div class="products"
                <product v-for="item of products"
                :key="item.id_product"
                :img="img"
                :product="item"></product>
                </div>`
});

Vue.component( 'product', {
    props: ['product', 'img'],
    template: `
                <div class="product"
                    <img scr="img" alt="img>
                    <div class="product-desc"
                        <h3>{{ product.product_name }}</h3>
                        <p>{{ product.price}}</p>
                        <button class="buy-button" @click="$parent.$emit('add-product', product)">Купить</button>
                    </div>
                </div>`
})