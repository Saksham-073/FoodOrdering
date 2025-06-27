<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const submitted = ref(false);

function handleSubmit() {
  submitted.value = true;
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50 p-4">
    <div class="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-10">
      <h1 class="text-4xl font-bold text-center text-blue-700 mb-2">
        Contact Us
      </h1>
      <p class="text-center text-gray-500 mb-8">
        We'd love to hear from you! Fill out the form below and we'll get back
        to you soon.
      </p>
      <div v-if="submitted" class="text-center text-green-600 text-lg font-semibold py-8">
        Thank you for reaching out! We'll get back to you soon.
      </div>
      <form v-else @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label for="name" class="block text-gray-700 font-medium mb-1">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            v-model="form.name"
            required
            class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label for="email" class="block text-gray-700 font-medium mb-1">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            v-model="form.email"
            required
            class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label for="message" class="block text-gray-700 font-medium mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            v-model="form.message"
            required
            rows="5"
            class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all resize-none"
            placeholder="Type your message here..."
          />
        </div>
        <button type="submit" class="w-full bg-gradient-to-r from-blue-500 to-orange-400 text-white font-bold py-3 rounded-xl shadow-lg hover:from-blue-600 hover:to-orange-500 transition-all text-lg mt-2">
          Send Message
        </button>
      </form>
    </div>
  </div>
</template>
