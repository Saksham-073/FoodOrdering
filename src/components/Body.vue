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
</script>

<template>
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
    >
      <ResCard :resData="restaurant" />
    </RouterLink>
  </div>
</template>
