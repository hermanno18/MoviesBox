<template>
  <div class="container">
    {{error}}
    <h1 v-if="error.statusCode === 404">Page non trouvée</h1>
    <h1 v-else>Une erreur est survenue</h1>
    <NuxtLink to="/">Page d'accueil</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>