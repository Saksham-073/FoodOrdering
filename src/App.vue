<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import download from "@/assets/download.png";
import { onMounted, onUnmounted, ref } from "vue";
import { Store } from "./stores/Store";

const isMenuOpen = ref(false);
const onlineStatus = ref(navigator.onLine);
const cartItems = Store();
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement;
  if (isMobileMenuOpen.value && !target.closest("header")) {
    closeMobileMenu();
  }
};

onMounted(() => {
  window.addEventListener("online", () => (onlineStatus.value = true));
  window.addEventListener("offline", () => (onlineStatus.value = false));
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
<<<<<<< HEAD
  <!-- Navigation Header -->
  <header class="bg-green-100 shadow-lg mb-2">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <img class="h-12 w-auto" :src="download" alt="FoodApp Logo" />
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <!-- Online Status -->
          <div class="flex items-center space-x-2">
            <div
              class="w-2 h-2 rounded-full"
              :class="onlineStatus ? 'bg-green-500' : 'bg-red-500'"
            ></div>
            <span
              class="text-sm font-medium"
              :class="onlineStatus ? 'text-green-700' : 'text-red-600'"
            >
              {{ onlineStatus ? "Online" : "Offline" }}
            </span>
          </div>

          <!-- Navigation Links -->
          <RouterLink
            to="/"
            class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            active-class="text-blue-600 bg-blue-50"
          >
            Home
          </RouterLink>

          <RouterLink
            to="/about"
            class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            active-class="text-blue-600 bg-blue-50"
          >
            About Us
          </RouterLink>

          <RouterLink
            to="/contact"
            class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            active-class="text-blue-600 bg-blue-50"
          >
            Contact Us
          </RouterLink>

          <!-- Cart Link -->
          <div class="relative">
            <RouterLink
              to="/cart"
              class="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              active-class="text-blue-600 bg-blue-50"
            >
              <span class="pi pi-shopping-cart mr-1"></span>
              Cart
              <span
                v-if="cartItems.cartCount > 0"
                class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold"
              >
                {{ cartItems.cartCount }}
              </span>
            </RouterLink>
          </div>

          <!-- Login Button -->
          <button
            class="bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200"
          >
            Login
          </button>
        </nav>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Hamburger Icon -->
            <svg
              v-if="!isMobileMenuOpen"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- Close Icon -->
            <svg
              v-else
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <Transition name="mobile-menu">
      <div
        v-show="isMobileMenuOpen"
        class="md:hidden bg-white border-t border-gray-200 shadow-lg mobile-menu"
      >
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <!-- Online Status for Mobile -->
          <div class="flex items-center space-x-2 px-3 py-2">
            <div
              class="w-2 h-2 rounded-full"
              :class="onlineStatus ? 'bg-green-500' : 'bg-red-500'"
            ></div>
            <span
              class="text-sm font-medium"
              :class="onlineStatus ? 'text-green-700' : 'text-red-600'"
            >
              {{ onlineStatus ? "Online" : "Offline" }}
            </span>
          </div>

          <!-- Mobile Navigation Links -->
          <RouterLink
            to="/"
            @click="closeMobileMenu"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
            active-class="text-blue-600 bg-blue-50"
          >
            Home
          </RouterLink>

          <RouterLink
            to="/about"
            @click="closeMobileMenu"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
            active-class="text-blue-600 bg-blue-50"
          >
            About Us
          </RouterLink>

          <RouterLink
            to="/contact"
            @click="closeMobileMenu"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
            active-class="text-blue-600 bg-blue-50"
          >
            Contact Us
          </RouterLink>

          <!-- Mobile Cart Link -->
          <div class="relative">
            <RouterLink
              to="/cart"
              @click="closeMobileMenu"
              class="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
              active-class="text-blue-600 bg-blue-50"
            >
              <span class="pi pi-shopping-cart mr-2"></span>
              Cart
              <span
                v-if="cartItems.cartCount > 0"
                class="ml-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold"
              >
                {{ cartItems.cartCount }}
              </span>
            </RouterLink>
          </div>

          <!-- Mobile Login Button -->
          <button
            @click="closeMobileMenu"
            class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
          >
            Login
          </button>
        </div>
      </div>
    </Transition>
  </header>
=======
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
>>>>>>> 56c00fee16be17711e11b7a62f8776ad3086c716

  <RouterView />
</template>
