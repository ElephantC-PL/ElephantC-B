module.exports = app => {
    const simpleTexts = require("../controllers/simple-text.controller.js");
  
    var router = require("express").Router();    
 
    router.post("/", simpleTexts.create);  
    
    router.get("/", simpleTexts.find);

    router.put("/", simpleTexts.update);

    app.use('/api/simple-texts', router);
  };