module.exports = app => {
    const simpleTexts = require("../controllers/simple-text.controller.js");
  
    var router = require("express").Router();    
 
    router.post("/", simpleTexts.find);
    
    router.post("/create", simpleTexts.create);

    router.put("/:id", simpleTexts.update);

    app.use('/api/simple-texts', router);
  };