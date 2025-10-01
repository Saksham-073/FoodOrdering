declare module "vue3-toastify" {
  import { App } from "vue";

  export interface ToastOptions {
    position?:
      | "top-right"
      | "top-left"
      | "top-center"
      | "bottom-right"
      | "bottom-left"
      | "bottom-center";
    autoClose?: number;
    hideProgressBar?: boolean;
    closeOnClick?: boolean;
    pauseOnHover?: boolean;
    theme?: "light" | "dark" | "colored";
  }

  export interface ToastContainerOptions extends ToastOptions {
    // Additional container options if needed
  }

  export interface Toast {
    (message: string, options?: ToastOptions): void;
    success(message: string, options?: ToastOptions): void;
    error(message: string, options?: ToastOptions): void;
    info(message: string, options?: ToastOptions): void;
    warning(message: string, options?: ToastOptions): void;
  }

  export const toast: Toast;

  export default function Vue3Toastify(
    app: App,
    options?: ToastContainerOptions
  ): void;
}
