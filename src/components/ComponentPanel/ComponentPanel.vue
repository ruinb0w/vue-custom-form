<template>
  <div class="component-panel">
    <el-button
      v-for="(val, key) in types"
      type="primary"
      plain
      @click="addComponent(key)"
    >
      {{ val }}
    </el-button>
  </div>
</template>

<script src="./ComponentPanel.js"></script>
<style lang="scss" src="./ComponentPanel.scss" scoped></style>
