<script>
import { store } from '../store'
import axios from 'axios'
import AppRecipesCards from './AppRecipesCards.vue';

export default {
    name: 'AppRecipesSearch',
    components: {
        AppRecipesCards
    },
    data() {

        return {
            store,
        }
    },
    methods: {
        getRecipe() {
            store.recipesArray = [];
            const httpRequest = `${store.accessPoint}${store.type}&q=${store.ingredient}${store.app_id}${store.app_key}&calories=${store.minCalories}-${store.maxCalories}`;
            console.log(httpRequest);
            axios.get(httpRequest)
                .then(response => {
                    store.recipesArray = (response.data.hits).map((item) => ({...item, toggleIngredients : false}));
                    console.log(store.recipesArray);
                })
                .catch(error => {
                    console.error('Error during Api Call')
                })
        },

        showIngredients(index){
            this.store.recipesArray[index].toggleIngredients =  !this.store.recipesArray[index].toggleIngredients
        }


    }

}
</script>

<template>
    <div class="text-center  mx-auto mt-4 p-2 w-4/5 md:w-3/4">
        <h1 class="font-semibold text-black p-1 my-2">Search for recipes based on some ingredients!</h1>
        <div>
            <label class="font-semibold text-black p-1" for="">Ingredients:</label>
            <input v-model="store.ingredient"
                class="font-semibold text-black p-1 border border-gray-200 rounded-md mx-1 focus:outline-cyan-600"
                type="text" placeholder="e.g chicken">
            <label class="font-semibold text-black p-1" for="">Calories:</label>
            <input v-model="store.minCalories"
                class="font-semibold text-black p-1 border border-gray-200 rounded-md mx-1 focus:outline-cyan-600"
                type="text" placeholder="Min. Amount of Calories">
            <input v-model="store.maxCalories"
                class="font-semibold text-black p-1 border border-gray-200 rounded-md mx-1 focus:outline-cyan-600"
                type="text" placeholder="Max Amount of Calories">

            <button
                class="block mt-3 mx-auto  py-2 px-4 bg-blue-500 rounded-md text-white font-semibold hover:bg-blue-800 transition-colors"
                @click="getRecipe">Enter</button>
                <span class="font-semibold">Caloric range: {{ store.minCalories }} - {{ store.maxCalories }}</span>
        </div>
    </div>
    <div>
        <div  class="mx-auto flex flex-col md:flex-row flex-wrap gap-6 justify-center p-10 ">
            <div @click="showIngredients(index)" :class="element.toggleIngredients ? 'h-auto' :'h-80'"  class="bg-white relative hover:text-red-500  hover:cursor-pointer  transition-all duration-500 card border-red-500  border shadow-md hover:shadow-red-700 w-full md:w-72  px-5  text-center rounded-md overflow-hidden" v-for="(element,index ) in store.recipesArray" :key="index">
                <div>
                    <h2 class="font-bold text-lg truncate py-2">{{ element.recipe.label}}</h2>
                    <img class="block mx-auto h-60 shadow-md" :src="element.recipe.image" alt="">
                    <h3 class="text-orange-600 font-semibold">{{Math.floor( element.recipe.calories / element.recipe.yield)  }} Calories per portion</h3>

                </div>
                <div  :class="element.toggleIngredients ? 'p-1' :'absolute bottom-0 left-0 -z-10'" >
                    <h2 class="font-bold">Ingredients for {{ element.recipe.yield }} people:</h2>
                    <ul class="text-sm font-semibold" >
                        <li class="text-black " v-for="(item,index) in element.recipe.ingredientLines">{{ item }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>



<style></style>