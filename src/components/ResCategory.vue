<script setup lang="ts">
import ItemList from "./ItemList.vue";

const props = defineProps<{
  data: any;
  showItems: boolean;
  index: number;
}>();

const emit = defineEmits<{
  setShowIndex: [index: number | null];
}>();

function handleClick() {
  if (props.showItems) {
    emit("setShowIndex", null);
  } else {
    emit("setShowIndex", props.index);
  }
}
</script>

<template>
  <div>
    <div
      class="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 bg-gray-50 shadow-lg p-3 sm:p-4 mx-auto my-2 sm:my-4 rounded-xl"
    >
      <div
        class="flex justify-between items-center cursor-pointer"
        @click="handleClick"
      >
        <p class="font-bold text-base sm:text-lg">
          {{ data.title }} ({{ data.itemCards?.length || 0 }})
        </p>
        <p
          class="transition-transform duration-200 text-lg sm:text-xl"
          :class="{ 'rotate-180': showItems }"
        >
          ↓
        </p>
      </div>
      <ItemList v-if="showItems && data.itemCards" :items="data.itemCards" />
    </div>
  </div>
</template>
