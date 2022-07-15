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
      <el-checkbox-group v-model="component.value">
        <el-checkbox
          :label="index"
          v-for="(item, index) in component.options.check_list.value.split(';')"
          :key="index"
        >
          {{ item }}
        </el-checkbox>
      </el-checkbox-group>
    </div>
  </item-wrapper>
  <div v-else class="plain-box">
    <div class="title">{{ component.title }}</div>
    <el-checkbox-group v-model="component.value">
      <el-checkbox
        :label="index"
        v-for="(item, index) in component.options.check_list.value.split(';')"
        :key="index"
      >
        {{ item }}
      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script src="./FCheckbox.js"></script>
<style lang="scss" src="./FCheckbox.scss" scoped></style>
