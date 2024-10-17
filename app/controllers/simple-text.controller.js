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

exports.findByLocationNVersion = (req, res) => {
  // if (!req.body.locationId) {
  //   res.status(400).send({
  //     message: "LocationId can not be empty!"
  //   });
  //   return;
  // }
  // if (!req.body.versionId) {
  //   res.status(400).send({
  //     message: "VersionId can not be empty!"
  //   });
  //   return;
    // }

  // const location = req.body.locationId ? +req.body.locationId : null;  
  // const version = req.body.versionId ? +req.body.versionId : null;  
  condition = {};
  if(req.body.locationId) condition.locationId = +req.body.locationId;
  if(req.body.versionId) condition.versionId = +req.body.versionId;

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







// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
 // const title = req.query.title;
 // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

 SimpleText.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving SimpleTexts."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  SimpleText.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find SimpleText with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving SimpleText with id=" + id
      });
    });
};

// Update a Tutorial by the id in the request
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

// Delete a Tutorial with the specified id in the request
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

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  SimpleText.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} SimpleText were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all SimpleTexts."
      });
    });
};





// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Tutorial.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};