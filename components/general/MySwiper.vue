<template>
    <div
        :class="`flex items-stretch justify-center relative  w-full ${classList}`">
        <div :id="`mySwiper${uniqueId}`" class="swiper h-full">
            <div v-show="isFetching" class="text-white h-full flex items-center">
                <TheLoader />
            </div>
            <div v-show="!isFetching" class="swiper-wrapper">
                <slot name="swiperSlide"></slot>
            </div>
        </div>
        <!-- If pagination is needed -->
        <!-- <div class="swiper-pagination"></div> -->
        <!-- If navigation buttons are needed -->
        <div v-show="!isFetching" :id="`swiper-button-prev-${uniqueId}`"
            class="swiper-button-prev overflow-hidden border-primary hover:bg-slate-700 border-2 rounded-full"></div>
        <div v-show="!isFetching" :id="`swiper-button-next-${uniqueId}`"
            class="swiper-button-next rounded-full border-primary hover:bg-slate-700 border-2"></div>
    </div>
</template>
<script>
// import Swiper JS
// add or remove unused modules
import { Swiper } from 'swiper';

import 'swiper/swiper-bundle.min.css'
import TheLoader from '../Layout/TheLoader.vue';
export default {
    components: { TheLoader },
    props: ['uniqueId', 'isLoading', 'settings', 'classList', 'totalItems'],
    data() {
        return {
            isFetching: true,
        };
    },
    watch: {
        isLoading() {
            setTimeout(()=>{
                this.isFetching = this.isLoading
                this.initSwiper()
            })
        },
        setting() {
            this.initSwiper()
        }
    },
    methods: {
        initSwiper() {
            // configure Swiper to use modules. The modules were tested with SwiperJS v6.8.4 with NuxtJS v2.15.7
            // previously it was before export default. Moved here for performance issues. Move back in case of problems.
            // init Swiper:  eslint-disable used for deleting error of unsued const swiper
            /* eslint-disable no-unused-vars */ 
            const swiper = new Swiper(`#mySwiper${this.uniqueId}`, {
                loop:true, 
                touchStartPreventDefault: false,
                loopedSlides: 1,
                on: {
                    slideChange() {
                        const lastVisibleItem = this.realIndex + this.params.slidesPerView
                        const slidesLength = this.slides.length - 2
                        const lastVisibleIndex = this.realIndex + this.params.slidesPerView
                        // if swiper reaches the end of displayed items, goToNext redirects swiper to the start
                        if (lastVisibleItem > slidesLength) {
                            this.slideTo(1)
                        }
                        // if swiper wants to go before the first item, then forward swiper to the last item
                        if (lastVisibleIndex >= this.slides.length) {
                            this.slideTo((slidesLength - this.params.slidesPerView) + 1)
                        }
                    }
                },
                ...this.settings,
                navigation: {
                    nextEl: `#swiper-button-next-${this.uniqueId}`,
                    prevEl: `#swiper-button-prev-${this.uniqueId}`,
                },
            });
        },
    },
}
</script>

<style lang="css" scoped>
.swiper {
    height: auto;
}

.swiper-button-next:after,
.swiper-button-prev:after {
    font-size: 20px !important;
    color: #e50914;
}
</style>
