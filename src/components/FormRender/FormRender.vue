<template>
  <div class="form-render">
    <template v-for="(item, index) in form_list" :key="index">
      <div
        class="content-box"
        @click="item.custom && selectComponent(index)"
        @dragstart="dragStart(index)"
        @dragenter="dragEnter($event, index)"
        @dragover="dragOver($event)"
      >
        <f-text
          :component="item"
          v-if="item.type == 'text'"
          @delete="handleDelete(index)"
        />
        <f-textarea
          :component="item"
          v-if="item.type == 'textarea'"
          @delete="handleDelete(index)"
        />
        <f-switcher
          :component="item"
          v-if="item.type == 'switcher'"
          @delete="handleDelete(index)"
        />
        <f-radio
          :component="item"
          v-if="item.type == 'radio'"
          @delete="handleDelete(index)"
        />
        <f-checkbox
          :component="item"
          v-if="item.type == 'checkbox'"
          @delete="handleDelete(index)"
        />
        <f-select
          :component="item"
          v-if="item.type == 'select'"
          @delete="handleDelete(index)"
        />
        <f-date
          :component="item"
          v-if="item.type == 'date'"
          @delete="handleDelete(index)"
        />
      </div>
    </template>
  </div>
</template>

<script src="./FormRender.js"></script>
<style lang="scss" src="./FormRender.scss" scoped></style>
