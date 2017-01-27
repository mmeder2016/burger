var express = require('express');
var burger = require("../models/burger.js");

var router = express.Router();

var burger = require("../models/burger.js");
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    console.log('router.get("/", function(req, res) {');
    burger.getAll(req, res);
});

router.post("/", function(req, res) {
    console.log('router.post("/", function(req, res) {');
    burger.addBurger(req, res);
});
  
router.put("/:id", function(req, res) {
    console.log('router.put("/:'+req.params.id, +'", function(req, res) {');
    burger.devourBurger(req, res);
});

// Export routes for server.js to use.
module.exports = router;