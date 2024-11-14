const db = require("../models");
const File = db.files;
const Op = db.Sequelize.Op;

const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'img'); 
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); 
  }
});

exports.create = (req, res) => {
  if (!req.body.sectionId) {
    res.status(400).send({
      message: "SectionId can not be empty!"
    });
    return;
  }
  if (!req.body.versionId) {
    res.status(400).send({
      message: "VersionId can not be empty!"
    });
    return;
  }
  if (!req.body.locationId) {
    res.status(400).send({
      message: "LocationId can not be empty!"
    });
    return;
  }
  if (!req.body.value.fileName) {
    res.status(400).send({
      message: "FileName can not be empty!"
    });
    return;
  }
  if (!req.body.value.linkText) {
    res.status(400).send({
      message: "LinkText can not be empty!"
    });
    return;
  }

  const file = {
    sectionId: req.body.sectionId,
    versionId: req.body.versionId,   
    locationId: req.body.locationId,
    fileName: req.body.value.fileName,
    linkText: req.body.value.linkText
  };
  
  File.create(file)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the File."
      });
    });
};

exports.find = (req, res) => {
  condition = {};
  if(req.body.sectionId) condition.sectionId = {[Op.or]: req.body.sectionId};
  if(req.body.versionId) condition.versionId = {[Op.or]: req.body.versionId};
  if(req.body.locationId) condition.locationId = {[Op.or]: req.body.locationId};

  File.findAll({ where: condition })
  .then(data => {     
    const processedData = data.map(item => {       
      const plainItem = item.toJSON();
      plainItem.value = {       
        fileName: plainItem.fileName,
        linkText: plainItem.linkText
      }; 
      return plainItem;
    });

    res.send(processedData);
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving File."
      });
    });
}

exports.update = (req, res) => {
  const id = req.params.id;
  const data = req.body;   

  if(req.body.value.fileName) data.fileName = req.body.value.fileName;
  if(req.body.value.linkText) data.alt = req.body.value.linkText;

  File.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "File was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update File with id=${id}. Maybe File was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating File with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  File.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "File was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete File with id=${id}. Maybe File was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete File with id=" + id
      });
    });
};

exports.uploadMethod = (req, res) => {
  if (req.file) {
    res.status(200).json({ message: 'File uploaded successfully' });
  } else {
    res.status(400).json({ message: 'No file uploaded' });
  }
}

exports.uploadStorage = multer({ storage });


