const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

let app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        imgCatalog: 'img',
        cartShown: false,
        userSearch: '',
        filtered: [],
        error: [],
        nav:[]
    },
    components: {cart, products, search},
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
        },
        addProduct(product){
            console.log(product.id_product);
        },
        
    },
    mounted(){
        console.log (this)
    }
})

