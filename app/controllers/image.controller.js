const db = require("../models");
const Image = db.images;
const Op = db.Sequelize.Op;


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
  if (!req.body.width) {
    res.status(400).send({
      message: "Width can not be empty!"
    });
    return;
  }
  if (!req.body.height) {
    res.status(400).send({
      message: "Height can not be empty!"
    });
    return;
  }
  if (!req.body.fileName) {
    res.status(400).send({
      message: "FileName can not be empty!"
    });
    return;
  }
  if (!req.body.alt) {
    res.status(400).send({
      message: "Alt can not be empty!"
    });
    return;
  }

  const image = {
    sectionId: req.body.sectionId,
    versionId: req.body.versionId,   
    locationId: req.body.locationId,
    width: req.body.width,
    height:  req.body.height,
    fileName: req.body.fileName,
    alt: req.body.alt
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
  if(req.body.versionId) condition.versionId = {[Op.or]: req.body.versionId};
  if(req.body.locationId) condition.locationId = {[Op.or]: req.body.locationId};

  Image.findAll({ where: condition })
    .then(data => {
      res.send(data);
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

  Image.update(req.body, {
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


