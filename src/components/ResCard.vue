<script setup lang="ts">
import { defineProps } from "vue";
import { CDN_URL } from "@/Utilities/Constants";

const props = defineProps<{
  resData: any;
}>();
</script>

<template>
  <div class="group relative m-4 p-0 w-[280px] rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden border border-gray-100">
    <div class="relative overflow-hidden">
      <img class="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
        alt="res-logo"
        :src="CDN_URL + resData.info.cloudinaryImageId"/>
      <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    <div class="p-5">
      <h3 class="font-bold text-xl text-gray-800 mb-2 truncate group-hover:text-blue-600 transition-colors duration-300">
        {{ resData.info.name }}
      </h3>
      <h4 class="text-gray-600 text-sm mb-3 truncate leading-relaxed">
        {{ resData.info.cuisines.join(", ") }}
      </h4>

      <div class="flex items-center justify-between pt-2 border-t border-gray-100">
        <div class="flex items-center space-x-1">
          <span class="text-yellow-500 font-bold text-lg">★</span>
          <span class="text-gray-700 font-semibold">{{resData.info.avgRating}}</span>
        </div>
        <span class="text-gray-600 font-medium text-sm bg-gray-50 px-3 py-1 rounded-full">
          {{ resData.info.costForTwo }}
        </span>
      </div>

      <div class="mt-4 flex space-x-2">
        <button class="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105">
          Order Now
        </button>
        <button class="bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors duration-300">
          View Menu
        </button>
      </div>
    </div>
  </div>
</template>
