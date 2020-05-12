const jsonserver = require("json-server")

let instance 

class JSONServer {

    constructor(){
        if(instance){
            return instance
        }
        this.server = jsonserver.create()
        instance = this
    }

    setRouter(data){
        this.router = jsonserver.router(data)
    }

    setMiddle(){
        this.middle = jsonserver.defaults({noCors:true})
    }
    
    config(){
        this.server.use(this.router)
        this.server.use(this.middle)
    }

    listen(port,cb){
        this.serverClose = this.server.listen(port,cb)
    }

    close(){
        this.serverClose.close()
    }
}

module.exports = JSONServer
