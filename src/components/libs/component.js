export default function useComponent() {
  return {
    getTypes,
    getComponent,
  };
}

function getTypes() {
  return {
    text: "单行文本框",
    textarea: "多行文本框",
    switcher: "开关",
    radio: "单选",
    checkbox: "多选",
    select: "下拉选择",
    date: "日期",
    department: "部门",
    talent: "人才分类",
  };
}

function getComponent(type) {
  return components[type];
}

import text from "./form/text";
import textarea from "./form/textarea";
import switcher from "./form/switcher";
import radio from "./form/radio";
import checkbox from "./form/checkbox";
import select from "./form/select";
import date from "./form/date";

import department from "./predefined_form_template/department";
import talent from "./predefined_form_template/talent";

const components = {
  text,
  textarea,
  switcher,
  radio,
  checkbox,
  select,
  date,
  department,
  talent,
};
