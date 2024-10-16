module.exports = app => {
    const locations = require("../controllers/location.controller.js");
  
    var router = require("express").Router();
    
    // Create a new 
    router.post("/", locations.create);
  
    // Retrieve all 
    router.get("/", locations.findAll);
  
    // Retrieve a single 
    router.get("/:id", locations.findOne);

    app.use('/api/locations', router);
  };