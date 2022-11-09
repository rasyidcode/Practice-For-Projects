<template>
  <div class=" container mx-auto">
    <nav class=" py-3 px-10 my-5 flex justify-center gap-5 uppercase font-bold
      tracking-wide underline text-emerald-600
      bg-gray-200 rounded-full text-center">
      <router-link to="/" class=" hover:text-emerald-800 transition
        duration-150 ease-in-out
         ">Home</router-link>
      <router-link v-if="isLoggedIn" to="/feed" class=" hover:text-emerald-800 transition
        duration-150 ease-in-out">Feed</router-link>
      <a v-if="isLoggedIn" @click.prevent="signOut()" class=" text-red-500 cursor-pointer">Logout</a>
      <div class=" flex justify-center gap-5" v-else>
        <router-link to="/register" class=" hover:text-emerald-800 transition
        duration-150 ease-in-out">Register</router-link>
        <router-link to="/login" class=" hover:text-emerald-800 transition
          duration-150 ease-in-out">Login</router-link>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { auth } from './firebase-db'
import { useRouter } from 'vue-router';

const router = useRouter();
const isLoggedIn = ref(true);

auth.onAuthStateChanged(function (user) {
  if (user) {
    isLoggedIn.value = true;
  } else {
    isLoggedIn.value = false;
  }
});

const signOut = () => {
  auth.signOut();
  router.push('/')
}
</script>

<style>
nav a.router-link-exact-active {
  color: rgb(6 95 70);
}
</style>
