
<template>
    <div class="form-container">
        <form action="">
            <h3>Empfänger</h3>
            <label for="schuleName">
            <label for="lehrerName">
                <p>Name des Lehrers</p>
            </label> 
            <input class="text-input" type="text" name="lehrerName" v-model="newLehrerName"> 
            <label for="lehrerGender">
                <p>Geschlecht des Lehrers</p>
            </label>
            <input class="check-input" type="checkbox" name="weiblich" id="wCeckbox"> weiblich
            <input class="check-input" type="checkbox" name="maennlich" id="mCeckbox"> männlich
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
        </form>
    </div>
</template>
  
<script setup>
    import '@/assets/css/form.css'
    import { RouterLink, RouterView } from "vue-router";
    import { onMounted, ref } from "vue";

    const newSchuleName = ref("");
    const newLehrerName = ref("");
    const newLehrerGender = ref("");
    const newSchuleAdresse = ref("");
    const newSchuleStadt =  ref("");
    const newSchulePlz =  ref("");

    const lehrerName = newLehrerName.value
    const lehrerGender = newLehrerGender.value
    const schuleName = newSchuleName.value
    const schuleAdresse = newSchuleAdresse.value
    const schulePlz = newSchulePlz.value
    const schuleStadt = newSchuleStadt.value

    const empfaenger = {
        lehrerName: lehrerName,
        lehrerGender: lehrerGender,
        schuleName: schuleName,
        schuleAdresse: schuleAdresse,
        schulePlz: schulePlz,
        schuleStadt: schuleStadt
    }

</script>