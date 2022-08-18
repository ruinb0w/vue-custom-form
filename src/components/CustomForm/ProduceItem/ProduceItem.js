import { useMain } from "./hook";
import EditItem from "./EditItem/EditItem.vue";

export default {
  name: "ProduceItem",
  components: { EditItem },
  props: { component: Object },
  setup() {
    const main = useMain();

    return { ...main };
  },
};
