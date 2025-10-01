<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-3 sm:gap-4 p-4 sm:p-8 w-full max-w-xl mx-auto">
    <div
      v-for="n in 4"
      :key="n"
      class="animate-pulse flex flex-col sm:flex-row gap-3 sm:gap-4 items-center bg-gray-100 rounded-xl p-4 sm:p-6 shadow"
    >
      <div class="w-16 h-16 sm:w-20 sm:h-20 bg-gray-300 rounded-lg"></div>
      <div class="flex-1 space-y-2 sm:space-y-4 py-1">
        <div class="h-3 sm:h-4 bg-gray-300 rounded w-3/4"></div>
        <div class="h-3 sm:h-4 bg-gray-200 rounded w-1/2"></div>
        <div class="h-2 sm:h-3 bg-gray-200 rounded w-1/3"></div>
      </div>
    </div>
  </div>
</template>
