<script>
export default {
    data () {

        return {
            eta : null,
            altezza : null,
            peso : null,
            fabbisogno : null,
            attivita : null,
        }
    },
    methods:{
        calculateCalories(){
           const basale = (this.peso * 10) + (6.25 * this.altezza) - (5 * this.eta) + 5;
           if(this.attivita === 'sedentario'){
            this.fabbisogno = basale * 0.9
           } else if (this.attivita === 'moderato'){
            return this.fabbisogno = basale;
           } else {
            this.fabbisogno = basale * 1.1
           }
        }
    }
}
</script>

<template>
    <div class="text-center  mx-auto mt-4 p-2 w-4/5 md:w-3/4">
        <h1 class="text-red-600 font-bold text-3xl">Inserisci i tuoi parametri</h1>
        <div class="m-4">
            <label class="font-semibold" for="">Eta</label>
            <input class="border border-gray-400 rounded mx-3" type="number" min="1" max="100" v-model="eta" >
        </div class="m-4">
        <div>
            <label class="font-semibold" for="">Altezza in cm</label>
            <input class="border border-gray-400 rounded mx-3" type="number"  min="100" v-model="altezza">
        </div>
        <div class="m-4">
            <label class="font-semibold" for="">Peso in kg</label>
            <input class="border border-gray-400 rounded mx-3" type="number"  min="10" v-model="peso">
        </div>
        <label class="font-semibold" for="">Tipo di attivita</label>
            <select class="border border-gray-400 rounded mx-3" name="" id="" v-model="attivita" required>
                <option value="sedentario">sedentario</option>
                <option value="moderato">moderato</option>
                <option value="attivo">attivo</option>
            </select>
        <button class="block mt-2 mx-auto  py-1 px-3 bg-blue-500 rounded-md text-white font-semibold hover:bg-blue-800 transition-colors" @click="calculateCalories">Invio</button>
        <div class="m-4">
        </div>
        <h2>Your daily caloric intake should be: <span v-if="fabbisogno !== null">{{ fabbisogno.toFixed(0) }}</span></h2>
    </div>
</template>


<style>

</style>