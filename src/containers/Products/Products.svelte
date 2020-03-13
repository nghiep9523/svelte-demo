<style lang="scss">
  @import "./Products.scss";
</style>

<script>
  import ProductItem from "./ProductItem.svelte";
  const pepe1 = "assets/pepe1.jpg";
  const pepe2 = "assets/pepe2.jpg";
  const pepe3 = "assets/pepe3.jpg";
  const pepe4 = "assets/pepe4.png";
</script>

<div class="products-container">
  <div class="products-title">Product List</div>
  <div class="products-list">
    <ProductItem imgSrc="{pepe1}" name="Pepe 1" price="{90.99}" />
    <ProductItem imgSrc="{pepe2}" name="Pepe 2" price="{91.99}" />
    <ProductItem imgSrc="{pepe3}" name="Pepe 3" price="{92.99}" />
    <ProductItem imgSrc="{pepe4}" name="Pepe 4" price="{93.99}" />
  </div>
</div>
