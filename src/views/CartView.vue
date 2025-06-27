<script setup lang="ts">
import { Store } from "@/stores/Store";
import { CDN_URL } from "@/Utilities/Constants";

const store = Store();

const handleClearCart = () => {
  store.clearCart();
};

const handleClearItem=(itemId:any)=>{
    store.clearItem(itemId);
}
</script>

<template>
  <div class="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-lg mt-10">
    <h1 class="text-3xl font-extrabold mb-6 text-center text-blue-700">
      Your Cart
    </h1>
    <div
      v-if="store.cart.length === 0"
      class="text-gray-400 text-center text-lg py-10"
    >
      <span class="block text-5xl mb-4">🛒</span>
      Your cart is empty.
    </div>
    <div v-else>
      <button
        @click="handleClearCart"
        class="bg-red-500 hover:bg-red-600 rounded-full px-4 py-2 text-white font-semibold mb-6 shadow transition-colors duration-200 float-right"
      >
        Clear Cart
      </button>
      <div class="clear-both"></div>
      <div
        v-for="(item, index) in store.cart"
        :key="item.card?.info?.id || index"
        class="mb-6 p-6 border border-gray-200 rounded-xl shadow-sm flex items-center gap-6 bg-gray-50 hover:shadow-md transition-shadow duration-200"
      ><span @click="handleClearItem(item.card.info.id)" class="cursor-pointer font-bold">x</span>
        <img
          v-if="item.card.info.imageId"
          :src="CDN_URL + item.card.info.imageId"
          alt="Food item"
          class="w-20 h-20 object-cover rounded-lg border border-gray-200"
        />
        <div class="flex-1">
          <div class="font-bold text-xl text-gray-800 mb-1">
            {{ item.card.info.name }}
          </div>
          <div class="text-blue-600 font-semibold text-lg mb-1">
            ₹{{
              item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.finalPrice
                ? item.card.info.finalPrice / 100
                : "N/A"
            }}
          </div>
          <div class="text-sm text-gray-500">
            {{ item.card.info.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
