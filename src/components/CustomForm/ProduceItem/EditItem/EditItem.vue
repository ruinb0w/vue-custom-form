<template>
  <el-dialog custom-class="edit-item" v-model="state.show_dialog" title="编辑条目">
    <form-item label="分类" require>
      <el-select />
    </form-item>
    <form-item label="农资名称">
      <el-input placeholder="请输入农资名称" />
    </form-item>
    <form-item label="数量">
      <el-input placeholder="请输入数量" style="margin-right: 10px" />
      <el-input placeholder="请输入单位" />
    </form-item>
    <form-item label="面积">
      <el-input placeholder="请输入面积(单位: 亩)" />
    </form-item>
    <form-item label="预计上市月份">
      <el-date-picker v-model="value1" type="month" placeholder="选择月份" :size="size" />
    </form-item>
    <template #footer>
      <el-button size="" type="primary">保存</el-button>
      <el-button size="">取消</el-button>
    </template>
  </el-dialog>
</template>

<script src="./EditItem.js"></script>
<style lang="scss" src="./EditItem.scss" scoped></style>
