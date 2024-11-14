module.exports = app => {
    const image = require("../controllers/image.controller.js");       

    const express = require('express'); 
    
    const router = express.Router();  
 
    router.post("/", image.find);
    
    router.post("/create", image.create);

    router.post("/upload", image.uploadStorage.single('file'), image.uploadMethod);

    router.put("/:id", image.update);

    router.delete("/:id", image.delete);

    app.use('/image', router);
  };