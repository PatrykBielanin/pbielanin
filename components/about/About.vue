<template>
    <div class="container flex-col tracking-wide space-y-4 lg:space-y-6 px-4 lg:px-0">
        <div class="space-y-4 w-full">
            <h2 class="font-semibold text-primary text-xl lg:text-3xl">About</h2>
            <p class="text-[14px] lg:text-[16px]">2 years experience as full-stack developer in the SEO industry. My job is to maintain company's website and web application which connects clients, publishers, link builders and copywriters. In my job i value quality of my code, keeping to my deadlines and good communications with people in my team. In my free time i focus on learning new front-end technologies and soft skills development.</p>
        </div>

        <div class="w-full">
            <h2 class="font-semibold text-primary text-xl lg:text-3xl">Skills</h2>
            <div class="flex flex-wrap gap-2 lg:gap-3 pt-4">
                <div class="badge" v-for="skill in skills">
                    {{ skill }}
                </div>
            </div>
        </div>

        <div class="space-y-4 w-full hidden md:block">
            <h2 class="font-semibold text-primary text-xl lg:text-3xl">Contact</h2>
            <p class="text-[14px] lg:text-[16px]">If you have any feedback or you need some help, please reach out to me at my social medias which you can find in the left bottom corner of this website.</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                skills: [
                    'Vue.js',
                    'Nuxt.js',
                    'Docker',
                    'JavaScript',
                    'PHP',
                    'CSS/SCSS/SASS',
                    'Tailwind',
                    'Linux',
                    'Bash',
                    'SEO',
                    'Twig',
                    'Laravel',
                    'GIT',
                    'MySQL',
                    'Figma',
                    'Photoshop',
                    'Linux',
                    'Bash',
                    'Windows'
                ]
            }
        }
    }
</script>
