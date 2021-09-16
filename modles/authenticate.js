var pg_config = require('./pg_config');
async function authen(user, pass) {
    var authenticated = false;
    // var acc_query = ` SELECT*FROM account WHERE account_name = ${user}
    //      AND account_password = ${pass};`
    const acc_query = {
        text: 'SELECT * FROM account WHERE account_name=$1 AND account_password = $2',
        values: [user, pass]
    };
    var query_data = await pg_config.query(acc_query);
    if (query_data.rows.length == 1) {
        authenticated = true;
    }
    console.log(authenticated);
    return authenticated;
}
module.exports = authen;