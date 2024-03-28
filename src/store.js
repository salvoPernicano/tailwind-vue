import { reactive } from "vue";
import axios from 'axios';

export const store = reactive({

    recipesArray : [],
    accessPoint : 'https://api.edamam.com/api/recipes/v2?',
    type : 'type=public',
    ingredient : '',
    app_id : '&app_id=03f22cc4',
    app_key : '&app_key=e2f5174f4c3ee28a67df4fc620f4eddc',
    minCalories : "",
    maxCalories : ""

}
);

export function sayhello(){
    console.log('hello')
}

export function getRecipe(){
    store.recipesArray = [];
    const httpRequest = `${store.accessPoint}${store.type}&q=${store.ingredient}${store.app_id}${store.app_key}&diet=high-protein`;
    console.log(httpRequest);
    axios.get(httpRequest)
    .then(response =>{
        store.recipesArray.push(response.data);
        console.log(response.data)
    })
    .catch(error => {
        console.error('Error during Api Call')
    })
}