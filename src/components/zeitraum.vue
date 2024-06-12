
<template>
    <div class="form-container">
        <form action="" @submit.prevent="handleAbsenderForm()">
            <h3>Zeitraum</h3>
            <label for="schuelerName">
                <p>Name</p>
            </label> 
            <input class="text-input" type="text" name="schuelerName" v-model="newSchuelerName"> 

            <label for="schuelerAdresse">
                <p>Adresse</p>
            </label> 
            <input class="text-input" type="text" name="schuelerAdresse" v-model="newSchuelerAdresse">

            <div class="adresse-inputs">
                <div class="plz">
                    <p>Plz</p>
                    <input class="plz-input" type="number" name="schuelerPlz" v-model="newSchuelerPlz">
                </div>
                <div class="stadt">
                    <p>Stadt</p>
                    <input class="stadt-input" type="text" name="schuelerStadt" v-model="newSchuelerStadt">
                </div>
            </div>

            <div class="btn-container" v-if="!formSubmitted">
                <input class="inputBtn" type="submit" value="Absenden">
            </div> 
            <div class="btn-container" v-else>
                <input class="inputBtn" type="submit" value="Abgesendet" id="btn-sent">
            </div> 
            
        </form>
    </div>
</template>
  
<script setup>
    import '@/assets/css/form.css'
    import { RouterLink, RouterView } from "vue-router";
    import { onMounted, ref } from "vue";
    import axios from "axios";

    const newSchuelerName = ref("");
    const newSchuelerAdresse = ref("");
    const newSchuelerStadt =  ref("");
    const newSchuelerPlz =  ref("");

    let formSubmitted = false;


    const handleAbsenderForm = () => {

        const schuelerName = newSchuelerName.value
        const schuelerAdresse = newSchuelerAdresse.value
        const schuelerStadt = newSchuelerStadt.value
        const schuelerPlz = newSchuelerPlz.value

        const absender = {
            schuelerName: schuelerName,
            schuelerAdresse: schuelerAdresse,
            schuelerStadt: schuelerStadt,
            schuelerPlz: schuelerPlz,
        }

        formSubmitted = true;
        console.log("Email übergeben", absender)

        newSchuelerName.value = "";
        newSchuelerAdresse.value = "";
        newSchuelerStadt.value = "";
        newSchuelerPlz.value = "";
    }

    const sendFormData = async (absender) => {
        try {
            const response = await axios.post('url', absender);
            if (response.status === 200) {
            console.log("Übertragung erfolgreich");
            resetSubmit();
            }
            else {
            alert('Etwas ist schiefgelaufen.');
            }
        }
        catch (error) {
            console.error('Error: ', error);
            alert('Fehler aufgetreten.', error);
        }
    }

</script>