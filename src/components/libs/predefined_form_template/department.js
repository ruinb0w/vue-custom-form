export default {
  custom: true,
  type: "department",
  key: "department_code",
  options: {
    title: {
      title: "标题",
      type: "text",
      value: "部门",
    },
    require: {
      title: "必选",
      type: "switcher",
      value: false,
    },
  },
};
