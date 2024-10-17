const db = require("../models");
const SimpleText = db.simpleTexts;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
  if (!req.body.locationId) {
    res.status(400).send({
      message: "LocationId can not be empty!"
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
      message: "Value can not be empty!"
    });
    return;
  }

  const simpleText = {
    locationId: req.body.locationId,
    versionId: req.body.versionId,
    value: req.body.value
  };
  
  SimpleText.create(simpleText)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the SimpleText."
      });
    });
};

exports.find = (req, res) => {
  condition = {};
  if(req.body.locationId) condition.locationId = {[Op.or]: req.body.locationId};
  if(req.body.versionId) condition.versionId = {[Op.or]: req.body.versionId};

  SimpleText.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving SimpleText."
      });
    });
}

exports.update = (req, res) => {
  if (!req.body.versionId) {
    res.status(400).send({
      message: "VersionId can not be empty!"
    });
    return;
  }
  if (!req.body.locationId) {
    res.status(400).send({
      message: "Value can not be empty!"
    });
    return;
  }

  changes = {
    value: req.body.value
  }

  condition = {
    locationId: +req.body.locationId,
    versionId: +req.body.versionId
  }; 
 
  SimpleText.update(changes, {
    where: condition
  }).then(num => {
      if (num == 1) {
        res.send({
          message: "SimpleText was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update SimpleText with id=${id}. Maybe SimpleText was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating SimpleText with id=" + id
      });
    });
};



