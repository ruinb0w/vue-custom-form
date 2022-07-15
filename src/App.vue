<script setup>
import { ref } from "vue";
import FormDesign from "./components/FormDesign/FormDesign.vue";
import FormRender from "./components/FormRender/FormRender.vue";
const preset_component_list = ref([]);
</script>

<template>
  <h1>vue-custom-form</h1>
  <h2>FormDesign</h2>
  <form-design :preset_component_list="preset_component_list" />
</template>

<style>
body {
  background: #f7f8f9;
}
h1,
h2 {
  text-align: center;
}
.form-design {
  background: #fff;
}
</style>
