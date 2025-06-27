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
  <div class="flex my-10">
    <div>
      <span class="pi pi-search mr-2 ml-12"></span>
      <input class="border border-black" type="text" v-model="searchText" />
      <button
        class="ml-4 px-3 py-1 rounded-full bg-green-400 hover:bg-green-300 shadow-xl hover:shadow-sm cursor-pointer"
        @click="onSearch"
      >
        search
      </button>
    </div>
    <div>
      <button
        @click="filterTopRated"
        class="ml-3 px-3 py-1 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer"
      >
        Top Rated Restuarant
      </button>
    </div>
  </div>
 
  <div class="flex flex-wrap">
    <RouterLink v-for="restaurant in filteredRest" 
    :key="restaurant.info.id" 
    :to="`/restaurants/${restaurant.info.id}`">
      <ResCard :resData="restaurant" />
    </RouterLink>
  </div>
</template>