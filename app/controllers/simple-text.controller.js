const db = require("../models");
const SimpleText = db.simpleTexts;
const Op = db.Sequelize.Op;


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

  const simpleText = {
    sectionId: req.body.sectionId,
    statusId: req.body.statusId,
    variantId: req.body.variantId,
    locationId: req.body.locationId,
    collectionId: req.body.collectionId,
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
  if(req.body.sectionId) condition.sectionId = {[Op.or]: req.body.sectionId};
  if(req.body.statusId) condition.statusId = {[Op.or]: req.body.statusId};
  if(req.body.variantId) condition.variantId = {[Op.or]: req.body.variantId};
  if(req.body.locationId) condition.locationId = {[Op.or]: req.body.locationId};
  if(req.body.collectionId) condition.collectionId = {[Op.or]: req.body.collectionId};

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
  const id = req.params.id;

  SimpleText.update(req.body, {
    where: { id: id }
  })
    .then(num => {
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

exports.delete = (req, res) => {
  const id = req.params.id;

  SimpleText.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "SimpleText was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete SimpleText with id=${id}. Maybe SimpleText was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete SimpleText with id=" + id
      });
    });
};


