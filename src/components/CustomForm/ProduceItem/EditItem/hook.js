import {reactive, computed} from "vue"

export function useMain(props, emit){
  const state = reactive({
    show_dialog : computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value)
    })
  });

  return {state}
}
  
