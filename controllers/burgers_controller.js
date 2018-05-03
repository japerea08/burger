//these are the routes
const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res){
  burger.selectAll(function(data){
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);

  });

});

router.post("/api/burgers", function(req, res) {
  //test it
  console.log("You sent " + req.body.name);
  //return res.send("You sent " + req.body.name);
  burger.insert(req.body.name, function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition:", condition);

  burger.update(req.params.id, function(result){
    if(result.changedRows ==0){
      return res.status(404).end();
    }
    else{
      res.status(200).end();
    }

  });
});

// Export routes for server.js to use.
module.exports = router;