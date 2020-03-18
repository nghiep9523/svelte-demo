<style lang="scss">
  @import "./Home.scss";
</style>

<script>
  import { Link } from "svelte-routing";
  import Header from "../../components/Header/Header.svelte";
  let logo = "assets/logo.png";
</script>

<div class="home-container">
  <img src="{logo}" alt="Logo" />
  <h1>Svelte Demo</h1>
  <Header />
  <div class="navigator">
    <div class="link-wrapper">
      <Link to="/products">Products</Link>
    </div>
    <div class="link-wrapper">
      <Link to="/cart">Cart</Link>
    </div>
  </div>
</div>
