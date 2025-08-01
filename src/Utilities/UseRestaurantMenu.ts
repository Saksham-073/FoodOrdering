import { ref, toValue, watchEffect, type MaybeRefOrGetter } from "vue";
import { MENU_API } from "./Constants";

export function useRestaurantMenu(resId: MaybeRefOrGetter<number>) {
  const resInfo = ref<any>(null);
  const error = ref<string | null>(null);
  const loading = ref(true);

  async function fetchMenu() {
    try {
      loading.value = true;
      error.value = null;
      const data = await fetch(MENU_API + toValue(resId));
      if (!data.ok) throw new Error(`HTTP error! status: ${data.status}`);
      const json = await data.json();
      if (json.data) {
        resInfo.value = json.data;
      } else {
        throw new Error("No data received from API");
      }
    } catch (err: any) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  }

  watchEffect(() => {
    if (toValue(resId)) fetchMenu();
  });

  return { resInfo, error, loading, fetchMenu };
}
