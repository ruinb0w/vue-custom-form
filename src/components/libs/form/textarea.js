export default {
  custom: true,
  type: "textarea",
  options: {
    title: {
      title: "标题",
      type: "text",
      value: "多行文本框",
    },
    maxlength: {
      title: "字数",
      type: "text",
      value: 100,
    },
    require: {
      title: "必填",
      type: "switcher",
      value: false,
    },
  },
};
