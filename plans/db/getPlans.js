const pool = require('../../connections/db');


exports.getPlansFromDB = async()=> {
    try {
        const query = `select 
        id as planId,
        name,
        description
        from plans`;

       return await pool.query(query);
    } catch (error) {
        throw error;
    }
}