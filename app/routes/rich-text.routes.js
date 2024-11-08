module.exports = app => {
    const richTexts = require("../controllers/rich-text.controller.js");
  
    var router = require("express").Router();    
 
    router.post("/", richTexts.find);
    
    router.post("/create", richTexts.create);

    router.put("/:id", richTexts.update);

    router.delete("/:id", richTexts.delete);

    app.use('/rich-text', router);
  };