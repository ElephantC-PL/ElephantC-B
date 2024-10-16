const db = require("../models");
const Version = db.versions;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {   
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }  
   
    const version = {
      name: req.body.name,      
    };  
   
    Version.create(version)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Version."
        });
      });
  };

exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Version.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving versions."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Version.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Verion with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Verion with id=" + id
      });
    });
};


