import { onMounted, onUnmounted, readonly, ref } from "vue";

export const useIsDesktop = () => {
  const isDesktop = ref(true);

  function checkIfDesktop() {
    const nav = navigator.userAgent;

    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        nav
      );
    isDesktop.value = !isMobile;
  }

  onMounted(checkIfDesktop);

  return readonly(isDesktop);
};
