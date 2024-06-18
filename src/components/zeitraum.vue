
<template>
    <div class="form-container">
        <form action="" @submit.prevent="handleZeitraumForm()">
            <h3>Zeitraum</h3>
            <div v-if="!mehrereFehltage">
                <label for="fehltag">
                    <p>Fehltag</p>
                </label> 
                <input class="date-input" type="date" name="fehltag" v-model="newFehltag"> 
            </div>

            <label for="mehrereFehltag">
                <p>Mehrere Fehltage?</p>
            </label> 
            <input class="check-input" type="checkbox" name="fehltag" v-model="mehrereFehltage"> Ja

            <div v-if="mehrereFehltage">

                <label for="fehltag">
                    <p>Von</p>
                </label> 
                <input class="date-input" type="date" name="fehltag" v-model="newVonFehltag"> 

                <label for="fehltag">
                    <p>Bis</p>
                </label> 
                <input class="date-input" type="date" name="fehltag" v-model="newBisFehltag"> 

            </div>

            <div class="btn-container" v-if="formIntact">
                <input class="inputBtn" type="submit" value="Absenden">
            </div> 
            <div class="btn-container" v-else>
                <input class="inputBtn" value="Abgesendet" id="btn-sent">
            </div> 
        </form>
    </div>
</template>
  
<script setup>
    import '@/assets/css/form.css'
    import { RouterLink, RouterView } from "vue-router";
    import { onMounted, ref } from "vue";
    import axios from "axios";

    const newFehltag = ref("");
    const newVonFehltag = ref("");
    const newBisFehltag = ref("");

    let mehrereFehltage = ref(false);
    
    let formIntact = true;


    const handleZeitraumForm = () => {

        const fehltag = newFehltag.value;
        const vonFehltag = newVonFehltag.value;
        const bisFehltag = newBisFehltag.value;

        const zeitraum = {
            fehltag: fehltag,
            vonFehltag: vonFehltag,
            bisFehltag: bisFehltag,
        }

        formIntact = false;
        console.log("Email übergeben", zeitraum)

        newFehltag.value = "";
        newVonFehltag.value = "";
        newBisFehltag.value = "";

    }

    // const sendFormData = async (zeitraum) => {
    //     try {
    //         const response = await axios.post('url', zeitraum);
    //         if (response.status === 200) {
    //         console.log("Übertragung erfolgreich");
    //         resetSubmit();
    //         }
    //         else {
    //         alert('Etwas ist schiefgelaufen.');
    //         }
    //     }
    //     catch (error) {
    //         console.error('Error: ', error);
    //         alert('Fehler aufgetreten.', error);
    //     }
    // }

</script>