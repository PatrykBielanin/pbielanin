<template>
    <div class="container flex-col">
        <div class="flex-col center-center text-center space-y-4">
            <h1 class="text-6xl">Hi</h1>
            <h1 class="text-6xl">I'm <span class="font-semibold text-primary">Patrick</span></h1>
            <h1 class="text-6xl font-thin">front-end developer</h1>
        </div>

        <div class="flex mt-14 space-x-10">
            <button class="btn btn-primary flex center-center">
                <span>PROJECTS</span>
                <FontAwesomeIcon class="text-lg rotate-90 ml-2" :icon="['fas', 'angle-up']"></FontAwesomeIcon>
            </button>

            <button class="btn btn-secondary flex center-center">
                <span>RESUME</span>
                <FontAwesomeIcon class="text-lg ml-3" :icon="['fas', 'file-pdf']"></FontAwesomeIcon>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        }
    }
</script>
