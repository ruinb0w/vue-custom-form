<template>
  <div class="produce-item">
    <div class="title">{{ component.options.title.value || "请点击编辑进行设置" }}</div>
    <div class="operation">
      <el-button size="small" type="primary" @click="state.show_edit = true">编辑</el-button>
      <el-button size="small" type="danger">删除</el-button>
    </div>
    <edit-item v-model="state.show_edit" />
  </div>
</template>

<script src="./ProduceItem.js"></script>
<style lang="scss" src="./ProduceItem.scss" scoped></style>
