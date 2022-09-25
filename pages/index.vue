<template>
  <div class="">
    <div>
      <MainSlider :uniqueId="52" />
    </div> 
    <div v-for="(cat,i) in categories" :key="i" class=" px-4">
      <MoviesCardList :uniqueId="i" :type="cat"/>
    </div>
  </div>
</template>

<script>
import MoviesCardList from '~/components/general/MoviesCardList.vue';
export default {
  components: { MoviesCardList }, 
  data() {
    return {
      categories: [
        {
          title: "Popular Videos",
        },

        {
          route: "Popular Videos",
        },

        {
          title: "Popular Videos",
        },
        {
          title: "Popular Videos",
        },
      ],
      items: [],
      isFetching: true,
    };
  },
}
</script>
