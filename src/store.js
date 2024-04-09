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

