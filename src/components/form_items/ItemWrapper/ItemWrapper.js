import { Rank } from "@element-plus/icons-vue";

export default {
  name: "component-wrapper",
  components: { Rank },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    custom: {
      type: Boolean,
      default: false,
    },
  },
  setup(_, ctx) {
    return {
      emitDelete() {
        ctx.emit("delete");
      },
    };
  },
};
