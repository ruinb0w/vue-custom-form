<template>
  <item-wrapper
    v-if="component.options"
    :active="component.active"
    :custom="component.custom"
  >
    <div class="content-box">
      <div class="title">
        {{ component.options.title.value }}
        <span
          v-if="component.options.require && component.options.require.value"
          class="require"
          >*</span
        >
      </div>
      <el-input
        v-model="component.value"
        :disabled="component.custom"
        :maxlength="
          component.options.maxlength && component.options.maxlength.value
        "
        type="textarea"
        :resize="component.custom ? 'none' : 'vertical'"
        :placeholder="
          component.options.placeholder && component.options.placeholder.value
        "
      />
    </div>
  </item-wrapper>
  <div v-else class="plain-box">
    <div class="title">{{ component.title }}</div>
    <el-input v-model="component.value" type="textarea" />
  </div>
</template>

<script src="./FTextarea.js"></script>
<style lang="scss" src="./FTextarea.scss" scoped></style>
