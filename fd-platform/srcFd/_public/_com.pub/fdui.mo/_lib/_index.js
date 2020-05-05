import Vue from "vue"
//注册公共组件
import fdLayout from "../_com/layout.vue"
import fdLayoutHead from "../_com/layout-head.vue"
import fdLayoutContent from "../_com/layout-content.vue"
import fdFormCheckbox from "../_com/form-checkbox.vue"
import fdFormSelect from "../_com/form-select.vue"

Vue.component("fd-layout",fdLayout);
Vue.component("fd-layout-head",fdLayoutHead);
Vue.component("fd-layout-content",fdLayoutContent);
Vue.component("fd-layout-foot",fdLayoutHead);
Vue.component("fd-form-checkbox",fdFormCheckbox);
Vue.component("fd-form-select",fdFormSelect);