import { ref } from "vue";
import useComponent from "./component";

export default function useForm() {
  return {
    addComponent,
    selectComponent,
    removeComponent,
    getTemplateList,
    setComponentList,
    form,
    dragStart,
    dragEnter,
    dragOver,
  };
}

const form = ref({
  component_list: [],
  current_component: {},
  drag_index: 0,
});

function setComponentList(component_list) {
  form.value.component_list = JSON.parse(JSON.stringify(component_list));
}

function addComponent(type) {
  const { getComponent } = useComponent();
  const isolate_component = JSON.parse(JSON.stringify(getComponent(type)));
  form.value.component_list.push(isolate_component);
  selectComponent(form.value.component_list.length - 1);
}

function selectComponent(index) {
  if (form.value.current_component) {
    form.value.current_component.active = false;
    form.value.current_component = form.value.component_list[index];
    form.value.current_component.active = true;
  } else if (form.value.component_list.length > 0) {
    form.value.current_component = form.value.component_list[0];
  }
}

function removeComponent(index) {
  form.value.current_component = null;
  form.value.component_list.splice(index, 1);
}

function getTemplateList() {
  return form.value.component_list;
}

function dragStart(index) {
  form.value.drag_index = index;
}

function dragEnter(e, index) {
  console.log("index", index);
  e.preventDefault();
  if (form.value.drag_index !== index) {
    const source = form.value.component_list[form.value.drag_index];
    form.value.component_list.splice(form.value.drag_index, 1);
    form.value.component_list.splice(index, 0, source);
    form.value.drag_index = index;
  }
}

function dragOver(e) {
  e.preventDefault();
}
