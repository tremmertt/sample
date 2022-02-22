<template>
  <div class="header">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/service">Service</router-link>
      <router-link to="/product">Product</router-link>
      <router-link to="/news">News</router-link>
      <router-link to="/hiring">Hiring</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  components: {},
};
</script>
