<template>
    <div class="container">
        <div class="flex justify-between mb-1">
            <h4 class="text-xl"> Popular Movies </h4>
            <div class="w-fit">
                <a href="" class="text-primary hover:underline">Voir tout</a>
            </div>
        </div>
        <div>
            <div class="flex items-stretch justify-center h-64 relative bg-white aspect-video w-full">
                <div class="swiper thisOne mySwiper h-full">
                    <div v-show="isFetching" class="text-white h-full flex items-center">
                        <TheLoader />
                    </div>
                    <div v-show="!isFetching" class="swiper-wrapper">
                        <div v-for=" (item, i) in items" :key="i" class="swiper-slide w-full h-full">
                            <div class="relative w-full h-full">
                                <div
                                    class="absolute h-full z-20 w-full text-white bg-gradient-to-r from-secondary via-[#141414a9] bg-opacity-30 flex items-center">
                                    <div class="w-full pl-16">
                                        <h3 class="uppercase font-mono font-semibold text-2xl mb-3 tracking-widest">
                                            {{ item.title }}
                                        </h3>
                                        <p class="text-xs flex space-x-1">
                                            <span class="bg-secondary border-primary border-2 rounded-full px-1">Action</span>
                                            <span class="bg-secondary border-primary border-2 rounded-full px-1">Science</span>
                                            <span class="bg-secondary border-primary border-2 rounded-full px-1">Aventure</span>
                                            <span>...</span>
            
                                        </p>
                                        <p class="text-xs mt-2">
                                            <span class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                    class="w-3 h-3">
                                                    <path fill-rule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                <span>1h : 15min </span>
                                            </span>
                                        </p>
                                        <div class="block w-fit">
                                            <a href="" class="bg-primary text-sm uppercase p-2 pr-4 block mt-2 w-fit">
                                                <span class=" flex items-center space-x-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        class="w-4 h-4">
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
                                </div>
                                <div
                                    class="aspect-video z-10 absolute overflow-hidden w-full h-full flex items-center justify-center">
                                    <img :src="item.image" class=" relative h-full" alt="">
                                </div>
                                <div class="aspect-video overflow-hidden w-full h-full flex items-center justify-center opacity-50">
                                    <img :src="item.image" class=" relative h-full w-full blur-sm" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- If pagination is needed -->
                <!-- <div class="swiper-pagination"></div> -->
                <!-- If navigation buttons are needed -->
                <div v-show="!isFetching"
                    class="swiper-button-prev overflow-hidden border-primary hover:bg-slate-700 border-2 rounded-full"></div>
                <div v-show="!isFetching" class="swiper-button-next rounded-full border-primary hover:bg-slate-700 border-2"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, Navigation, Pagination, EffectCards, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import { mapActions } from 'vuex'
import TheLoader from '../Layout/TheLoader.vue';

export default {
    components: { TheLoader },
    data() {
        return {
            items: [],
            isFetching: true,
        };
    },
    mounted() {
        this.isFetching = true;
        this.getDatas().then(res => {
            this.items = res;
            setTimeout(() => {
                this.isFetching = false;
                this.initSwiper()
            }, 1000);
        })
            .catch(error => {
                // on gère l'érreur ici
                console.log(error);
            });
    },
    methods: {
        initSwiper() {
            // configure Swiper to use modules. The modules were tested with SwiperJS v6.8.4 with NuxtJS v2.15.7
            // previously it was before export default. Moved here for performance issues. Move back in case of problems.
            // init Swiper:  eslint-disable used for deleting error of unsued const swiper
            /* eslint-disable no-unused-vars */
            const swiper = new Swiper(".swiper.thisOne", {
                // Optional parameters
                // @see https://swiperjs.com/swiper-api#parameters
                loop: true,
                grabCursor: true,
                // remove unused modules if needed
                modules: [Navigation, Pagination, EffectCards, Autoplay],
                mousewheel: true,
                slidesPerView: 2,
                spaceBetween: 50,
                // Pagination if needed
                // pagination: {
                //   el: '.swiper-pagination',
                //   type: 'bullets',
                //   clickable: true,
                // },
                // Autoplay if needed
                autoplay: {
                    delay: 5000,
                },
                // Navigation arrows if needed
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
            // you can use different options later
            swiper.on("activeIndexChange", (swiper) => {
                // console.log(swiper)
            });
        },
        ...mapActions({
            getDatas: "movies/fetchMoviesInTheSpotlight"
        })
    },
}
</script>
<style>
    .card-item {
        aspect-ratio: 1/2.5 !important;
    }
    .swiper {
        height: auto;
    }

    .swiper-button-next:after,
    .swiper-button-prev:after {
        font-size: 20px !important;
        color: #e50914;
    }
</style>
