import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const Store = defineStore("cart", () => {
  const cart = ref<any[]>([]);

  const cartCount = computed(() => cart.value.length);

  function addToCart(item: any) {
    cart.value.push(item);
  }

  function clearCart() {
    cart.value = [];
  }

  return { cart, cartCount, addToCart, clearCart };
});
