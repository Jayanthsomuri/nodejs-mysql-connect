const {createPool} = require("mysql2");
const pool = createPool({
    host:"localhost",
    user:"root",
    password:"password",
    database:"sql_hr",
    connectionLimit:10,
    insecureAuth : true
})
pool.query(`select * from employees`,(err,result,fields)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})