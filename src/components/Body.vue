<script setup lang="ts">
import ResCard from "@/components/ResCard.vue";
import { SWIGGY_API } from "@/Utilities/Constants";
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";

const resLists = ref<any[]>([]);
const filteredRest = ref<any[]>([]);
const searchText = ref("");
const loading = ref(false);

const fetchData = async () => {
  loading.value = true;
  try {
    const response = await fetch(SWIGGY_API);
    const data = await response.json();
    console.log(data);
    const restaurants =
      data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    resLists.value = restaurants;
    filteredRest.value = restaurants;
    console.log("fetched", resLists.value);
  } catch (error) {
    console.log("error");
  } finally {
    loading.value = false;
  }
};
onMounted(() => {
  fetchData();
});

const onSearch = () => {
  filteredRest.value = resLists.value.filter((res) =>
    res.info.name.toLowerCase().includes(searchText.value.toLowerCase())
  );
};

const filterTopRated = () => {
  filteredRest.value = resLists.value.filter((res) => res.info.avgRating > 4.4);
};

const clearSearch = () => {
  searchText.value = "";
  filteredRest.value = resLists.value;
};

const handleKeyPress = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    onSearch();
  }
};
</script>

<template>
<<<<<<< HEAD
  <!-- Search and Filter Section -->
  <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
    <!-- Mobile Layout (Stacked) -->
    <div class="block md:hidden space-y-4">
      <!-- Search Bar for Mobile -->
      <div class="bg-white rounded-xl shadow-md p-4">
        <div class="flex items-center space-x-3">
          <div class="flex-shrink-0">
            <span class="pi pi-search text-gray-400 text-lg"></span>
          </div>
          <div class="flex-1">
            <input
              class="w-full border-0 focus:outline-none focus:ring-0 text-gray-900 placeholder-gray-500 text-base"
              type="text"
              v-model="searchText"
              placeholder="Search restaurants..."
              @keypress="handleKeyPress"
            />
          </div>
          <div class="flex space-x-2">
            <button
              v-if="searchText"
              @click="clearSearch"
              class="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              title="Clear search"
            >
              <span class="pi pi-times text-sm"></span>
            </button>
            <button
              @click="onSearch"
              class="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors duration-200 shadow-sm"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <!-- Filter Button for Mobile -->
      <div class="flex justify-center">
        <button
          @click="filterTopRated"
          class="flex items-center px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 cursor-pointer font-semibold shadow-lg transition-all duration-200 transform hover:scale-105"
        >
          <span class="pi pi-star mr-2 text-lg"></span>
          <span class="text-sm sm:text-base">Top Rated Restaurants</span>
        </button>
      </div>
    </div>

    <!-- Desktop Layout (Horizontal) -->
    <div
      class="hidden md:flex items-center justify-between bg-white rounded-xl shadow-md p-6"
    >
      <!-- Search Section -->
      <div class="flex items-center space-x-4 flex-1 max-w-2xl">
        <div class="relative flex-1">
          <div
            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
          >
            <span class="pi pi-search text-gray-400"></span>
          </div>
          <input
            class="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
            type="text"
            v-model="searchText"
            placeholder="Search restaurants by name..."
            @keypress="handleKeyPress"
          />
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-3 space-x-2"
          >
            <button
              v-if="searchText"
              @click="clearSearch"
              class="p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              title="Clear search"
            >
              <span class="pi pi-times text-sm"></span>
            </button>
            <button
              @click="onSearch"
              class="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md font-medium transition-colors duration-200"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <!-- Filter Section -->
      <div class="ml-6">
        <button
          @click="filterTopRated"
          class="flex items-center px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 cursor-pointer font-semibold shadow-lg transition-all duration-200 transform hover:scale-105"
        >
          <span class="pi pi-star mr-2"></span>
          Top Rated
        </button>
      </div>
    </div>

    <!-- Results Counter -->
    <div class="mt-4 px-4">
      <p class="text-sm text-gray-600">
        Showing {{ filteredRest.length }} restaurant{{
          filteredRest.length !== 1 ? "s" : ""
        }}
        <span v-if="searchText" class="text-blue-600 font-medium">
          for "{{ searchText }}"
        </span>
      </p>
    </div>
  </div>

  <!-- Restaurant Grid -->
  <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
=======
  <div
    class="flex flex-col sm:flex-row items-center justify-between gap-4 my-6 sm:my-10 px-2 sm:px-4"
  >
    <div class="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-2">
      <input
        @keyup.enter="onSearch"
        class="flex-1 sm:w-64 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
        type="text"
        v-model="searchText"
        placeholder="Search restaurants..."
      />
      <button
        class="mt-2 sm:mt-0 ml-0 sm:ml-2 px-4 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold shadow transition-colors duration-200"
        @click="onSearch"
      >
        Search
      </button>
    </div>
    <div class="w-full sm:w-auto mt-2 sm:mt-0 flex justify-end">
      <button
        @click="filterTopRated"
        class="w-full sm:w-auto px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold shadow transition-colors duration-200"
      >
        <span class="pi pi-star mr-2"></span>Top Rated Restaurant
      </button>
    </div>
  </div>

  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 sm:px-4"
  >
    <RouterLink
      v-for="restaurant in filteredRest"
      :key="restaurant.info.id"
      :to="`/restaurants/${restaurant.info.id}`"
      class="w-full flex justify-center"
>>>>>>> 56c00fee16be17711e11b7a62f8776ad3086c716
    >
      <RouterLink
        v-for="restaurant in filteredRest"
        :key="restaurant.info.id"
        :to="`/restaurants/${restaurant.info.id}`"
        class="transform transition-all duration-300 hover:scale-105"
      >
        <ResCard :resData="restaurant" />
      </RouterLink>
    </div>

    <!-- No Results Message -->
    <div v-if="filteredRest.length === 0" class="text-center py-12">
      <div class="text-gray-400 text-6xl mb-4">🔍</div>
      <h3 class="text-xl font-semibold text-gray-600 mb-2">
        No restaurants found
      </h3>
      <p class="text-gray-500 mb-4">
        <span v-if="searchText">Try searching with different keywords</span>
        <span v-else>No restaurants match your current filter</span>
      </p>
      <button
        @click="clearSearch"
        class="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors duration-200"
      >
        Clear Search
      </button>
    </div>
  </div>
</template>
