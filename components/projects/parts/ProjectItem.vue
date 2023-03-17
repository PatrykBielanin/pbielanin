<template>
    <div class="flex flex-row lg:flex-col center-center lg:start-start h-[100%] lg:h-[400px] border rounded-lg border-silver lg:pb-6 w-full lg:w-[calc(33%-1rem)] transition-all hover:scale-105 hover:border-primary">
        <div class="mx-auto hidden lg:block">
            <img class="w-full rounded-t-lg" :src="getProjectImage()" :alt="title + ' preview'">
        </div>

        <div class="flex-col mt-0 py-2 sm:py-6 lg:mt-4 lg:py-0 px-[5%] grow">
            <h2 class="text-md sm:text-xl font-semibold uppercase text-silver">{{ title }}</h2>
            <p class="text-sm mt-2">{{ desc }}</p>
        </div>

        <div class="flex flex-col lg:flex-row px-6 mr-auto mt-[0px] lg:mt-auto gap-4">
            <template v-for="link in links">
                <a :href="link.url" target="_blank" class="transition-all hover:text-primary">
                    <FontAwesomeIcon
                        class="text-3xl"
                        :icon="link.icon"
                    ></FontAwesomeIcon>
                </a>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: 'TBA',
                required: true
            },
            desc: {
                type: String,
                default: '...',
                required: true
            },
            links: {
                type: Array,
                default: [],
                required: false
            },
            preview: {
                type: String,
                default: '',
                required: true
            }
        },
        data() {
            return {
            }
        },
        methods: {
            getProjectImage(){
                return `/images/${this.preview}.png`;
            }
        }
    }
</script>
