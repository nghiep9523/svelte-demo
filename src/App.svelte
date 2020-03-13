<script>
  import { Router, Link, Route } from "svelte-routing";

  import Home from "./containers/Home/Home.svelte";
  import Products from "./containers/Products/Products.svelte";
</script>

<Router>
  <Route path="/products" component="{Products}" />
  <Route path="/" component="{Home}" />
</Router>
