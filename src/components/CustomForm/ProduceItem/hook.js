import { reactive } from "vue";

export function useMain() {
  const state = reactive({
    show_edit: false,
  });

  return { state };
}
