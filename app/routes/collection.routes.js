module.exports = app => {
    const collection = require("../controllers/collection.controller.js");
  
    var router = require("express").Router();    
 
    router.post("/", collection.find);
    
    router.post("/create", collection.create);

    router.put("/:id", collection.update);

    router.delete("/:id", collection.delete);

    app.use('/collection', router);
  };