<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import logo from "@/assets/logo.svg";
import { onMounted, ref } from "vue";
import { Store } from "./stores/Store";

const onlineStatus = ref(navigator.onLine);
const cartItems = Store();

onMounted(() => {
  window.addEventListener("online", () => (onlineStatus.value = true));
  window.addEventListener("offline", () => (onlineStatus.value = false));
});
</script>

<template>
  <div class="flex justify-between shadow-lg mb-2 bg-green-100">
    <div>
      <img class="w-16 ml-8 mt-4" :src="logo" alt="" />
    </div>
    <nav class="flex items-center">
      <ul class="flex p-4 m-4">
        <li v-if="!onlineStatus" class="text-center px-3">
          Status: <span class="text-red-600">Offline</span>
        </li>
        <li v-else class="text-center px-3">
          Status: <span class="text-green-700">Online</span>
        </li>
        <li class="px-5">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li class="px-5">
          <RouterLink to="/about">About Us</RouterLink>
        </li>
        <li class="px-5">
          <RouterLink to="/contact">Contact Us</RouterLink>
        </li>
        <li class="pr-8 pl-5">
          <RouterLink to="/cart">Cart<span class="pi pi-shopping-cart ml-1"></span>
            <span
              class="absolute top-6 right-30 bg-red-500 text-white text-xs rounded-full h-4 w-6 flex items-center justify-center"
            >
              {{ cartItems.cartCount }}
            </span></RouterLink
          >
        </li>
        <button
          class="bg-gray-300 rounded-full px-4 cursor-pointer hover:bg-gray-400"
        >
          Login
        </button>
      </ul>
    </nav>
  </div>

  <RouterView />
</template>
