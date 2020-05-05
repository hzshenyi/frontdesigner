class Index {
    constructor() {
        this.fs = require('fs');
        this.logger = require("./core/Logger");
        //this.git = require('gitkit');
        
        //this.test()
        this.config = JSON.parse(this.fs.readFileSync("config.json").toString());//读取入口配置，即全局配置
    }
    test() {
        var NodeFS = require('gitkit/lib/fs/node');
 
        // Prepare the filesystem
        //var fs = NodeFS(process.cwd());
        var fs = NodeFS("D:/dev/service/nodejs/test/gitclonetest/wrdp");
        // Create a repository instance 
        var repo = this.git.Repository.createWithFS(fs, false);
        var transport = new this.git.HTTPTransport('https://github.com/GitbookIO/gitbook.git');
        
        this.git.TransferUtils.clone(repo, transport)
            .then(function () {
                console.log("clone success");
                // Clone succeed!
            }, function (err) {  
                console.log(err);  
                // Clone failed 
            })  
    }
  
} 
//export default Resource; 
module.exports = new Index();  