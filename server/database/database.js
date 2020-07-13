const mysql = require('mysql');

let pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'todoappdemodb'
});

let getConnection = function (callback) {
    pool.getConnection((error, conn) => {
        callback(error, conn);
    })
}

module.exports = getConnection;