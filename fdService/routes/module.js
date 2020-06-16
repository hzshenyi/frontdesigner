var express = require('express');
var router = express.Router();
//import Resource from "../services/Resource.js";
let moduleObj = require("../services/Module");

/* GET users listing. */
router.get('/get', function(req, res, next) {
  res.header("Content-Type", "text/html;charset=utf-8");
  let app = req.param("_app");
  let module = req.param("module");
  let resourcePath = req.param("_resourcePath");
  global.index.logger.log("路由:module->get"+"module="+module+" resource="+resourcePath)
 
  let html = moduleObj.get(app,resourcePath);
  res.send(html);
});
/**
 * url:${context}/resource/save  参数 post {path:path,body:body}
 */
router.post('/save', function(req, res, next) {
 let app = req.param("_app");
 //let moduleName = req.param("module");
 let _resourcePath = req.param("_resourcePath");
 let body = req.body.body;
  
 let html = moduleObj.save(app,_resourcePath,body);
  res.send(html);
});

router.get('/getList', function(req, res, next) {
  res.header("Content-Type", "text/html;charset=utf-8");
  //let space = req.param("_space");
  let app = req.param("_app"); 
  global.index.logger.log("路由:module->getList");
  let html = moduleObj.getList(app);
  res.send(html);
});
router.get('/getPlatformConfig', function(req, res, next) {
  res.header("Content-Type", "text/html;charset=utf-8");

  global.index.logger.log("路由:module->getPlatformConfig")
  
  let html = moduleObj.getPlatformConfig();
  res.send(html);
});
module.exports = router;
 