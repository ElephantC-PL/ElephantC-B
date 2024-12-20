const db = require("../models");
const Color = db.colors;
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

  const color = {
    sectionId: req.body.sectionId,
    statusId: req.body.statusId,
    variantId: req.body.variantId,   
    locationId: req.body.locationId,
    value: req.body.value
  };
  
  Color.create(color)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Color."
      });
    });
};

exports.find = (req, res) => {
  condition = {};
  if(req.body.sectionId) condition.sectionId = {[Op.or]: req.body.sectionId};
  if(req.body.statusId) condition.statusId = {[Op.or]: req.body.statusId};
  if(req.body.variantId) condition.variantId = {[Op.or]: req.body.variantId};
  if(req.body.locationId) condition.locationId = {[Op.or]: req.body.locationId};

  Color.findAll({ where: condition })
    .then(data => {
      res.send(data);      
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Color."
      });
    });
}

exports.update = (req, res) => {
  const id = req.params.id;

  Color.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Color was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Color with id=${id}. Maybe Color was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Color with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Color.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Color was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Color with id=${id}. Maybe Color was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Color with id=" + id
      });
    });
};


