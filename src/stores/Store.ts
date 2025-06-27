import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";

export const Store = defineStore("cart", () => {
  
  const storedCart = localStorage.getItem("cart");
  const cart = ref<any[]>(storedCart ? JSON.parse(storedCart) : []);

  const cartCount = computed(() => cart.value.length);

  function addToCart(item: any) {
    cart.value.push(item);
  }

  function clearCart() {
    cart.value = [];
  }

  function clearItem(itemId: any) {
    const index = cart.value.findIndex((item) => item.card?.info.id === itemId);
    if (index !== -1) {
      cart.value.splice(index, 1);
    }
  }

  watch(
    cart,
    (newCart) => {
      localStorage.setItem("cart", JSON.stringify(newCart));
    },
    { deep: true }
  );

  return { cart, cartCount, addToCart, clearCart, clearItem };
});
