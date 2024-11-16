const db = require("../models");
const Image = db.images;
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
  if (!req.body.statusId) {
    res.status(400).send({
      message: "StatusId can not be empty!"
    });
    return;
  }
  if (!req.body.locationId) {
    res.status(400).send({
      message: "LocationId can not be empty!"
    });
    return;
  }
  if (!req.body.value.width) {
    res.status(400).send({
      message: "Width can not be empty!"
    });
    return;
  }
  if (!req.body.value.height) {
    res.status(400).send({
      message: "Height can not be empty!"
    });
    return;
  }
  if (!req.body.value.fileName) {
    res.status(400).send({
      message: "FileName can not be empty!"
    });
    return;
  }
  if (!req.body.value.alt) {
    res.status(400).send({
      message: "Alt can not be empty!"
    });
    return;
  }

  const image = {
    sectionId: req.body.sectionId,
    statusId: req.body.statusId,
    variantId: req.body.variantId,  
    locationId: req.body.locationId,
    width: req.body.value.width,
    height:  req.body.value.height,
    fileName: req.body.value.fileName,
    alt: req.body.value.alt
  };
  
  Image.create(image)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Image."
      });
    });
};

exports.find = (req, res) => {
  condition = {};
  if(req.body.sectionId) condition.sectionId = {[Op.or]: req.body.sectionId};
  if(req.body.statusId) condition.statusId = {[Op.or]: req.body.statusId};
  if(req.body.variantId) condition.variantId = {[Op.or]: req.body.variantId};
  if(req.body.locationId) condition.locationId = {[Op.or]: req.body.locationId};

  Image.findAll({ where: condition })
    .then(data => {     
      const processedData = data.map(item => {       
        const plainItem = item.toJSON();
        plainItem.value = {
          width: plainItem.width,
          height: plainItem.height,
          fileName: plainItem.fileName,
          alt: plainItem.alt
        }; 
        return plainItem;
      });

      res.send(processedData);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Image."
      });
    });
}

exports.update = (req, res) => {
  const id = req.params.id;
  const data = req.body;   

  if(req.body.value.width) data.width = req.body.value.width;
  if(req.body.value.height) data.height = req.body.value.height;
  if(req.body.value.fileName) data.fileName = req.body.value.fileName;
  if(req.body.value.alt) data.alt = req.body.value.alt;

  Image.update(data, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Image was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Image with id=${id}. Maybe Image was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Image with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Image.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Image was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Image with id=${id}. Maybe Image was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Image with id=" + id
      });
    });
};

exports.uploadMethod = (req, res) => {
  if (req.file) {
    res.status(200).json({ message: 'Image uploaded successfully' });
  } else {
    res.status(400).json({ message: 'No Image uploaded' });
  }
}

exports.uploadStorage = multer({ storage });
