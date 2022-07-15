<template>
  <item-wrapper
    v-if="component.options"
    :active="component.active"
    :custom="component.custom"
  >
    <div class="content-box">
      <div class="title">
        {{ component.options.title.value
        }}<span v-if="component.options.require.value" class="require">*</span>
      </div>
      <el-radio-group v-model="component.value">
        <el-radio
          :label="index"
          :disabled="component.custom"
          v-for="(item, index) in component.options.radio_list.value.split(';')"
          :key="index"
        >
          {{ item }}
        </el-radio>
      </el-radio-group>
    </div>
  </item-wrapper>
  <div v-else class="plain-box">
    <div class="title">{{ component.title }}</div>
    <el-radio-group v-model="component.value">
      <el-radio
        :label="index"
        v-for="(item, index) in component.options.radio_list.value.split(';')"
        :key="index"
      >
        {{ item }}
      </el-radio>
    </el-radio-group>
  </div>
</template>

<script src="./FRadio.js"></script>
<style lang="scss" src="./FRadio.scss" scoped></style>
