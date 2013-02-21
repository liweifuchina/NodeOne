/*
    无论是当做方法使用还是new对象，均返回redisPool自定义对象
*/
function redisPool(db, server, port){
    if (this instanceof redisPool) {
        var self = this;
        self.server = server ? server : "127.0.0.1";
        self.port = port ? port : 6379;
        self.db = db ? db : 0;
        return self;
    }
    
    return new redisPool(db, server, port);
}

var pool = redisPool(4);
var pool2 = new redisPool(4);
alert(pool instanceof redisPool +'---'+ pool2 instanceof redisPool);