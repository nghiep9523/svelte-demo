<style lang="scss">
  @import "./Products.scss";
</style>

<script>
  import { onMount, onDestroy } from "svelte";
  import ProductItem from "./ProductItem.svelte";
  import { products } from "../../store/products";
  import Header from "../../components/Header/Header.svelte";
</script>

<div class="products-container">
  <Header showCart="{true}" />
  <div class="products-list">
    {#each $products as product}
      <ProductItem item="{product}" />
    {/each}
  </div>
</div>
