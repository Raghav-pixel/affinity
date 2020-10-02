const pool = require('../../connections/db');


exports.getPlanUsers = async(planId) => {
    try {
        const query = `select 
        pu.name AS partnerUserName,
        pu.email, 
        pu.phone
        from plans p
        inner join partners_plans pp on p.id = pp.plan_id
        inner join partners_users pu on pp.partner_id = pu.id
        where p.id = ?`;

    return await pool.query(query, [planId]);
    } catch (error) {
        throw error;
    }
}