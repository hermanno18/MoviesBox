<template>
    <div :class="`container m-auto ${type.title? 'mt-4': ''}`">
        <div class="flex justify-between mb-1" v-if="type.title">
            <h4 class="text-xl md:text-2xl"> {{ type.title }} </h4>
            <div class="w-fit">
                <a href="" class="text-primary hover:underline">Voir tout</a>
            </div>
        </div>
        <div>
            <MySwiper :isLoading="isFetching" :uniqueId="uniqueId" :settings="moviescardListSettings" classList="h-72">
                <template #swiperSlide>
                    <div v-for=" (item, i) in items" :key="i" class="swiper-slide w-full h-full overflow-hidden group">
                        <div class="MyAnimate absolute w-full h-full -top-full group-hover:top-0  bg-secondary bg-opacity-80 z-30 cursor-pointer flex items-center justify-center"
                            @click="mafonction(),$nuxt.$emit('showDetailsPopup', item)">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-10 h-10 text-primary">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                            </svg>
                        </div>
                        <div class="relative w-full h-full cursor-pointerx">
                            <div
                                class="absolute h-full z-20 w-full text-white bg-gradient-to-r from-secondary via-[#141414a9] bg-opacity-30 flex items-center">
                                <div class="w-full h-full p-4 flex flex-col justify-between">
                                    <div>
                                        <div class="flex justify-between items-center">
                                            <p class="text-xs flex space-x-1">
                                                <span class="bg-secondary border-primary border-2 rounded-full px-1">Action</span>
                                                <span class="bg-secondary border-primary border-2 rounded-full px-1">Science</span>
                                                <span>...</span>
                                            </p>
                                            <vue-ellipse-progress :progress="50" thickness="2" emptyThickness="2"
                                                :color="themeConfig.colors.primary" :emptyColor="themeConfig.colors.secondary"
                                                :size="20" fontSize="9px" />
                                        </div>
                                        <p class="text-xs mt-2">
                                            <span class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                    class="w-3 h-3">
                                                    <path fill-rule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                <span class="flex space-x-2">
                                                    <span>1h : 15min </span>
                                                    <span> | </span>
                                                    <span> Nov 2017 </span>
                                                </span>
                                            </span>
                                        </p>
                                    </div>
                                    <h3 class="uppercase font-mono font-semibold text-2xl tracking-widest">
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
                    </div>
                </template>
            </MySwiper>
        </div>
    </div>
</template>

<script>

import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import { mapActions } from 'vuex'
import MySwiper from './MySwiper.vue';
import $themeConfig from '~/themeConfig';
export default {
    components: { MySwiper },
    props:['uniqueId', 'type'],
    data() {    
        const themeConfig = $themeConfig        
        return {
            items: [],
            isFetching: true,
            themeConfig,
            moviescardListSettings: {
                // Optional parameters
                // @see https://swiperjs.com/swiper-api#parameters
                loop: true,
                grabCursor: true,
                // remove unused modules if needed
                modules: [Navigation, Pagination, Autoplay],
                mousewheel: true,
                slidesPerView: 1,
                spaceBetween: 0,
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
                breakpoints: {
                    "350": {
                        slidesPerView: 2,
                        // spaceBetween: 10,
                    },
                    "768": {
                        slidesPerView: 3,
                        // spaceBetween: 20,
                    },
                    "1024": {
                        slidesPerView: 4,
                        // spaceBetween: 30,
                    },
                    "1350": {
                        slidesPerView: 5,
                        // spaceBetween: 40,
                    },
                    "1500": {
                        slidesPerView: 6,
                        // spaceBetween: 0,
                    }
                }
            }
        };
    },
    mounted() {
        this.isFetching = true;
        console.log('the unique ID', this.uniqueId)
        this.getDatas().then(res => {
            this.items = res;
            this.isFetching = false;
        })
            .catch(error => {
                // on gère l'érreur ici
                console.log(error);
            });
    },
    methods: {
        handleShowDetails() {
        },
        mafonction() {
            console.log('une fonction trop cool')
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
    .MyAnimate {
        transition: 0.5s !important;
    }
</style>
