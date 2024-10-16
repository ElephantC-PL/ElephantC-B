module.exports = app => {
    const versions = require("../controllers/version.controller.js");
  
    var router = require("express").Router();

    // Create a new 
    router.post("/", versions.create);
  
    // Retrieve all Tutorials
    router.get("/", versions.findAll);
  
    // Retrieve a single 
    router.get("/:id", versions.findOne);

    app.use('/api/versions', router);
  };