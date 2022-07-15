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
      <el-select
        class="input"
        v-model="component.value"
        :placeholder="component.placeholder"
        :disabled="
          component.options.disabled && component.options.disabled.value
        "
        clearable
      >
        <el-option
          v-if="component.options.option_list"
          :label="item"
          :value="item"
          v-for="(item, index) in component.options.option_list.value.split(
            ';'
          )"
          :key="index"
        />
      </el-select>
    </div>
  </item-wrapper>
  <div v-else class="plain-box">
    <div class="title">{{ component.title }}</div>
    <el-select
      v-model="component.value"
      :placeholder="component.placeholder"
      :disabled="component.disabled"
    >
      <el-option
        :label="item"
        :value="item"
        v-for="(item, index) in component.options.option_list.value.split(';')"
        :key="index"
      />
    </el-select>
  </div>
</template>

<script src="./FSelect.js"></script>
<style lang="scss" src="./FSelect.scss" scoped></style>
