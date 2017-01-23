var mysql = require('mysql');

module.exports = function(app) {

    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "M3605416octo",
        database: "burgers_db",
    });

    try {
        connection.connect(function(err) {
            if (err)
                throw err;
            //getPurchase();
        });
    } catch (err) {
        console.log("Exception caught: " + err);
    }
};