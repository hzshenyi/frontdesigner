var express = require('express');
var router = express.Router();
//import Resource from "../services/Resource.js";
let resource = require("../services/Resource");

/* GET users listing. */
router.get('/get', function(req, res, next) {
  res.header("Content-Type", "text/html;charset=utf-8");
  let path = req.param("path");
  let html = resource.get(path);
  res.send(html);
});
/**
 * url:${context}/resource/save  参数 post {path:path,body:body}
 */
router.post('/save', function(req, res, next) {
// let path = req.body.path; 
// let body = req.body.body;
//console.log(req)
let path = req.param("path");
let body = req.body.body;
 let html = resource.save(path,body);
  res.send(html);
});

module.exports = router;
