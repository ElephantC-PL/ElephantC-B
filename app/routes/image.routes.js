module.exports = app => {
    const image = require("../controllers/image.controller.js");
  
    var router = require("express").Router();    
 
    router.post("/", image.find);
    
    router.post("/create", image.create);

    router.put("/:id", image.update);

    router.delete("/:id", image.delete);

    app.use('/image', router);
  };