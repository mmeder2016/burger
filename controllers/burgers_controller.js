var express = require('express');
var burger = require("../models/burger.js");

var router = express.Router();

var burger = require("../models/burger.js");
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    console.log('router.get("/", function(req, res) {');
    burger.getAll(req, res);
});

// router.post("/", function(req, res) {
//	var id = burger.addBurger("cheese2");
//     console.log('router.post("/", function(req, res) {');
//     cat.create([
//         "name", "sleepy"
//     ], [
//         req.body.name, req.body.sleepy
//     ], function() {
//         res.redirect("/");
//     });
// });


router.put("/:id", function(req, res) {
    console.log('router.put("/:'+req.params.id, +'", function(req, res) {');
    burger.devourBurger(req.params.id, function(data){
    	console.log(data);
    });
});

// Export routes for server.js to use.
module.exports = router;