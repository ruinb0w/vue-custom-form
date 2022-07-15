import ComponentPanel from "../ComponentPanel/ComponentPanel.vue";
import ComponentSetting from "../ComponentSetting/ComponentSetting.vue";
import ComponentPreview from "../ComponentPreview/ComponentPreview.vue";

export default {
  name: "form-design",
  props: {
    preset_component_list: {
      type: Array,
      default: [],
    },
  },
  components: { ComponentPanel, ComponentPreview, ComponentSetting },
};
