<template>
    <div class="flex flex-col justify-start items-start border rounded-lg border-silver pb-6 w-1/3 transition-all hover:scale-105 hover:border-primary">
        <div class="h-1/3 mx-auto">
            <img class="w-full rounded-t-lg" :src="getProjectImage()" :alt="title + ' preview'">
        </div>

        <div class="flex-col mt-16 px-[5%]">
            <h2 class="text-xl font-semibold uppercase">{{ title }}</h2>
            <p class="text-sm mt-2">{{ desc }}</p>
        </div>

        <div class="flex px-6 mt-auto space-x-4">
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
