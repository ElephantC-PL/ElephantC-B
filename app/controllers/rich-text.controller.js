const db = require("../models");
const RichText = db.richTexts;
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
  if (!req.body.location) {
    res.status(400).send({
      message: "Location can not be empty!"
    });
    return;
  }

  const richText = {
    sectionId: req.body.sectionId,
    versionId: req.body.versionId,
    location: req.body.location,
    value: req.body.value
  };
  
  RichText.create(richText)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the RichText."
      });
    });
};

exports.find = (req, res) => {
  condition = {};
  if(req.body.sectionId) condition.sectionId = {[Op.or]: req.body.sectionId};
  if(req.body.versionId) condition.versionId = {[Op.or]: req.body.versionId};

  RichText.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving RichText."
      });
    });
}

exports.update = (req, res) => {
  const id = req.params.id;

  RichText.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "RichText was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update RichText with id=${id}. Maybe RichText was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating RichText with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  RichText.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "RichText was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete RichText with id=${id}. Maybe RichText was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete RichText with id=" + id
      });
    });
};


