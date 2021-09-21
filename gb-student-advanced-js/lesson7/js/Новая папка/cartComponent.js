"use strict"

Vue.component('cart', {
    props: ['cartItems', 'img', 'visibility'],
    template: `<div class="cart-block" v-show="visibility"
                <goods-item v-for="item of cartItems"
                :key="item.id_product"
                :img="img"
                :cart-item="item"></product-item>
                </div>`
});

Vue.component( 'cart-items', {
    props: ['img', 'cartItem'],
    template: `
                <div class="goods-item"
                    <img :scr="img" alt="img>
                    <div class="product-desc"
                        <div class="title">{{ cartItem.product_name }}</div>
                        <div class="quantity">Quantity: {{ cartItem.quantity }}</div>
                        <div class="product-single-price">$ {{ cartItem.price}} each</p>
                    </div>
                    <div class="product-right">
                        <p class="product-price">$ {{ cartItem.quantity * cartItem.price}</p>
                        <button class="delete-button" @click="$root.remove(cartItem)">&times;</button>
                    </div>
                </div>
                `
})