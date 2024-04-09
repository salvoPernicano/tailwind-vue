<script>
export default {
    name: 'AppRecipeCard',
    props: 
    [
        'name',
        'image',
        'calories',
        'qty',
        'ingredients',
        'toggle'
    ],
    data() {


        return {}
    }
}
</script>

<template>
    <div
        class="bg-white relative hover:text-red-500  hover:cursor-pointer  transition-all duration-500 card border-red-500  border shadow-md hover:shadow-red-700 w-full md:w-72  px-5  text-center rounded-md overflow-hidden">
        <div>
            <h2 class="font-bold text-lg truncate py-2">{{ name }}</h2>
            <img class="block mx-auto h-60 shadow-md" :src="image" alt="">
            <h3 class="text-orange-600 font-semibold">{{ Math.floor(calories / qty) }}
                Calories per portion</h3>

        </div>
        <div :class="toggle ? 'p-1' : 'absolute bottom-0 left-0 -z-10'">
            <h2 class="font-bold">Ingredients for {{ qty }} people:</h2>
            <ul class="text-sm font-semibold">
                <li class="text-black " v-for="item in ingredients">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>



<style></style>