<template>
    <div
        class="flex-col center-center slider-projects"
        :class="{'slider-projects-left': direction == 'left', 'slider-projects-right flex-row-reverse': direction == 'right'}"
    >
        <FontAwesomeIcon
            class="text-2xl"
            :class="{'rotate-90': direction == 'right', '-rotate-90': direction == 'left'}"
            :icon="['fas', 'angle-up']"
        ></FontAwesomeIcon>

        <p class="font-thin">{{ direction == 'left' ? 'Previous' : 'Next' }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            direction: {
                type: String,
                default: 'left',
                required: true
            }
        },
        data() {
            return {
            }
        }
    }
</script>
