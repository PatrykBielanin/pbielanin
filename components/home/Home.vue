<template>
    <div class="container flex-col py-20">
        <div class="flex-col center-center text-center space-y-4 mt-auto">
            <!-- <h1>XD</h1> -->
            <h1 class="text-6xl">Hi</h1>
            <h1 class="text-6xl">I'm <span class="font-semibold text-primary">Patrick</span></h1>
            <h1 class="text-6xl font-thin">front-end developer</h1>
        </div>

        <div class="flex mt-14 space-x-10">
            <button class="btn btn-primary flex center-center" @click.prevent="slideTo(1)">
                <span>PROJECTS</span>
                <FontAwesomeIcon class="text-lg rotate-90 ml-2" :icon="['fas', 'angle-up']"></FontAwesomeIcon>
            </button>

            <button class="btn btn-secondary flex center-center" @click.prevent="openResume()">
                <span>RESUME</span>
                <FontAwesomeIcon class="text-lg ml-3" :icon="['fas', 'file-pdf']"></FontAwesomeIcon>
            </button>
        </div>

        <div class="flex flex-col items-center space-y-4 mt-auto">
            <p class="-rotate-90">scroll</p>
            <div class="w-[1px] h-[24px] bg-white">
            </div>
            <!-- <i class="fas fa-mouse"></i> -->
            <!-- <font-awesome-icon icon="fas fa-mouse" /> -->
            <!-- <FontAwesomeIcon class="text-lg text-white" :icon="['fas', 'mouse']"></FontAwesomeIcon> -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="w-[18px]">
                <path fill="#FFFFFF" d="M0 352a160 160 0 0 0 160 160h64a160 160 0 0 0 160-160V224H0zM176 0h-16A160 160 0 0 0 0 160v32h176zm48 0h-16v192h176v-32A160 160 0 0 0 224 0z"/>
            </svg>

        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters({
                swiper: 'app/swiper'
            })
        },
        methods: {
            slideTo(index) {
              return this.swiper.slideTo(index)
            },
            openResume(){
                return window.open('https://pbielanin.pl/cv_eng.pdf', '_blank').focus();
            }
        }
    }
</script>
