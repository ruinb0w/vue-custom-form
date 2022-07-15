import useForm from "../../libs/form";
import ItemWrapper from "../ItemWrapper/ItemWrapper.vue";

export default {
  name: "f-select",
  components: { ItemWrapper },
  props: {
    component: {
      type: Object,
      delete: null,
    },
  },
  setup() {
    const { selectComponent } = useForm();
    return {
      selectComponent,
    };
  },
};
