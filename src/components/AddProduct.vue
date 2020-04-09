<template>
    <div>
        <Product></Product>
    </div>
</template>

<script>
import Product from '@/components/Product.vue'

export default {
    name:'AddProduct',
    components:{
     'Product': Product,
    }
}
</script>