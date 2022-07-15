<template>
  <item-wrapper
    v-if="component.options"
    :active="component.active"
    :custom="component.custom"
    class="f-date"
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
      <el-date-picker
        class="input"
        v-model="component.value"
        type="date"
        :placeholder="component.options.placeholder || '请选择日期'"
      />
    </div>
  </item-wrapper>
  <div v-else class="plain-box">
    <div class="title">{{ component.title }}</div>
    <el-date-picker
      v-model="component.value"
      type="date"
      placeholder="component.options.placeholder || '请选择日期'"
    />
  </div>
</template>

<script src="./FDate.js"></script>
<style lang="scss" src="./FDate.scss" scoped></style>
