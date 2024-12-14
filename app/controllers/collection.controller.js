const db = require("../models");
const Collection = db.collections;
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

  const collection = {
    sectionId: req.body.sectionId,
    statusId: req.body.statusId,
    variantId: req.body.variantId,
    locationId: req.body.locationId,
    value: req.body.value
  };
  
  Collection.create(collection)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Collection."
      });
    });
};

exports.find = (req, res) => {
  condition = {};
  if(req.body.sectionId) condition.sectionId = {[Op.or]: req.body.sectionId};
  if(req.body.statusId) condition.statusId = {[Op.or]: req.body.statusId};
  if(req.body.variantId) condition.variantId = {[Op.or]: req.body.variantId};
  if(req.body.locationId) condition.locationId = {[Op.or]: req.body.locationId};

  Collection.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Collection."
      });
    });
}

exports.update = (req, res) => {
  const id = req.params.id;

  Collection.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Collection was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Collection with id=${id}. Maybe Collection was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Collection with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Collection.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Collection was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Collection with id=${id}. Maybe Collection was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Collection with id=" + id
      });
    });
};


