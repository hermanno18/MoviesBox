<template>
  <div class="h-screen relative">
    <!-- <TheHeader /> -->
    <header class="sticky top-0 bg-white z-40">
      <AppHeader />
    </header>
    <main>
      <Nuxt />
    </main>
    <footer>
      <AppFooter />
    </footer>
    <!-- <TheFooter /> -->
  </div>
</template>
<script>
import AppHeader from "../components/Layout/AppHeader.vue";
import AppFooter from "~/components/Layout/AppFooter.vue";

export default {
  components: { AppHeader, AppFooter },
  middleware: ["data_filter"]
}
</script>