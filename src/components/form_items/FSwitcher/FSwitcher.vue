<template>
  <item-wrapper
    v-if="component.options"
    :active="component.active"
    :custom="component.custom"
  >
    <div class="content-box">
      <div class="title">{{ component.options.title.value }}</div>
      <el-switch v-model="component.value" />
    </div>
  </item-wrapper>
  <div v-else class="plain-box">
    <div class="title">{{ component.title }}</div>
    <el-switch v-model="component.value" />
  </div>
</template>

<script src="./FSwitcher.js"></script>
<style lang="scss" src="./FSwitcher.scss" scoped></style>
