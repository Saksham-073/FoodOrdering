<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import logo from "@/assets/logo.svg";
import { onMounted, ref } from "vue";
import { Store } from "./stores/Store";

const isMenuOpen = ref(false);
const onlineStatus = ref(navigator.onLine);
const cartItems = Store();

onMounted(() => {
  window.addEventListener("online", () => (onlineStatus.value = true));
  window.addEventListener("offline", () => (onlineStatus.value = false));
});
</script>

<template>
  <div class="shadow-lg bg-green-100">
    <div class="flex items-center justify-between p-4">
      <img class="w-16" :src="logo" alt="Logo" />

      <button
        class="md:hidden text-gray-700 focus:outline-none"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span class="pi pi-bars"></span>
      </button>

      <nav class="hidden md:flex items-center space-x-6">
        <ul>
          <li v-if="!onlineStatus" class="text-center px-3">
            Status: <span class="text-red-600">Offline</span>
          </li>
          <li v-else class="text-center">
            Status: <span class="text-green-700">Online</span>
          </li>
        </ul>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About Us</RouterLink>
        <RouterLink to="/contact">Contact Us</RouterLink>
        <RouterLink to="/cart" class="relative">
          Cart <span class="pi pi-shopping-cart ml-1"></span>
          <span
            class="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full h-4 w-6 flex items-center justify-center"
          >
            {{ cartItems.cartCount }}
          </span>
        </RouterLink>
        <button class="bg-gray-300 rounded-full px-4 py-1 hover:bg-gray-400">
          Login
        </button>
      </nav>
    </div>

    <div
      v-show="isMenuOpen"
      class="md:hidden border-t border-gray-400 text-center px-4 pb-4 space-y-2 trans"
    >
      <ul>
        <li v-if="!onlineStatus" class="text-center mt-2 px-3">
          Status: <span class="text-red-600">Offline</span>
        </li>
        <li v-else class="text-center mt-3 px-3">
          Status: <span class="text-green-700">Online</span>
        </li>
        <li class="my-2"><RouterLink to="/">Home</RouterLink></li>
        <li class="my-2">
          <RouterLink to="/about">About Us</RouterLink><br />
        </li>
        <li class="my-2">
          <RouterLink to="/contact">Contact Us</RouterLink><br />
        </li>
        <li class="my-2">
          <RouterLink to="/cart" class="relative inline-block">
            Cart <span class="pi pi-shopping-cart ml-1"></span>
            <span
              class="absolute -top-2 -right-5 bg-red-500 text-white text-xs rounded-full h-4 w-6 flex items-center justify-center"
            >
              {{ cartItems.cartCount }}
            </span> </RouterLink
          ><br />
        </li>
        <li>
          <button class="bg-gray-300 rounded-full px-4 py-1 hover:bg-gray-400">
            Login
          </button>
        </li>
      </ul>
    </div>
  </div>

  <RouterView />
</template>
