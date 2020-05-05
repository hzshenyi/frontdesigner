class Resource{
    constructor(){
        this.fs = require('fs');
    }
    get(path){
        try{
            let html = this.fs.readFileSync(path,'utf-8').toString();
            return html;
        }catch(e){
           return e.message
        }
      
    } 
    save(path,body){
        try{
            let html = this.fs.writeFileSync(path,body);
            return html;
        }catch(e){
            console.log(e.message)
           return e.message
        }
        
    }
}
//export default Resource;

module.exports = new Resource();