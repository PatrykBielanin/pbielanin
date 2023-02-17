<template>
    <div class="container flex-col space-y-6">
        <div class="space-y-4">
            <h2 class="font-semibold text-3xl">About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div class="w-full">
            <h2 class="font-semibold text-3xl">Skills</h2>
            <div class="flex flex-wrap space-x-4">
                <div class="badge mt-4" v-for="skill in skills">
                    {{ skill }}
                </div>
            </div>
        </div>

        <div class="space-y-4">
            <h2 class="font-semibold text-3xl">Contact</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
                    'SCSS/SASS',
                    'Tailwind',
                    'Linux',
                    'Bash',
                    'SEO',
                    'Twig',
                    'Laravel'
                ]
            }
        }
    }
</script>
