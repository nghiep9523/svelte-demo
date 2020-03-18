<style lang="scss">
  @import "./Header.scss";
</style>

<script>
  import { Link } from "svelte-routing";
  import { cart } from "../../store/cart";

  const image = "assets/pepe.png";
  export let showCart = false;
  export let showProducts = false;
</script>

<div class="header">
  <img src="{image}" alt="pepe" />
  <Link to="/">THE PEPE SHOP</Link>
  {#if showCart}
    <div class="header__top-right">
      <Link to="/cart">{`Cart ${$cart.total}`}</Link>
    </div>
  {/if}
  {#if showProducts}
    <div class="header__top-right">
      <Link to="/products">Products</Link>
    </div>
  {/if}
</div>
