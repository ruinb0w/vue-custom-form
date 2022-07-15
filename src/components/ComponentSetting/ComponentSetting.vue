<template>
  <div class="component-setting">
    <form-render
      :form_list="
        (form.current_component && form.current_component.options) || {}
      "
    />
  </div>
</template>

<script src="./ComponentSetting.js"></script>
<style lang="scss" src="./ComponentSetting.scss" scoped></style>
