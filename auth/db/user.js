const pool = require('../../connections/db');

const findByCredentials = (phone, password)=> {
    const query = 'Select pa.id, pa.name, pa.email, pa.phone from partners_admins pa where pa.phone=? pa.password=?;'
   return pool.query(query, [phone, password], (err, results, fields)=>{
    if(err){
        throw err;
    }
    console.log(results, "query")
    return results;
   });

}

module.exports = findByCredentials;