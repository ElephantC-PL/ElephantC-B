module.exports = app => {
    const color = require("../controllers/color.controller.js");
  
    var router = require("express").Router();    
 
    router.post("/", color.find);
    
    router.post("/create", color.create);

    router.put("/:id", color.update);

    router.delete("/:id", color.delete);

    app.use('/color', router);
  };