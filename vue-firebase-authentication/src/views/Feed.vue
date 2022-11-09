<template>
    <div>
        <h1 class=" text-center text-3xl font-bold uppercase">Feed</h1>
        <p class=" text-center text-xl tracking-wide">This page is for users only</p>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { onBeforeMount } from 'vue';
import { auth } from '../firebase-db';

const router = useRouter();
const authListener = auth.onAuthStateChanged(function(user) {
    if (!user) {
        alert('you must be logged in to view this. redirecting to the home page');
        router.push('/');
    }
});

onBeforeMount(() => {
    authListener();
});
</script>