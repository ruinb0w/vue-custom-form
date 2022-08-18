import FText from "../form_items/FText/FText.vue";
import FTextarea from "../form_items/FTextarea/FTextarea.vue";
import FSwitcher from "../form_items/FSwitcher/FSwitcher.vue";
import FRadio from "../form_items/FRadio/FRadio.vue";
import FCheckbox from "../form_items/FCheckbox/FCheckbox.vue";
import FSelect from "../form_items/FSelect/FSelect.vue";
import FDate from "../form_items/FDate/FDate.vue";
import ProduceItem from "../CustomForm/ProduceItem/ProduceItem.vue";

import useForm from "../libs/form";

export default {
  name: "form-render",
  components: {
    FText,
    FTextarea,
    FSwitcher,
    FRadio,
    FCheckbox,
    FSelect,
    FDate,
    ProduceItem,
  },
  props: {
    form_list: Object,
  },
  setup() {
    const { selectComponent, removeComponent, dragEnter, dragStart, dragOver } = useForm();
    return {
      selectComponent,
      dragStart,
      dragEnter,
      dragOver,
      handleDelete: removeComponent,
    };
  },
};
