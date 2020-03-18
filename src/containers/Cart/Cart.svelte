<style lang="scss">
  @import "./Cart.scss";
</style>

<script>
  import Header from "../../components/Header/Header.svelte";
  import CartItem from "./CartItem.svelte";
  import { cart } from "../../store/cart";

  const clearCart = () => cart.clearCart();
</script>

<Header showProducts />
<div class="cart__container">
  <div class="cart__title">Your Cart</div>
  {#if $cart.items.length === 0}
    <div class="cart__empty">Your Cart is empty</div>
  {:else}
    <div>
      {#each $cart.items as item}
        <CartItem {item} count="{$cart.itemCount[item.id]}" />
      {/each}
    </div>
    <div class="cart__clear-btn" on:click="{clearCart}">Clear Cart</div>
  {/if}
</div>
