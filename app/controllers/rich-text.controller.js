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

  const richText = {
    sectionId: req.body.sectionId,
    statusId: req.body.statusId,
    variantId: req.body.variantId,
    locationId: req.body.locationId,
    value: JSON.stringify(req.body.value)
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
  if(req.body.statusId) condition.statusId = {[Op.or]: req.body.statusId};
  if(req.body.variantId) condition.variantId = {[Op.or]: req.body.variantId};
  if(req.body.locationId) condition.locationId = {[Op.or]: req.body.locationId};

  RichText.findAll({ where: condition })
  .then(data => {     
    const processedData = data.map(item => {       
      const plainItem = item.toJSON();
      plainItem.value = JSON.parse(plainItem.value)        
      return plainItem;
    });

    res.send(processedData);
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

  if(req.body.value) req.body.value = JSON.stringify(req.body.value);

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


