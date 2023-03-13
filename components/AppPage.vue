<template>
    <div class="relative overflow-y-hidden">
        <Navigation></Navigation>
        <SliderNavigation></SliderNavigation>

        <div class="example">
          <client-only>
            <swiper
              ref="carousel"
              class="h-screen w-full"
              :options="swiperOptions"
              @ready="onSwiperRedied"
              @clickSlide="onSwiperClickSlide"
              @slideChange="onSwiperSlideChangeTransitionStart"
            >
              <swiper-slide
                v-for="slide in slides"
                :key="slide.component"
              >
                <component :is="slide.component"></component>
              </swiper-slide>

              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </client-only>
        </div>

        <Footer></Footer>
    </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'swiper-nuxt',
    data () {
      return {
        slides: {
          home: { component: 'Home' },
          about: { component: 'Projects' },
          portfolio: { component: 'About' }
        },
        swiperOptions: {
          loop: false,
          direction: 'vertical',
          slidesPerView: 'auto',
          centeredSlides: true,
          mousewheel: true,
          speed: 500,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    },
    computed: {
        ...mapGetters({
            swiper: 'app/swiper'
        })
    },
    methods: {
      ...mapActions({
        setGlobalSwiper: 'app/setGlobalSwiper'
      }),
      onSwiperRedied(swiper) {
        this.setGlobalSwiper({ payload: { swiper: swiper }})

        console.log('Swiper redied!', swiper)
      },
      onSwiperSlideChangeTransitionStart() {
        console.log('SwiperSlideChangeTransitionStart!', this.swiper)
      },
      onSwiperClickSlide(index, reallyIndex) {
        console.log('Swiper click slide!', reallyIndex)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .example {
    height: auto;
    .swiper {
      height: 100vh;
      width: 100%;
      .swiper-pagination {
        > .swiper-pagination-bullet {
          background-color: red;
        }
      }
    }
  }
</style>
