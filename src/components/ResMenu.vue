<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useRestaurantMenu } from "@/Utilities/UseRestaurantMenu";
import RestaurantCategory from "@/components/ResCategory.vue";
import Shimmer from "@/components/Shimmer.vue";
import { useIsDesktop } from "@/Utilities/useIsDesktop";

const route = useRoute();

const { resInfo, error, loading, fetchMenu } = useRestaurantMenu(() =>
  Number.parseInt(route.params.resId as string)
);

const isDesktop = useIsDesktop();

const showIndex = ref<number | null>(null);

const restaurantInfo = computed(() => {
  if (!resInfo.value) return null;

  const info = resInfo.value?.cards?.[2]?.card?.card?.info;
  if (!info) {
    console.error("Restaurant info not found in expected structure");
    return null;
  }

  return info;
});

const categories = computed(() => {
  if (!resInfo.value) return [];

  const cardId = isDesktop.value ? 4 : 5;
  const cats =
    resInfo.value?.cards?.[
      cardId
    ]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c: any) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return cats;
});

watch(isDesktop, () => {
  fetchMenu();
});

const setShowIndex = (index: number | null) => {
  showIndex.value = index;
};

const reloadPage = () => {
  window.location.reload();
};
</script>

<template>
  <div>
    <Shimmer v-if="loading" />

    <div
      v-else-if="error"
      class="p-6 bg-white rounded-lg shadow-lg text-center"
    >
      <h1 class="text-2xl font-bold text-red-600 mb-4">Error Loading Menu</h1>
      <p class="text-gray-600">{{ error }}</p>
      <button
        @click="reloadPage"
        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Try Again
      </button>
    </div>

    <div v-else-if="!restaurantInfo" class="p-6 text-center text-red-600">
      Restaurant information not available
    </div>

    <div
      v-else-if="!categories || categories.length === 0"
      class="p-6 bg-white rounded-lg shadow-lg text-center"
    >
      <h1 class="text-3xl font-bold text-gray-800 my-2">
        {{ restaurantInfo.name }}
      </h1>
      <p class="text-gray-600 text-lg mb-6">
        {{ restaurantInfo.cuisines?.join(", ") }} -
        <span class="font-semibold">{{
          restaurantInfo.costForTwoMessage
        }}</span>
      </p>
      <div class="text-gray-500">No menu categories available</div>
    </div>

    <div v-else class="p-6 bg-white rounded-lg shadow-lg text-center">
      <h1 class="text-3xl font-bold text-gray-800 my-2">
        {{ restaurantInfo.name }}
      </h1>
      <p class="text-gray-600 text-lg mb-6">
        {{ restaurantInfo.cuisines?.join(", ") }} -
        <span class="font-semibold">{{
          restaurantInfo.costForTwoMessage
        }}</span>
      </p>

      <RestaurantCategory
        v-for="(category, index) in categories"
        :key="category?.card?.card?.title || index"
        :data="category?.card?.card"
        :showItems="index === showIndex"
        :index="index"
        @setShowIndex="setShowIndex"
      />
    </div>
  </div>
</template>
