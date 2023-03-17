<template>
    <div class="container flex">
        <div class="flex flex-wrap flex-col lg:flex-row justify-center gap-4 px-6">
            <template v-for="project in projects">
                <ProjectItem :title="project.title" :desc="project.desc" :links="project.links" :preview="project.preview"/>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                projects: [
                    {
                        title: "Cyberpunk 2077 Discord Theme",
                        desc: 'Theme for Better Discord inspired by Cyberpunk 2077 user interface.',
                        links: [
                            {icon: ['fab', 'github'], url: 'https://github.com/PatrykBielanin/discord-cyberpunk2077-theme'},
                            {icon: ['fas', 'globe'], url: 'https://betterdiscord.app/theme/Cyberpunk%202077'}
                        ],
                        preview: 'cyberpunk400',
                    },
                    {
                        title: "Better discord theme website",
                        desc: 'Website created for my better discord theme. Includes configuration tool for users.',
                        links: [
                            {icon: ['fab', 'github'], url: 'https://github.com/PatrykBielanin/discord-cyberpunk2077-website'},
                            {icon: ['fas', 'globe'], url: 'https://cyberpunk.pbielanin.pl'}
                        ],
                        preview: 'website400',
                    },
                    {
                        title: "Vue-Ask - vue and nuxt plugin",
                        desc: 'A simple, light and fully customizable confirmation modal component for Vue3 and Nuxt3. ',
                        links: [
                            {icon: ['fab', 'github'], url: 'https://github.com/PatrykBielanin/vue-ask'},
                            {icon: ['fas', 'globe'], url: 'https://npmjs.com/package/vue-ask'}
                        ],
                        preview: 'vueask400',
                    },
                ]
            }
        }
    }
</script>
