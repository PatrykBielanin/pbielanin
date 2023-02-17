<template>
    <div class="container px-6 sm:px-0 mx-auto h-screen flex flex-col justify-center items-center space-y-12 text-center">
        <img src="/images/paypal/decline.png" alt="Decline paypal image" class="w-1/2 lg:w-1/6">

        <h1 class="text-rose-600">I understand your decision.</h1>

        <p class="text-rose-600 text-lg">
            Hopefully you are going to change your mind in the future. Keep up with my projects and <span class="text-lime-600">come back later!</span>
        </p>

        <router-link to="/">
            <button class="btn btn-danger">
                Go to pbielanin.pl
            </button>
        </router-link>
    </div>
</template>

<script>
export default {
}
</script>
