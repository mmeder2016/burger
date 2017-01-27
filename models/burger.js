var connection = require("../config/connection.js");

var burger = {

    getAll: function(req, res) {
        var all_query = "SELECT * FROM burgers";
        connection.query(all_query, function(err, data) {
            if (err) {
                throw err;
            }
            // handlebars object
            var hbsObj = {
                burger_db: data
            };
            console.log(hbsObj);
            res.render("index", hbsObj);
        });
    },

    addBurger: function(burger_name) {
        var id;
        var add_query = "INSERT INTO burgers (burger_name, devoured) VALUES (?,?)";
        connection.query(add_query, [burger_name, false], function(err, res) {
            if (err) {
                throw err;
            }
            console.log("addBurger res:\n" + res);
        });
        // See if res has id

        /*
        var query2 = "SELECT id FROM burgers WHERE burger_name=?";
        connection.query(query2, [burger.name], function(err, res) {
        	console.log(res);
        	id = res[0].id;
            if (err) {
                throw err;
            }
            connection.end();
        });
        */
        return id;
    },

    devourBurger: function(burger_id) {
        var update_query = "UPDATE burgers SET devoured=true WHERE id = ?";
        connection.query(query, [burger_id], function(err, res) {
            if (err) {
                throw err;
            }
            console.log("devourBurger res:\n" + res);
        });
    }

};
// Export the mysql functions
module.exports = burger;