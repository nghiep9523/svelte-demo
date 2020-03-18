<style lang="scss">
  @import "./Cart.scss";
</style>

<script>
  export let item;
  export let count;
</script>

<div class="cart-item">
  <img src="{item.imgSrc}" alt="pepe" />
  <div class="cart-item__info">
    <div class="cart-item__name">{item.name}</div>
    <div class="cart-item__price">{`${item.price} USD`}</div>
  </div>
  <div class="cart-item__count">{`x${count}`}</div>
</div>
