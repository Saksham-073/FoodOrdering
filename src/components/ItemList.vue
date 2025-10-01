<script setup lang="ts">
import { CDN_URL } from "@/Utilities/Constants";
import { Store } from "@/stores/Store";
import { toast } from "vue3-toastify";

const props = defineProps<{ items: any[] }>();
const store = Store();

function handleAddItem(item: any) {
  store.addToCart(item);
  toast.success(`${item.card.info.name} added to cart!`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
  });
}

function hideImage(e: Event) {
  (e.target as HTMLImageElement).style.display = "none";
}
</script>

<template>
  <div>
    <div
      v-if="!items || !Array.isArray(items) || items.length === 0"
      class="p-8 text-center text-gray-400 text-lg"
    >
      No items available
    </div>
    <div v-else>
      <div
        v-for="(item, index) in items"
        :key="item.card?.info?.id || index"
        class="p-6 m-4 bg-white rounded-xl shadow-md border border-gray-100 flex justify-between items-center hover:shadow-lg transition-shadow duration-200"
      >
        <div class="w-8/12">
          <div class="py-1 flex items-center gap-2">
            <span class="font-semibold text-blue-700">{{
              item.card.info.category || "N/A"
            }}</span>
            <span class="text-gray-500">-</span>
            <span class="text-lg font-bold text-green-700">
              ₹{{
                item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.finalPrice
                  ? item.card.info.finalPrice / 100
                  : "N/A"
              }}
            </span>
          </div>
          <p class="text-sm text-gray-500 mt-1">
            {{ item.card.info.description || "No description available" }}
          </p>
        </div>
        <div class="w-4/12 flex flex-col items-center gap-2">
          <img
            v-if="item.card.info.imageId"
            class="w-24 h-24 object-cover rounded-lg border border-gray-200 mb-2"
            :src="CDN_URL + item.card.info.imageId"
            :alt="item.card.info.name || 'Food item'"
            @error="hideImage($event)"
          />
          <button
            class="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition-colors duration-200"
            @click="handleAddItem(item)"
          >
            Add +
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
