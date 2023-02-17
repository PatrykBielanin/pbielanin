<template>
    <div class="footer space-x-4">
        <template v-for="item in icons">
            <a :href="item.link" target="_blank">
                <FontAwesomeIcon class="text-2xl" :icon="item.icon"></FontAwesomeIcon>
            </a>
        </template>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                icons: [
                    {
                        icon: ['fab', 'github'],
                        link: 'https://github.com/PatrykBielanin'
                    },
                    {
                        icon: ['fab', 'linkedin'],
                        link: 'https://www.linkedin.com/in/patryk-bielanin-a7787120b/'
                    },
                    {
                        icon: ['fab', 'twitter'],
                        link: 'https://twitter.com/PatrykBielanin'
                    },
                    {
                        icon: ['fab', 'discord'],
                        link: ''
                    },
                    {
                        icon: ['fas', 'file-pdf'],
                        link: ''
                    },
                    {
                        icon: ['fas', 'envelope'],
                        link: ''
                    }
                ]
            }
        }
    }
</script>
