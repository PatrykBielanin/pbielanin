<template>
    <div class="footer space-x-4">
        <template v-for="item in icons">
            <template v-if="item.isLink">
                <template v-if="item.link == 'resume'">
                    <FontAwesomeIcon class="text-2xl" :icon="item.icon" @click.prevent="openResume()"></FontAwesomeIcon>
                </template>

                <div v-else-if="item.link == 'discord'" v-tooltip.top="'bielak#2500'">
                    <FontAwesomeIcon class="text-2xl" :icon="item.icon" @click.prevent="copyToClipboard()"></FontAwesomeIcon>
                </div>
            </template>

            <template v-else>
                <a :href="item.link" target="_blank">
                    <FontAwesomeIcon class="text-2xl" :icon="item.icon"></FontAwesomeIcon>
                </a>
            </template>
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
                        link: 'https://github.com/PatrykBielanin',
                        isLink: false
                    },
                    {
                        icon: ['fab', 'linkedin'],
                        link: 'https://www.linkedin.com/in/patryk-bielanin-a7787120b/',
                        isLink: false
                    },
                    {
                        icon: ['fab', 'twitter'],
                        link: 'https://twitter.com/PatrykBielanin',
                        isLink: false
                    },
                    {
                        icon: ['fab', 'discord'],
                        link: 'discord',
                        isLink: true
                    },
                    {
                        icon: ['fas', 'file-pdf'],
                        link: 'resume',
                        isLink: true
                    },
                    {
                        icon: ['fas', 'envelope'],
                        link: 'mailto:patrykbielanin@gmail.com',
                        isLink: false
                    }
                ]
            }
        },
        methods: {
            openResume(){
                return window.open('https://pbielanin.pl/cv_eng.pdf', '_blank').focus();
            },
            copyToClipboard(){
                navigator.clipboard.writeText('bielak#2500')
            }
        }
    }
</script>
