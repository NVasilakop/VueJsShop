<template>
    <div class="product">
      <div class="box">
        <article class="media">
          <div class="media-left">
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{product.name}}</strong> 
                <br>
                {{product.price}}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div> 
</template>
<script>
export default {
     props: {
     product: Object
  }
}
</script>