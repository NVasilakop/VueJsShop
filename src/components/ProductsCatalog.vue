<template>
<div>
 <Helloworld> </Helloworld>
<!-- <ul class="list is-hoverable">
  <li v-for="product in products" :key="product.id">
    {{ product.name }}
  </li>
</ul> --><div class="container">
  <h2>Bootstrap 4 Table with caption</h2>
 <button class="btn btn-alert">Click Me</button>
<table class="table table-striped table-hover table-bordered">
<caption>Product Warehouse</caption>
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Number of Sales</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
  <tbody v-for="product in products" :product="product" :key="product.id">
    <tr>
      <th scope="row">{{product.name}}</th>
      <td></td>
      <td>{{product.price}}</td>
    </tr>
     </tbody>
</table>
</div>
<!-- <Product v-for="product in products" :product="product" :key="product.id"/> -->
 <button @click="addProduct">
   Add Product
 </button>
 <AddProduct v-if="addProductFlag"></AddProduct>
</div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
// import Product from '@/components/Product.vue'
import AddProduct from '@/components/AddProduct.vue'
import retrieveProducts from '@/common/fake-db.js'

export default {
    name:'ProductsCatalog',
    props:{
    },
    components: {
      'Helloworld': HelloWorld,
      // 'Product': Product,
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
    products:retrieveProducts()
   }
      }}
</script>