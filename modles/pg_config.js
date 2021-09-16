const Pool = require('pg').Pool;
const pg_conn = new Pool({
    user: 'jiskddubuwgnrh',
    host: 'ec2-44-198-223-154.compute-1.amazonaws.com',
    database: 'd2hkvbc4qa35kv',
    password: '7d8fa3807764903212a5803eb0cec049f88a52b03421f967dca27873e11b09e7',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    },
});
module.exports = pg_conn;