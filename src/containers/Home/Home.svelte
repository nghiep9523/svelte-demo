<style lang="scss">
  @import "./Home.scss";
</style>

<script>
  import { Link } from "svelte-routing";
  let logo = "assets/logo.png";
</script>

<div class="home-container">
  <img src="{logo}" alt="Logo" />
  <h1>Svelte Demo</h1>
  <nav>
    <Link to="/products">Products</Link>
    <Link to="/cart">Cart</Link>
  </nav>
</div>
