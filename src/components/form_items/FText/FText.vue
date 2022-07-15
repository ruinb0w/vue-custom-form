<template>
  <item-wrapper
    v-if="component.options"
    :active="component.active"
    :custom="component.custom"
  >
    <div
      :class="[
        'content-box',
        { inline: component.options.inline && component.options.inline.value },
      ]"
    >
      <div class="title">
        {{ component.options.title.value }}
        <span
          v-if="component.options.require && component.options.require.value"
          class="require"
          >*</span
        >
      </div>
      <el-input
        class="input"
        v-model="component.value"
        :disabled="
          component.options.disabled && component.options.disabled.value
        "
        :placeholder="
          component.options.placeholder && component.options.placeholder.value
        "
        :maxlength="
          component.options.maxlength && component.options.maxlength.value
        "
      />
    </div>
  </item-wrapper>
  <div v-else class="plain-box">
    <div class="title">{{ component.title }}</div>
    <el-input v-model="component.value" />
  </div>
</template>

<script src="./FText.js"></script>
<style lang="scss" src="./FText.scss" scoped></style>
