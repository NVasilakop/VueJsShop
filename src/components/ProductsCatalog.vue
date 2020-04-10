<template>
<div>
 <Helloworld> </Helloworld>
<!-- <ul class="list is-hoverable">
  <li v-for="product in products" :key="product.id">
    {{ product.name }}
  </li>
</ul> --><div class="container">
  <h2>Products</h2>
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

 <b-button v-b-modal.modal-1 @click="addProduct" data-toggle="modal" data-target="#modalRegisterForm">
   Add Product
 </b-button>
<div class="modal fade" id="modalRegisterForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Add Product</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="refreshFields">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body mx-3">
        <div class="md-form mb-5">
          <!-- <i class="fas fa-user prefix grey-text"></i> -->
           <b-badge>Product Name</b-badge>
          <input type="text" id="orangeForm-name" class="form-control validate" v-model="productName">
          <!-- <label data-error="wrong" data-success="right" for="orangeForm-name">Your name</label> -->
        </div>
        <div class="md-form mb-5">
          <!-- <i class="fas fa-envelope prefix grey-text"></i> -->
          <b-badge>Price</b-badge>
          <input type="email" id="orangeForm-email" class="form-control validate" v-model="productPrice">
          <!-- <label data-error="wrong" data-success="right" for="orangeForm-email">Your email</label> -->
        </div>

        <div class="md-form mb-4">
          <!-- <i class="fas fa-lock prefix grey-text"></i> -->
          <b-badge>Product Description</b-badge>
          <input type="password" id="orangeForm-pass" class="form-control validate">
          <!-- <label data-error="wrong" data-success="right" for="orangeForm-pass">Your password</label> -->
        </div>

      </div>
      <div class="modal-footer d-flex justify-content-center">
        <b-button variant="danger" @click="pushProduct">Add Product</b-button>
      </div>
    </div>
  </div>
</div>

<!-- <div class="text-center">
  <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalRegisterForm">Launch
    Modal Register Form</a>
</div> -->

 <!-- <AddProduct v-if="addProductFlag"></AddProduct> -->
</div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
// import Product from '@/components/Product.vue'
// import AddProduct from '@/components/AddProduct.vue'
import retrieveProducts from '@/common/fake-db.js'

export default {
    name:'ProductsCatalog',
    props:{
    },
    components: {
      'Helloworld': HelloWorld,
      // 'Product': Product,
      // 'AddProduct': AddProduct
      },
    // props:{
    //   products:Object
    // },
  methods:{
    addProduct: function() {
      this.addProductFlag = true;
      console.log(this.addProductFlag);
    },
    pushProduct: function(){ 
      this.products.push({name:this.productName,price:this.productPrice})
      console.log(this.products)
    },
    refreshFields: function(){
      this.productName = '';
      this.productPrice = '';
    }
  },
   data(){
     return {
    addProductFlag:false,
    products:retrieveProducts(),
    productName:'',
    productPrice:'',
   }
      }}
</script>