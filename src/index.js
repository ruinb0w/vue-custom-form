import FormDesign from "./components/FormDesign/FormDesign.vue";
import FormRender from "./components/FormRender/FormRender.vue";

const components = [FormRender, FormDesign];

const install = function (Vue) {
  if (install.installed) return;
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export { FormDesign, FormRender };

export default {
  install,
};
