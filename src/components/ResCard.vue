<script setup lang="ts">
import { CDN_URL } from "@/Utilities/Constants";

const props = defineProps<{
  resData: any;
}>();
</script>

<template>
  <div
<<<<<<< HEAD
    class="group relative w-full rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden border border-gray-100"
  >
    <div class="relative overflow-hidden">
      <img
        class="w-full h-48 sm:h-52 lg:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
        alt="restaurant-image"
        :src="CDN_URL + resData.info.cloudinaryImageId"
        loading="lazy"
=======
    class="group relative m-2 p-0 w-full max-w-xs sm:w-[280px] rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden border border-gray-100 flex flex-col"
  >
    <div class="relative overflow-hidden">
      <img
        class="w-full h-40 sm:h-48 object-cover transition-transform duration-700 group-hover:scale-110"
        alt="res-logo"
        :src="CDN_URL + resData.info.cloudinaryImageId"
>>>>>>> 56c00fee16be17711e11b7a62f8776ad3086c716
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      ></div>
<<<<<<< HEAD

      <!-- Rating Badge -->
      <div
        class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1 shadow-sm"
      >
        <span class="text-yellow-500 font-bold text-sm">★</span>
        <span class="text-gray-700 font-semibold text-sm">{{
          resData.info.avgRating
        }}</span>
      </div>
    </div>

    <div class="p-4 sm:p-5">
      <h3
        class="font-bold text-lg sm:text-xl text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300"
      >
        {{ resData.info.name }}
      </h3>
      <h4 class="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
=======
    </div>

    <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between">
      <h3
        class="font-bold text-lg sm:text-xl text-gray-800 mb-1 sm:mb-2 truncate group-hover:text-blue-600 transition-colors duration-300"
      >
        {{ resData.info.name }}
      </h3>
      <h4
        class="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 truncate leading-relaxed"
      >
>>>>>>> 56c00fee16be17711e11b7a62f8776ad3086c716
        {{ resData.info.cuisines.join(", ") }}
      </h4>

      <div
        class="flex items-center justify-between pt-2 border-t border-gray-100"
      >
        <div class="flex items-center space-x-1">
<<<<<<< HEAD
          <span class="text-yellow-500 font-bold text-sm sm:text-base">★</span>
          <span class="text-gray-700 font-semibold text-sm sm:text-base">{{
            resData.info.avgRating
          }}</span>
          <span class="text-gray-500 text-xs"
            >({{ resData.info.totalRatingsString }})</span
          >
=======
          <span class="text-yellow-500 font-bold text-base sm:text-lg">★</span>
          <span class="text-gray-700 font-semibold text-sm sm:text-base">{{
            resData.info.avgRating
          }}</span>
>>>>>>> 56c00fee16be17711e11b7a62f8776ad3086c716
        </div>
        <span
          class="text-gray-600 font-medium text-xs sm:text-sm bg-gray-50 px-2 sm:px-3 py-1 rounded-full"
        >
          {{ resData.info.costForTwo }}
        </span>
      </div>

      <div
<<<<<<< HEAD
        class="mt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2"
=======
        class="mt-3 sm:mt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2"
>>>>>>> 56c00fee16be17711e11b7a62f8776ad3086c716
      >
        <button
          class="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
        >
          Order Now
        </button>
        <button
<<<<<<< HEAD
          class="bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors duration-300"
=======
          class="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors duration-300"
>>>>>>> 56c00fee16be17711e11b7a62f8776ad3086c716
        >
          View Menu
        </button>
      </div>
    </div>
  </div>
</template>
