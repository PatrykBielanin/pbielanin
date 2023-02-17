<template>
    <div class="sidebar">
        <p class="rotate-90">
            PBIELANIN
            <span class="ml-4">{{ currentYear }}</span>
        </p>
    </div>
</template>

<script>
    export default {
        computed: {
          currentYear(){
              let year = new Date()
              return year.getFullYear()
          }
        }
    }
</script>
