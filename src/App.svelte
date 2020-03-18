<script>
  import { Router, Link, Route } from "svelte-routing";

  import Home from "./containers/Home/Home.svelte";
  import Products from "./containers/Products/Products.svelte";
  import Cart from "./containers/Cart/Cart.svelte";
</script>

<Router>
  <Route path="/products" component="{Products}" />
  <Route path="/cart" component="{Cart}" />
  <Route path="/" component="{Home}" />
</Router>
