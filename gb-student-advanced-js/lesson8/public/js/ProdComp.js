const product = {
    props: ['img', 'product'],
    template: `<div class="item">
                    <a href="#" class="product">
                        <img class="product-img" :src="img" alt="product photo">
                        <div class="product-text-box">
                            <p class="product-text">{{ product.product_name }}</p>
                            <p class="product-price">{{ product.price }} $</p>
                           
                        </div>
                    </a>
                    <div class="box-add">                       
                        <a class="add" href="#" @click="$root.$refs.cart.addProduct(product)">    
                        <img class="add-img" src="img/cart-add.svg" alt="cart-img">
                        Add to cart</a> 
                    </div>   
                    </div>`
}

const products = {
    components: {product},
    data () {
        return {
            catalogUrl: '/catalogData.json',
            products: [],
            imgCatalog: '/lesson8/public/img/2.jpg',
            filtered: []
        }
    },
    mounted () {
        console.log (this.$root.$refs)

        this.$parent.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
        this.$parent.getJson(`getProducts.json`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
                console.log (this.filtered)
            });
    },
    methods: {
        filter (val) {
			let regExp = new RegExp (val, 'i');
            this.filtered = this.products.filter (el => regExp.test (el.product_name))
        }
    },
    template: `
    <div class="products">
        <product 
        v-for="product of filtered" 
        :key="product.id_product"
        :img="imgCatalog"
        :product="product"></product>
    </div>
    `
}




// template: `<div class="item">
// <a href="#" class="product">
//     <img class="product-img" :src="img" alt="product photo">
//     <div class="product-text-box">
//         <p class="product-text">{{ product.product_name }}</p>
//         <p class="product-price">{{ product.price }} $</p>
       
//     </div>
// </a>
// <div class="box-add">                       
//     <a class="add" href="#">    
//     <img class="add-img" src="img/cart-add.svg" alt="cart-img">
//     <button class="ad" @click="$root.$refs.cart.addProduct(product)"></button>Add to cart</a> 
// </div>   
// </div>`