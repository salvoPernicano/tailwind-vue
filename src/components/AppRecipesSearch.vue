<script>
import { store } from '../store'
import axios from 'axios'
import AppRecipeCard from './AppRecipeCard.vue';

export default {
    name: 'AppRecipesSearch',
    components: {
        AppRecipeCard
    },
    data() {

        return {
            store,
            searchResultError : false
        }
    },
    methods: {
        getRecipe() {
            this.searchResultError = false
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
                if (store.recipesArray.length <= 0){
                    this.searchResultError = true
                }
        },

        showIngredients(index){
            this.store.recipesArray[index].toggleIngredients =  !this.store.recipesArray[index].toggleIngredients
        }


    }

}
</script>

<template>
    <div class="text-center  mx-auto mt-4 p-2 w-4/5 md:w-3/4">
        <h1 class="font-semibold text-black p-1 m-2">Search for recipes based on some ingredients!</h1>
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
        <div v-if="searchResultError" class="text-3xl text-center mt-8 text-red-600 font-bold">
            <h1>No recipe found, try a new research!</h1>
        </div>

        <div  class="mx-auto flex flex-col md:flex-row flex-wrap gap-6 justify-center p-10 ">
            <AppRecipeCard @click="showIngredients(index)" :class="element.toggleIngredients ? 'h-auto' :'h-80'" v-for="(element,index ) in store.recipesArray" :key="index" 
            :name="element.recipe.label"
            :image="element.recipe.image"
            :calories="element.recipe.calories"
            :qty="element.recipe.yield"
            :ingredients="element.recipe.ingredientLines"
            :toggle="element.toggleIngredients"
            >
            </AppRecipeCard>
        </div>
    
</template>



<style></style>