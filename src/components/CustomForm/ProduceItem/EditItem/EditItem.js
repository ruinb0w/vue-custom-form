import { useMain } from "./hook";
import FormItem from "../../../../../../FormItem/FormItem.vue";

export default {
  name: "EditItem",
  components: { FormItem },
  props: { modelValue: Boolean },
  setup(props, { emit }) {
    const main = useMain(props, emit);

    return {
      ...main,
    };
  },
};
