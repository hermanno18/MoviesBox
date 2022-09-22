<template>
  <div class="">
    <div>
      <MainSlider />
    </div>
    <div class="mt-3 px-3">
      <MoviesCardList />
    </div>
  </div>
</template>

<script>
import MoviesCardList from '~/components/general/MoviesCardList.vue';
export default { components: { MoviesCardList } }
</script>
