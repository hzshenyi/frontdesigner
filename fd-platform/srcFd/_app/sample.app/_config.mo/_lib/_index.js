import "../../../../_public/_com.pub/fdui.mo/_lib/_index.js"//导入fdui组件库
import "../../../../_public/_com.pub/uniflow.mo/_lib/_index.js"//导入uniflow组件库

import service from "../_config/_service.js"
window.$fd.service = service;

import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import { Dialog } from 'vant';
import { Toast } from 'vant';
window.$fd.Dialog = Dialog;
window.$fd.Toast = Toast;
Vue.use(Vant);
