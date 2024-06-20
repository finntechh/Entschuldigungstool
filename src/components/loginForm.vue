

<template>
    <div class="form-container">
        <form action="" @submit.prevent="handleLoginForm()">
            <div class="label-input">
                <label for="benutzername">Benutzername</label>
                <input type="text" v-model="newBenutzername">
            </div>
            <div class="label-input">
                <label for="passwort">Passwort</label>
                <input type="password" v-model="newPasswort">
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
    import { onMounted, ref } from "vue";

    const newBenutzername = ref("");
    const newPasswort = ref("");

    let formSubmitted = false;

    const handleLoginForm = () => {

        const benutzername = newBenutzername.value;
        const passwort = newPasswort.value;

        const login = {
        benutzername: benutzername,
        passwort: passwort
        }
        //sendFormData(login);
        formSubmitted = true;
        console.log("Login-Daten übergeben", login)

    }


</script>