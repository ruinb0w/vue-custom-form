import useCompnent from "../libs/component";
import useForm from "../libs/form";

export default {
  name: "component-panel",
  setup() {
    const { getTypes } = useCompnent();
    const { addComponent } = useForm();
    return {
      types: getTypes(),
      addComponent,
    };
  },
};
