var mysql=require('mysql')
var pool=mysql.createPool({
    host:'localhost',
    port:3306,
    user:'root',
    password:'Muskan@2001',
    database:'flights',
    connectionLimit:100
})

module.exports=pool;
