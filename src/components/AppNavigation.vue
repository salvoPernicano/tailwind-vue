<script>
export default {
    name : 'AppNavigation',
    data () {
        return {}
    }
}
</script>

<template>
<header class="font-sans bg-red-600 p-3 h-28 flex">
    <nav class="mx-auto w-3/4 flex justify-between items-center">
        <figure class="w-24 h-24">
        <img class="w-full h-full rounded-full" src="../assets/logofit.png" alt="">
    </figure>
    <ul class="flex gap-8 mr-2 text-lg font-semibold text-white">
       <router-link to="/" class=" hover:text-black transition-colors">Home</router-link>
       <router-link to="/about" class=" hover:text-black transition-colors">About</router-link>
       <router-link to="/diet" class=" hover:text-black transition-colors">Diet</router-link>
       <router-link to="/recipes" class=" hover:text-black transition-colors">Recipes</router-link>
    </ul>
    </nav>

</header>
</template>



<style lang="scss" scoped>

</style>