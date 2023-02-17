<template>
    <div class="container flex w-[90vw] relative">
        <ProjectsSlider :direction="'left'"></ProjectsSlider>
        <ProjectsHero :title="title" :desc="desc" :links="links" :preview="preview"></ProjectsHero>
        <ProjectsSlider :direction="'right'"></ProjectsSlider>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "Cyberpunk 2077 Discord Theme",
                desc: 'Theme for Better Discord inspired by Cyberpunk 2077 user interface.',
                links: [
                    {icon: ['fab', 'github'], url: 'https://github.com/PatrykBielanin/discord-cyberpunk2077-theme'}
                ],
                preview: '@/static/images/cyberpunk.png'
            }
        }
    }
</script>
