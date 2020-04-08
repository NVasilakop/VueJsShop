<template>
<div>
 <Helloworld> </Helloworld>
<!-- <ul class="list is-hoverable">
  <li v-for="product in products" :key="product.id">
    {{ product.name }}
  </li>
</ul> -->
<Product v-for="product in products" :product="product" :key="product.id"/>
 <button @click="addProduct">
   Add Product
 </button>
 <AddProduct v-if="addProductFlag"></AddProduct>
</div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Product from '@/components/Product.vue'
import AddProduct from '@/components/AddProduct.vue'

export default {
    name:'ProductsCatalog',
    props:{
    },
    components: {
      'Helloworld': HelloWorld,
      'Product': Product,
      'AddProduct': AddProduct
      },
    // props:{
    //   products:Object
    // },
  methods:{
    addProduct: function() {
      this.addProductFlag = true;
    }
  },
   data(){
     return {
    addProductFlag:false,
    products:[{id:1,name:'Cheese',price:10},
    {id:2,name:'Ham',price:6},
    {id:3,name:'Burger',price:4}
     ]
   }
      }}
</script>