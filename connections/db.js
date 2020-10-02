var mysql = require('mysql2/promise');

var pool = mysql.createPool({
    connectionLimit: 50,
    host: '52.66.10.155',
    user: 'backend',
    password: 'saiyan11',
    database: 'affinity'
});

pool.getConnection();

// pool.query(`select * from partners_admins`)
// .then((res)=> {
//     console.log(res)
// }).catch((err)=> {
//     console.log(err)
// })


module.exports = pool;