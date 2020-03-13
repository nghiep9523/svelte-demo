<style lang="scss">
  @import "./Products.scss";
</style>

<script>
  export let imgSrc;
  export let price;
  export let name;
</script>

<div class="product-item">
  <img src="{imgSrc}" alt="product" />
  <div class="product-item__name">{name}</div>
  <div class="product-item__price">Price: {price}</div>
</div>
