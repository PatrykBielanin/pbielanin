<template>
    <div class="container flex-col py-16 sm:py-20">
        <div class="flex-col center-center text-center space-y-4 mt-auto">
            <h1 class="text-4xl sm:text-6xl">Hi</h1>
            <h1 class="text-4xl sm:text-6xl">I'm <span class="font-semibold text-primary">Patrick</span></h1>
            <h1 class="text-4xl sm:text-6xl font-thin">front-end developer</h1>
        </div>

        <div class="flex flex-col sm:flex-row center-center mt-8 lg:mt-14 gap-6 lg:gap-10">
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
            <p class="text-sm lg:text-base -rotate-90 hidden md:block">scroll</p>
            <p class="text-sm lg:text-base -rotate-90 block md:hidden">slide</p>
            <div class="w-[1px] h-[24px] bg-white">
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="w-[14px] sm:w-[18px] hidden md:block">
                <path fill="#FFFFFF" d="M0 352a160 160 0 0 0 160 160h64a160 160 0 0 0 160-160V224H0zM176 0h-16A160 160 0 0 0 0 160v32h176zm48 0h-16v192h176v-32A160 160 0 0 0 224 0z"/>
            </svg>
            <FontAwesomeIcon class="text-xl block md:hidden rotate-180" :icon="['fas', 'hand-pointer']"></FontAwesomeIcon>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        data() {
            return {
                resumeLink: 'https://cloud.pbielanin.pl/pbielanin/cv_eng.pdf'
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
                return window.open(this.resumeLink, '_blank').focus();
            }
        }
    }
</script>
