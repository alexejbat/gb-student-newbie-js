const search = {
    data () {
        return {
            userSearch: ''
        }
    },
    template: `
                <form action="#" class="search-form" @submit.prevent='$parent.$refs.products.filter(userSearch)'>
                    <input type="text" class="search-field" v-model='userSearch'>
                    <button class="btn-search" type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                </form>
    
    `
}


{/* <input class="search__items" type="Search" placeholder="Seacrh for items..." aria-label="search">
                    <button class="seacrh__button" type="submit">
                        <i class="fas fa-search"></i>
                    </button> */}


{/* <form action="#" class="search-form" @submit.prevent='$parent.$refs.products.filter(userSearch)'>
<input type="text" class="search-field" v-model='userSearch'>
<button class="btn-search" type="submit">
    <i class="fas fa-search"></i>
</button>
</form> */}