import FormDesign from "./components/FormDesign/FormDesign.vue";
import FormRender from "./components/FormRender/FormRender.vue";

export { FormDesign, FormRender }; //实现按需引入

const components = [FormDesign, FormRender];

const install = function (App, options) {
  components.forEach((component) => {
    App.component(component.name, component);
  });
};

export default { install }; // 实现批量引入
