<template>
  <div
    :class="['component-wrapper', { active }, { custom }]"
    :draggable="custom && active"
  >
    <div class="operation-box" v-if="active">
      <div class="item" @click="emitDelete">删除</div>
      <Rank class="item icon" />
    </div>
    <slot />
  </div>
</template>

<script src="./ItemWrapper.js"></script>
<style lang="scss" src="./ItemWrapper.scss" scoped></style>
