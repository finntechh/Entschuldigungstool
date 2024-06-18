
<template>
    <div class="form-container">
        <form action="" @submit.prevent="handleEmpfaengerForm()">
            <h3>Empfänger</h3>
            <label for="schuleName">
            <label for="lehrerName">
                <p>Name des Lehrers</p>
            </label> 
            <input class="text-input" type="text" name="lehrerName" v-model="newLehrerName"> 

            <label for="lehrerGender">
                <p>Geschlecht des Lehrers</p>
            </label>
            <input class="check-input" type="checkbox" name="weiblich" id="wCeckbox" v-model="newLehrerFemale"> weiblich
            <input class="check-input" type="checkbox" name="maennlich" id="mCeckbox" v-model="newLehrerMale"> männlich
            <p v-if="newLehrerFemale && newLehrerMale == true">Bitte nur ein Geschlecht auswählen!</p>
            <p v-else>Bitte ein Geschlecht auswählen.</p> 

            <p>Name der Schule</p>
            </label> 
            <input class="text-input" type="text" name="schuleName" v-model="newSchuleName">

            <label for="schuleAdresse">
                <p>Adresse der Schule</p>
            </label> 
            <input class="text-input" type="text" name="schuleAdresse" v-model="newSchuleAdresse">

            <div class="adresse-inputs">
                <div class="plz">
                    <p>Plz</p>
                    <input class="plz-input" type="number" name="schulePlz" v-model="newSchulePlz">
                </div>
                <div class="stadt">
                    <p>Stadt</p>
                    <input class="stadt-input" type="text" name="schuleStadt" v-model="newSchuleStadt">
                </div>
            </div>

            <div class="btn-container" v-if="!formSubmitted">
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

    const newSchuleName = ref("");
    const newLehrerName = ref("");
    const newLehrerFemale = ref(false);
    const newLehrerMale = ref(false);
    const newSchuleAdresse = ref("");
    const newSchuleStadt =  ref("");
    const newSchulePlz =  ref("");

    let formSubmitted = false;


    const handleEmpfaengerForm = () => {
        const lehrerName = newLehrerName.value
        const lehrerFemale = newLehrerFemale.value
        const lehrerMale = newLehrerMale.value
        const schuleName = newSchuleName.value
        const schuleAdresse = newSchuleAdresse.value
        const schulePlz = newSchulePlz.value
        const schuleStadt = newSchuleStadt.value

        const empfaenger = {
        lehrerName: lehrerName,
        lehrerFemale: lehrerFemale,
        lehrerMale: lehrerMale,
        schuleName: schuleName,
        schuleAdresse: schuleAdresse,
        schulePlz: schulePlz,
        schuleStadt: schuleStadt
        }
        //sendFormData(empfaenger);
        formSubmitted = true;
        console.log("Email übergeben", empfaenger)

        newSchuleName.value = "";
        newLehrerName.value = "";
        newLehrerFemale.value = false;
        newLehrerMale.value = false;
        newSchuleAdresse.value = "";
        newSchuleStadt.value =  "";
        newSchulePlz.value = "";
    }

    const sendFormData = async (empfaenger) => {
        try {
            const response = await axios.post('url', empfaenger);
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