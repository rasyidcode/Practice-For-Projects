<template>
    <div class=" py-5 border max-w-max mx-auto px-10">
        <h1 class=" font-bold uppercase mb-5 text-center">Login</h1>
        <form @submit.prevent="login">
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

        <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { auth } from '../firebase-db'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
let isMenuActive = ref('');

const router = useRouter();
const login = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCreds) => {
            console.log(userCreds);
            console.log('Successfully login!');
            router.push('/feed');
        })
        .catch(error => {
            switch (error.code)  {
                case 'auth/invalid-email':
                    errorMessage.value = 'Invalid email';
                    break;
                case 'auth/user-not-found':
                    errorMessage.value = 'No account with that email was found';
                    break;
                case 'auth/wrong-password':
                    errorMessage = 'Incorrect password';
                    break;
                default:
                    errorMessage = 'Email or password was incorrect';
            }
        });

}
onMounted(() => {
    isMenuActive = router.currentRoute.value.path == '/login';
})
</script>