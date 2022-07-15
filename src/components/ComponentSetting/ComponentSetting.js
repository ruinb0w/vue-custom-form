import FormRender from "../FormRender/FormRender.vue";
import useForm from "../libs/form";

export default {
  name: "component-setting",
  components: { FormRender },
  setup() {
    const { form } = useForm();
    return {
      form,
    };
  },
};
