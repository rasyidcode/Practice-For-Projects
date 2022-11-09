<template>
    <div class=" py-5 border max-w-max mx-auto px-10">
        <h1 class=" font-bold uppercase mb-5 text-center">Create an account</h1>
        <form @submit.prevent="register">
            <div class=" grid grid-cols-1 gap-3">
                <input class=" border p-2" type="text" placeholder="Email" v-model="email" autocomplete="email">
                <input class=" border p-2" type="password" placeholder="Password" v-model="password"
                    autocomplete="new-password">
                <button type="submit" class=" bg-rose-500
                        px-5 py-1 rounded-full text-white
                        font-semibold uppercase
                        tracking-wide mx-auto">Submit</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { auth } from '../firebase-db'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
let isMenuActive = ref('');
const router = useRouter();
const register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCreds) => {
            console.log(userCreds);
            console.log('Successfully registered!');
            router.push('/feed');
        })
        .catch(error => {
            console.log(error.code);
            alert(error.message);
        });

}
onMounted(() => {
    isMenuActive = router.currentRoute.value.path == '/register';
})
</script>