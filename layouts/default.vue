<template>
  <div class=" bg-secondary ">
    <div id="sideBar" class=" transition-all ease-in-out duration-700 h-full z-50 w-screen sm:w-96  absolute -left-full ">
      <div  class=" fixed overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-transparent scrollbar-secondary h-full bg-secondary w-screen sm:w-96"
        @focusout="handleCloseDetails"
       > 
        <div v-if="showDetails" class="">
          <div class=" sticky top-0 w-full h-72 bg-secondary">
            <div
              class="absolute h-full z-20 w-full text-white bg-gradient-to-t from-secondary  bg-opacity-30 flex items-center">
              <div class="w-full h-full p-4 flex flex-col justify-between">
                <div>
                  <div class="flex justify-between items-center">
                    <p class="text-xs flex space-x-3">
                      <span class="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                          class="w-6 h-6 hover:text-primary cursor-pointer" title="favoris">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                      </span>
                      <span class="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                          class="w-6 h-6 hover:text-primary cursor-pointer" title="telecharger">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                      </span>
                    </p>
                    <font-awesome-icon @click="handleCloseDetails" :icon="['fas', 'times']" class=" h-5 w-5 cursor-pointer hover:text-primary" />
                  </div>
                </div>
                <div class="flex justify-center">
                  <div class="block w-fit">
                    <a href="" class="bg-primary text-sm uppercase p-2 pr-4 block mt-2 w-fit">
                      <span class=" flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                          <path fill-rule="evenodd"
                            d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
                            clip-rule="evenodd" />
                        </svg>
                        <span class="tracking-widest">
                          Visionner
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
                <h3 class="uppercase font-mono font-semibold text-2xl tracking-widest text-center">
                  {{ item.title }}
                </h3>
              </div>
            </div>
            <div class="aspect-video z-10 absolute overflow-hidden w-full h-full flex items-center justify-center">
              <img :src="item.image" class=" relative h-full" alt="">
            </div>
            <div class="aspect-video overflow-hidden w-full h-full flex items-center justify-center opacity-50">
              <img :src="item.image" class=" relative h-full w-full blur-sm" alt="">
            </div>
          </div>
          <div class="text-white px-3 pb-3">
            <p class="text-sm">
              {{ item.description }}
              {{ item.description }}
              {{ item.description }}{{ item.description }}
            </p>
            <div class="mt-4">
              <table class="table-auto">
                <tbody>
                  <tr class="text-left flex justify-between"  v-for="(meta, i) in metaData" :key="i">
                    <th class="text-left mr-12">{{ meta.key }}: </th>
                    <td class="text-right">{{ meta.value }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="mt-4 text-center">
              <div class=" mb-2"> Faites profiter vos amis ! </div>
              <div class="flex space-x-3 justify-center">
                <span v-for="(brand, i) in ['facebook', 'whatsapp', 'telegram',]" :key="i" :title="brand">
                    <font-awesome-icon @click="handleCloseDetails" :icon="['fab', brand]"
                      class=" h-7 w-7 cursor-pointer hover:text-primary" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" relative bg-white">
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
  </div>
</template>
<script>
import AppHeader from "../components/Layout/AppHeader.vue";
import AppFooter from "~/components/Layout/AppFooter.vue";

export default {
  components: { AppHeader, AppFooter },
  data(){
    return{
      item:{},
      showDetails: true,
      metaData: [
        {
          key: 'Réalisateur',
          value: ' Hermanno18'
        },
        {
          key: 'Catégories',
          value: ' #Action, #Science, #Aventure'
        },
        {
          key: 'Acteurs',
          value: ' Hermanno18, Jojo, luke, johanson the Dude,'
        },
        {
          key: 'Année',
          value: ' 2012'
        },
        {
          key: 'Durée',
          value: ' 1h30min'
        },
        {
          key: 'Langue',
          value: ' Francais'
        },
        {
          key: 'Réalisateur',
          value: ' Hermanno18'
        },

      ]
    }
  },
  middleware: ["data_filter"],
  created() {
    this.$nuxt.$on('showDetailsPopup', ($event) => this.showDetailsPopup($event))
  },
  methods: {
    showDetailsPopup(item) {
      this.item = item
      this.showDetails = true
      const sidebar = document.getElementById('sideBar')
      sidebar.classList.remove('-left-full')
      sidebar.classList.add('left-0')
      // sidebar.classList.add('w-96', 'left-0')
      console.log('on affiche')
    },
    handleCloseDetails() {
      const sidebar = document.getElementById('sideBar')
      sidebar.classList.remove('left-0')
      // sidebar.classList.remove('w-96', 'left-0')
      sidebar.classList.add('-left-full')
      console.log('on se ferme.')
    }
  },
}
</script>

<style>
.MyAnimation{
  transition: width 1s ease-in-out;
  }
</style>