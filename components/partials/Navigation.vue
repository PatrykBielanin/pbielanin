<template>
    <div class="navigation">
        <ul class="flex center-center space-x-32 grow" v-if="open">
                <li
                    v-for="(item, index) in items"
                    class="cursor-pointer transition-all hover:text-primary hover:line-through"
                    @click="slideTo(index)"
                >
                    {{ item.name }}
                </li>
        </ul>
        <FontAwesomeIcon
            @click.prevent="open = !open"
            class="ml-auto text-3xl cursor-pointer hover:text-primary"
            :icon="!open ? ['fas', 'bars'] : ['fas', 'star']"
        ></FontAwesomeIcon>

    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
      data() {
          return {
              open: false,
              items: [
                  {name: 'HOME', slider: 0},
                  {name: 'PROJECTS', slider: 1},
                  {name: 'ABOUT', slider: 2},
              ]
          }
      },
      computed: {
          ...mapGetters({
              swiper: 'app/swiper'
          })
      },
      methods: {
          ...mapActions({
            updateActiveIndex: 'app/updateActiveIndex'
          }),
          slideTo(index) {
            this.updateActiveIndex({ payload: { index } })

            return this.swiper.slideTo(index)
          }
      }
  }
</script>
