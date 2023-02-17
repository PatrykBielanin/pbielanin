<template>
    <div class="flex flex-col justify-start items-start w-[90%]">
        <div class="flex px-[5%]">
            <template v-for="link in links">
                <a :href="link.url" target="_blank">
                    <FontAwesomeIcon
                        class="text-3xl"
                        :icon="link.icon"
                    ></FontAwesomeIcon>
                </a>
            </template>
        </div>

        <div class="flex-col mt-6 px-[5%]">
            <h2 class="text-2xl font-semibold uppercase">{{ title }}</h2>
            <p class="text-md mt-8">{{ desc }}</p>
        </div>

        <div class="mt-10">
            <img class="w-[90%] mx-auto" src="@/static/images/cyberpunk.png" :alt="title + ' preview'">
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
        }
    }
</script>
