import useForm from "../libs/form";
import FormRender from "../FormRender/FormRender.vue";
import { watch } from "vue";

export default {
  name: "component-preview",
  components: { FormRender },
  props: {
    preset_component_list: {
      type: Array,
      default: [],
    },
  },
  setup(props) {
    const { form, setComponentList } = useForm(props);
    setComponentList(props.preset_component_list);
    watch(
      () => props.preset_component_list,
      () => setComponentList(props.preset_component_list)
    );
    return {
      form,
    };
  },
};
