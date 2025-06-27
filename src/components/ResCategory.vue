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
    <div class="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
      <div class="flex justify-between cursor-pointer" @click="handleClick">
        <p class="font-bold text-lg">
          {{ data.title }} ({{ data.itemCards?.length || 0 }})
        </p>
        <p
          class="transition-transform duration-200"
          :class="{ 'rotate-180': showItems }"
        >
          ↓
        </p>
      </div>
      <ItemList v-if="showItems && data.itemCards" :items="data.itemCards" />
    </div>
  </div>
</template>
