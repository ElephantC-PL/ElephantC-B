module.exports = app => {
    const embedHtmls = require("../controllers/embed-html.controller.js");
  
    var router = require("express").Router();    
 
    router.post("/", embedHtmls.find);
    
    router.post("/create", embedHtmls.create);

    router.put("/:id", embedHtmls.update);

    router.delete("/:id", embedHtmls.delete);

    app.use('/embed-html', router);
  };