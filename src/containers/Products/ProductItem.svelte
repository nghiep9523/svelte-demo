<style lang="scss">
  @import "./Products.scss";
</style>

<script>
  import { onDestroy } from "svelte";
  import { cart } from "../../store/cart";

  export let item;

  const addItemToCart = () => cart.addItemToCart(item);
</script>

<div class="product-item">
  <img src="{item.imgSrc}" alt="product" />
  <div class="product-item__name">{item.name}</div>
  <div class="product-item__price">Price: {item.price} USD</div>
  <div class="product-item__button" on:click="{addItemToCart}">
    <span>Add to cart</span>
  </div>
</div>
