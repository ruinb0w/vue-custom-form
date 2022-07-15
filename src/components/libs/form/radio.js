export default {
  custom: true,
  type: "radio",
  options: {
    title: {
      title: "标题",
      type: "text",
      value: "单选",
    },
    require: {
      title: "必选",
      type: "switcher",
      value: "true",
    },
    radio_list: {
      title: "选项(多个选项用;分隔)",
      type: "textarea",
      value: "选项1;选项2",
    },
  },
};
