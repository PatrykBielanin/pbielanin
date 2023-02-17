<template>
  <h1 class="slider-navigation">
    {{ activeSlide }}
  </h1>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        activeIndex: 'app/activeIndex'
      }),
      activeSlide() {
        let slides = ['01', '02', '03']

        if (this.activeIndex) {
          return slides[this.activeIndex]
        }

        return slides[0]
      }
    }
  }
</script>
