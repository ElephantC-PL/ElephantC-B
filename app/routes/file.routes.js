module.exports = app => {
    const file = require("../controllers/file.controller.js");       

    const express = require('express'); 
    
    const router = express.Router();  
 
    router.post("/", file.find);
    
    router.post("/create", file.create);

    router.post("/upload", file.uploadStorage.single('file'), file.uploadMethod);

    router.put("/:id", file.update);

    router.delete("/:id", file.delete);

    app.use('/file', router);
  };