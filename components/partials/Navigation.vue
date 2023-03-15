<template>
    <div class="navigation">
        <ul class="flex flex-col center-center gap-12 lg:gap-48 grow h-screen lg:h-auto lg:flex-row divide-y divide-silver/25 lg:divide-y-0" v-if="open">
                <li
                    v-for="(item, index) in items"
                    class="h-1/4 w-full lg:w-auto lg:h-auto cursor-pointer transition-all hover:text-primary hover:line-through flex center-center"
                    @click="slideTo(index)"
                >
                    {{ item.name }}
                </li>
        </ul>

        <FontAwesomeIcon
            @click.prevent="open = !open"
            class="ml-auto text-3xl cursor-pointer hover:text-primary"
            :class="{'rotate-90': open}"
            :icon="!open ? ['fas', 'bars'] : ['fas', 'angle-up']"
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
